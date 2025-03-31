import { ApiProperty } from "@nestjs/swagger";

export class ConnectS3MultipartUploads {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
