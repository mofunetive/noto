import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./controller/notes/notes.module";
import { PrismaModule } from "./service/prisma/prisma.module";
import { UsersModule } from "./controller/users/users.module";
import { AuthsModule } from "./controller/auths/auths.module";

@Module({
	imports: [PrismaModule, NotesModule, UsersModule, AuthsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
