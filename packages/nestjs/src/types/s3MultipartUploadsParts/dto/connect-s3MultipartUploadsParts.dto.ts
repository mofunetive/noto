import { ApiProperty } from "@nestjs/swagger";

export class ConnectS3MultipartUploadsParts {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
