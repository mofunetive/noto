import { ApiProperty } from "@nestjs/swagger";

export class ConnectAuditLogEntries {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
