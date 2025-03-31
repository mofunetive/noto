import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateSamlProviders {
	@ApiProperty({
		type: "string",
		required: false,
	})
	entity_id?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	metadata_xml?: string;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	metadata_url?: string | null;
	@ApiProperty({
		type: () => Object,
		required: false,
		nullable: true,
	})
	attribute_mapping?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	created_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	updated_at?: Date | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	name_id_format?: string | null;
}
