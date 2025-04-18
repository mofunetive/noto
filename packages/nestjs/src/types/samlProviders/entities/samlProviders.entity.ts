import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";
import { SsoProviders } from "../../ssoProviders/entities/ssoProviders.entity";

export class SamlProviders {
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
	entity_id: string;
	@ApiProperty({
		type: "string",
	})
	metadata_xml: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	metadata_url: string | null;
	@ApiProperty({
		type: () => Object,
		nullable: true,
	})
	attribute_mapping: Prisma.JsonValue | null;
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
		type: "string",
		nullable: true,
	})
	name_id_format: string | null;
	@ApiProperty({
		type: () => SsoProviders,
		required: false,
	})
	sso_providers?: SsoProviders;
}
