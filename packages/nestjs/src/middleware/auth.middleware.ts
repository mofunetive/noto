import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
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
		const refreshToken = await this.prismaService.refresh_tokens.findFirst({
			where: { token: tokenValue },
		});

		if (!refreshToken) {
			throw new UnauthorizedException("Token not found");
		}

		const userId = await this.prismaService.user.findFirst({
			where: {
				authId: refreshToken.user_id,
			},
		});

		if (!userId || !userId.authId) {
			throw new UnauthorizedException("User ID not found in token");
		}

		req.headers["userId"] = userId.authId;
		next();
	}
}
