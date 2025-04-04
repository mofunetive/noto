import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { VersioningType } from "@nestjs/common";

const port = process.env.npm_lifecycle_event === "dev" || process.env.NODE_ENV === "development" ? 1111 : 3000;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix("api/v1");
	app.enableVersioning({
		type: VersioningType.URI,
	});

	const config = new DocumentBuilder()
		.setTitle("Noto")
		.setVersion("1.0")
		.addBearerAuth({
			type: "http",
			scheme: "bearer",
			description: "User Token",
		})
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup("api", app, document, {
		customCss: `
    .scheme-container {
    	background-color: transparent !important;
    	box-shadow: none !important;
    	margin: none !important;
      padding: 0 !important;
    }
   .curl-command { display: none; }
   .swagger-ui .topbar { display: none; }
   .swagger-ui .opblock { box-shadow: none !important; }
   .swagger-ui .topbar-wrapper img { display: none; }
   `,
		swaggerUiEnabled: true,
	});

	await app.listen(port);
}
void bootstrap();
