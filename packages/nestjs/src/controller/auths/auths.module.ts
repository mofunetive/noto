import { Module } from "@nestjs/common";
import { AuthsService } from "./auths.service";
import { AuthsController } from "./auths.controller";
import { PrismaModule } from "../../service/prisma/prisma.module";

@Module({
	controllers: [AuthsController],
	providers: [AuthsService],
	imports: [PrismaModule],
})
export class AuthsModule {}
