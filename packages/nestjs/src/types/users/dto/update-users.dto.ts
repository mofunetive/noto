import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUsers {
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	instance_id?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	aud?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	role?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	email?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	encrypted_password?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	email_confirmed_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	invited_at?: Date | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	confirmation_token?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	confirmation_sent_at?: Date | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	recovery_token?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	recovery_sent_at?: Date | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	email_change_token_new?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	email_change?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	email_change_sent_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	last_sign_in_at?: Date | null;
	@ApiProperty({
		type: () => Object,
		required: false,
		nullable: true,
	})
	raw_app_meta_data?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
	@ApiProperty({
		type: () => Object,
		required: false,
		nullable: true,
	})
	raw_user_meta_data?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
	@ApiProperty({
		type: "boolean",
		required: false,
		nullable: true,
	})
	is_super_admin?: boolean | null;
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
	phone?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	phone_confirmed_at?: Date | null;
	@ApiProperty({
		type: "string",
		default: "",
		required: false,
		nullable: true,
	})
	phone_change?: string | null;
	@ApiProperty({
		type: "string",
		default: "",
		required: false,
		nullable: true,
	})
	phone_change_token?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	phone_change_sent_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		default: "dbgenerated",
		required: false,
		nullable: true,
	})
	confirmed_at?: Date | null;
	@ApiProperty({
		type: "string",
		default: "",
		required: false,
		nullable: true,
	})
	email_change_token_current?: string | null;
	@ApiProperty({
		type: "integer",
		format: "int32",
		default: 0,
		required: false,
		nullable: true,
	})
	email_change_confirm_status?: number | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	banned_until?: Date | null;
	@ApiProperty({
		type: "string",
		default: "",
		required: false,
		nullable: true,
	})
	reauthentication_token?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	reauthentication_sent_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	deleted_at?: Date | null;
}
