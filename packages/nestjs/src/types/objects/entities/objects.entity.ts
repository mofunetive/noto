import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";
import { Buckets } from "../../buckets/entities/buckets.entity";

export class Objects {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	bucket_id: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	name: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	owner: string | null;
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
		format: "date-time",
		nullable: true,
	})
	last_accessed_at: Date | null;
	@ApiProperty({
		type: () => Object,
		nullable: true,
	})
	metadata: Prisma.JsonValue | null;
	@ApiProperty({
		type: "string",
		isArray: true,
	})
	path_tokens: string[];
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	version: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	owner_id: string | null;
	@ApiProperty({
		type: () => Object,
		nullable: true,
	})
	user_metadata: Prisma.JsonValue | null;
	@ApiProperty({
		type: () => Buckets,
		required: false,
		nullable: true,
	})
	buckets?: Buckets | null;
}
