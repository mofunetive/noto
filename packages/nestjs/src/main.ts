import { VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

const isDev = process.env.npm_lifecycle_event === "dev" || process.env.NODE_ENV === "development" ? true : false;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: isDev ? "*" : "https://noto-mofu.vercel.app",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		allowedHeaders: "Content-Type,Authorization",
	});

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
		customSiteTitle: "API",
		...(!isDev && {
			customCssUrl: ["https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.20.6/swagger-ui.min.css"],
			customJs: [
				"https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.20.6/swagger-ui-bundle.js",
				"https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.20.6/swagger-ui-standalone-preset.js",
			],
		}),
	});

	await app.listen(isDev ? 1111 : 3000);
}
void bootstrap();
