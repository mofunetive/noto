import { ApiProperty } from "@nestjs/swagger";
import { SsoProviders } from "../../ssoProviders/entities/ssoProviders.entity";

export class SsoDomains {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
	})
	sso_provider_id: string;
	@ApiProperty({
		type: "string",
	})
	domain: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	created_at: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	updated_at: Date | null;
	@ApiProperty({
		type: () => SsoProviders,
		required: false,
	})
	sso_providers?: SsoProviders;
}
