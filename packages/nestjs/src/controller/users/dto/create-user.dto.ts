import type { user } from "@noto/database";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto implements user {
	@ApiProperty()
	name: string;

	@ApiProperty()
	id: number;

	@ApiProperty()
	email: string;

	@ApiProperty()
	createdAt: Date;

	@ApiProperty()
	updatedAt: Date;

	@ApiProperty({ nullable: true })
	authId: string | null;
}
