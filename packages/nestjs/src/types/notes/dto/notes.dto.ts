import { ApiProperty } from "@nestjs/swagger";

export class Notes {
	@ApiProperty({
		type: "integer",
		format: "int32",
	})
	id: number;
	@ApiProperty({
		type: "integer",
		format: "int32",
		nullable: true,
	})
	order: number | null;
	@ApiProperty({
		type: "string",
	})
	title: string;
	@ApiProperty({
		type: "string",
	})
	content: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	createdAt: Date;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	updatedAt: Date;
}
