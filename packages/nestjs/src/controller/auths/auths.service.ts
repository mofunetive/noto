import { Injectable } from "@nestjs/common";
import CreateAuthDto from "./dto/create-auth.dto";
import UpdateAuthDto from "./dto/update-auth.dto";
import { PrismaService } from "../../service/prisma/prisma.service";

@Injectable()
export class AuthsService {
	constructor(private readonly prisma: PrismaService) {}

	create(createAuthDto: CreateAuthDto) {
		return this.prisma.users.create({
			data: createAuthDto,
		});
	}

	findAll() {
		return this.prisma.users.findMany({
			where: { deleted_at: null },
		});
	}

	findOne(id: string) {
		return this.prisma.users.findUnique({
			where: { id },
		});
	}

	update(id: string, updateAuthDto: UpdateAuthDto) {
		return this.prisma.users.update({
			where: { id },
			data: updateAuthDto,
		});
	}

	remove(id: string) {
		return this.prisma.users.update({
			where: { id },
			data: { deleted_at: new Date() },
		});
	}
}
