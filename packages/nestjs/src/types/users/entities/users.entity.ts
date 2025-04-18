import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";
import { Identities } from "../../identities/entities/identities.entity";
import { MfaFactors } from "../../mfaFactors/entities/mfaFactors.entity";
import { OneTimeTokens } from "../../oneTimeTokens/entities/oneTimeTokens.entity";
import { Sessions } from "../../sessions/entities/sessions.entity";
import { User } from "../../user/entities/user.entity";

export class Users {
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	instance_id: string | null;
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	aud: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	role: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	email: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	encrypted_password: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	email_confirmed_at: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	invited_at: Date | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	confirmation_token: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	confirmation_sent_at: Date | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	recovery_token: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	recovery_sent_at: Date | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	email_change_token_new: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	email_change: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	email_change_sent_at: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	last_sign_in_at: Date | null;
	@ApiProperty({
		type: () => Object,
		nullable: true,
	})
	raw_app_meta_data: Prisma.JsonValue | null;
	@ApiProperty({
		type: () => Object,
		nullable: true,
	})
	raw_user_meta_data: Prisma.JsonValue | null;
	@ApiProperty({
		type: "boolean",
		nullable: true,
	})
	is_super_admin: boolean | null;
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
	phone: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	phone_confirmed_at: Date | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	phone_change: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	phone_change_token: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	phone_change_sent_at: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	confirmed_at: Date | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	email_change_token_current: string | null;
	@ApiProperty({
		type: "integer",
		format: "int32",
		nullable: true,
	})
	email_change_confirm_status: number | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	banned_until: Date | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	reauthentication_token: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	reauthentication_sent_at: Date | null;
	@ApiProperty({
		type: "boolean",
	})
	is_sso_user: boolean;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	deleted_at: Date | null;
	@ApiProperty({
		type: "boolean",
	})
	is_anonymous: boolean;
	@ApiProperty({
		type: () => Identities,
		isArray: true,
		required: false,
	})
	identities?: Identities[];
	@ApiProperty({
		type: () => MfaFactors,
		isArray: true,
		required: false,
	})
	mfa_factors?: MfaFactors[];
	@ApiProperty({
		type: () => OneTimeTokens,
		isArray: true,
		required: false,
	})
	one_time_tokens?: OneTimeTokens[];
	@ApiProperty({
		type: () => Sessions,
		isArray: true,
		required: false,
	})
	sessions?: Sessions[];
	@ApiProperty({
		type: () => User,
		isArray: true,
		required: false,
	})
	userId?: User[];
}
