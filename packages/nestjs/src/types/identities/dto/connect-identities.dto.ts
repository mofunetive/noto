import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

export class IdentitiesProviderIdProviderUniqueInput {
	@ApiProperty({
		type: "string",
	})
	provider_id: string;
	@ApiProperty({
		type: "string",
	})
	provider: string;
}

@ApiExtraModels(IdentitiesProviderIdProviderUniqueInput)
export class ConnectIdentities {
	@ApiProperty({
		type: "string",
		required: false,
	})
	id?: string;
	@ApiProperty({
		type: IdentitiesProviderIdProviderUniqueInput,
		required: false,
	})
	provider_id_provider?: IdentitiesProviderIdProviderUniqueInput;
}
