import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder().setTitle("Noto").setVersion("0.1").addBearerAuth().build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup("api", app, document, {
		customCss: ".swagger-ui .topbar { display: none }",
	});

	await app.listen(1111);
}
bootstrap();
