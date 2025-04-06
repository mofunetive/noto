import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthsModule } from "./controller/auths/auths.module";
import { NotesModule } from "./controller/notes/notes.module";
import { UsersModule } from "./controller/users/users.module";
import { AuthMiddleware } from "./middleware/auth.middleware";
import { PrismaModule } from "./service/prisma/prisma.module";

@Module({
	imports: [
		PrismaModule,
		NotesModule,
		UsersModule,
		AuthsModule,
		ConfigModule.forRoot({
			envFilePath: ["../../.env"],
			isGlobal: true,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(AuthMiddleware).forRoutes("*path");
	}
}
