import { Injectable, Req } from "@nestjs/common";

import { PrismaService } from "../../service/prisma/prisma.service";
import CreateAuthDto from "./dto/create-auth.dto";
import UpdateAuthDto from "./dto/update-auth.dto";

@Injectable()
export class AuthsService {
	constructor(private readonly prisma: PrismaService) {}

	create(createAuthDto: CreateAuthDto) {
		return this.prisma.users.create({
			data: createAuthDto,
		});
	}

	find(@Req() req: Request) {
		return this.prisma.users.findUnique({
			where: { id: req.headers["authId"] as string },
		});
	}

	update(@Req() req: Request, updateAuthDto: UpdateAuthDto) {
		return this.prisma.users.update({
			where: { id: req.headers["authId"] as string },
			data: updateAuthDto,
		});
	}

	remove(@Req() req: Request) {
		return this.prisma.users.update({
			where: { id: req.headers["authId"] as string },
			data: { deleted_at: new Date() },
		});
	}
}
