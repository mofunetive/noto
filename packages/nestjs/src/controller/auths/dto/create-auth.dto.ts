import type { users } from "@noto/database";
import { JsonValue } from "@prisma/client/runtime/library";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto implements users {
	@ApiProperty({ type: String, nullable: true })
	instance_id: string | null;

	@ApiProperty({ type: String })
	id: string;

	@ApiProperty({ type: String, nullable: true })
	aud: string | null;

	@ApiProperty({ type: String, nullable: true })
	role: string | null;

	@ApiProperty({ type: String, nullable: true })
	email: string | null;

	@ApiProperty({ type: String, nullable: true })
	encrypted_password: string | null;

	@ApiProperty({ type: Date, nullable: true })
	email_confirmed_at: Date | null;

	@ApiProperty({ type: Date, nullable: true })
	invited_at: Date | null;

	@ApiProperty({ type: String, nullable: true })
	confirmation_token: string | null;

	@ApiProperty({ type: Date, nullable: true })
	confirmation_sent_at: Date | null;

	@ApiProperty({ type: String, nullable: true })
	recovery_token: string | null;

	@ApiProperty({ type: Date, nullable: true })
	recovery_sent_at: Date | null;

	@ApiProperty({ type: String, nullable: true })
	email_change_token_new: string | null;

	@ApiProperty({ type: String, nullable: true })
	email_change: string | null;

	@ApiProperty({ type: Date, nullable: true })
	email_change_sent_at: Date | null;

	@ApiProperty({ type: Date, nullable: true })
	last_sign_in_at: Date | null;

	@ApiProperty({ type: Object })
	raw_app_meta_data: JsonValue;

	@ApiProperty({ type: Object })
	raw_user_meta_data: JsonValue;

	@ApiProperty({ type: Boolean, nullable: true })
	is_super_admin: boolean | null;

	@ApiProperty({ type: Date, nullable: true })
	created_at: Date | null;

	@ApiProperty({ type: Date, nullable: true })
	updated_at: Date | null;

	@ApiProperty({ type: String, nullable: true })
	phone: string | null;

	@ApiProperty({ type: Date, nullable: true })
	phone_confirmed_at: Date | null;

	@ApiProperty({ type: String, nullable: true })
	phone_change: string | null;

	@ApiProperty({ type: String, nullable: true })
	phone_change_token: string | null;

	@ApiProperty({ type: Date, nullable: true })
	phone_change_sent_at: Date | null;

	@ApiProperty({ type: Date, nullable: true })
	confirmed_at: Date | null;

	@ApiProperty({ type: String, nullable: true })
	email_change_token_current: string | null;

	@ApiProperty({ type: Number, nullable: true })
	email_change_confirm_status: number | null;

	@ApiProperty({ type: Date, nullable: true })
	banned_until: Date | null;

	@ApiProperty({ type: String, nullable: true })
	reauthentication_token: string | null;

	@ApiProperty({ type: Date, nullable: true })
	reauthentication_sent_at: Date | null;

	@ApiProperty({ type: Boolean })
	is_sso_user: boolean;

	@ApiProperty({ type: Date, nullable: true })
	deleted_at: Date | null;

	@ApiProperty({ type: Boolean })
	is_anonymous: boolean;
}
