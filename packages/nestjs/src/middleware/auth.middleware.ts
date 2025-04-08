import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

import { PrismaService } from "../service/prisma/prisma.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
	constructor(private readonly prismaService: PrismaService) {}

	async use(req: Request, res: Response, next: NextFunction) {
		const token = req.headers["authorization"];

		if (!token) {
			throw new UnauthorizedException("Invalid or missing token");
		}

		const bearerToken = token.split(" ");
		if (bearerToken[0] !== "Bearer" || !bearerToken[1]) {
			throw new UnauthorizedException("Invalid token format");
		}

		const tokenValue = bearerToken[1];
		const refreshToken = await this.prismaService.refresh_tokens.findFirstOrThrow({
			where: { token: tokenValue },
		});

		if (refreshToken.user_id) {
			let user = await this.prismaService.user.findUnique({
				where: { authId: refreshToken.user_id },
			});

			if (!user) {
				const authUser = await this.prismaService.users.findUnique({
					where: { id: refreshToken.user_id },
				});

				if (!authUser) {
					throw new Error(`Auth user with id ${refreshToken.user_id} not found`);
				}

				user = await this.prismaService.user.create({
					data: {
						name: typeof authUser.raw_user_meta_data === "object" ? ((authUser.raw_user_meta_data as { full_name?: string })?.full_name ?? "Unknown User") : "Unknown User",
						email: authUser?.email ?? "",
						authId: authUser?.id,
						createdAt: new Date(),
					},
				});
			}

			if (user.authId) {
				req.headers["userId"] = user.id.toString();
				req.headers["authId"] = user.authId;
			}
		}
		next();
	}
}
