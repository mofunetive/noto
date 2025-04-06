import { Module } from "@nestjs/common";

import { PrismaModule } from "../../service/prisma/prisma.module";
import { AuthsController } from "./auths.controller";
import { AuthsService } from "./auths.service";

@Module({
	controllers: [AuthsController],
	providers: [AuthsService],
	imports: [PrismaModule],
})
export class AuthsModule {}
