import { ApiProperty } from "@nestjs/swagger";
import { SamlProviders } from "../../samlProviders/entities/samlProviders.entity";
import { SamlRelayStates } from "../../samlRelayStates/entities/samlRelayStates.entity";
import { SsoDomains } from "../../ssoDomains/entities/ssoDomains.entity";

export class SsoProviders {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	resource_id: string | null;
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
		type: () => SamlProviders,
		isArray: true,
		required: false,
	})
	saml_providers?: SamlProviders[];
	@ApiProperty({
		type: () => SamlRelayStates,
		isArray: true,
		required: false,
	})
	saml_relay_states?: SamlRelayStates[];
	@ApiProperty({
		type: () => SsoDomains,
		isArray: true,
		required: false,
	})
	sso_domains?: SsoDomains[];
}
