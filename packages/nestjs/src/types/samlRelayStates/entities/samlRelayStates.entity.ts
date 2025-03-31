import { ApiProperty } from "@nestjs/swagger";
import { FlowState } from "../../flowState/entities/flowState.entity";
import { SsoProviders } from "../../ssoProviders/entities/ssoProviders.entity";

export class SamlRelayStates {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
	})
	sso_provider_id: string;
	@ApiProperty({
		type: "string",
	})
	request_id: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	for_email: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	redirect_to: string | null;
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
	flow_state_id: string | null;
	@ApiProperty({
		type: () => FlowState,
		required: false,
		nullable: true,
	})
	flow_state?: FlowState | null;
	@ApiProperty({
		type: () => SsoProviders,
		required: false,
	})
	sso_providers?: SsoProviders;
}
