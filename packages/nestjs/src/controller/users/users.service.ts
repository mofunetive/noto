import { Injectable, Req } from "@nestjs/common";

import { PrismaService } from "../../service/prisma/prisma.service";
import CreateUserDto from "./dto/create-user.dto";
import UpdateUserDto from "./dto/update-user.dto";

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	create(createUserDto: CreateUserDto) {
		return this.prisma.user.create({
			data: createUserDto,
		});
	}

	find(@Req() req: Request) {
		return this.prisma.user.findUnique({
			where: {
				authId: req.headers["authId"] as string,
			},
		});
	}

	update(@Req() req: Request, updateUserDto: UpdateUserDto) {
		return this.prisma.user.update({
			where: {
				authId: req.headers["authId"] as string,
			},
			data: updateUserDto,
		});
	}

	remove(@Req() req: Request) {
		return this.prisma.user.delete({
			where: { authId: req.headers["authId"] as string },
		});
	}
}
