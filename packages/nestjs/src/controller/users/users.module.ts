import { Module } from "@nestjs/common";

import { PrismaModule } from "../../service/prisma/prisma.module";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
	controllers: [UsersController],
	providers: [UsersService],
	imports: [PrismaModule],
})
export class UsersModule {}
