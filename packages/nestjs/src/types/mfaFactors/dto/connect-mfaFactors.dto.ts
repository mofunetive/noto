import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

export class MfaFactorsUserIdPhoneUniqueInput {
	@ApiProperty({
		type: "string",
	})
	user_id: string;
	@ApiProperty({
		type: "string",
	})
	phone: string;
}

@ApiExtraModels(MfaFactorsUserIdPhoneUniqueInput)
export class ConnectMfaFactors {
	@ApiProperty({
		type: "string",
		required: false,
	})
	id?: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
	})
	last_challenged_at?: Date;
	@ApiProperty({
		type: MfaFactorsUserIdPhoneUniqueInput,
		required: false,
	})
	user_id_phone?: MfaFactorsUserIdPhoneUniqueInput;
}
