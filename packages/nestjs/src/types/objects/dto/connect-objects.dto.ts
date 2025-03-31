import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

export class ObjectsBucketIdNameUniqueInput {
	@ApiProperty({
		type: "string",
	})
	bucket_id: string;
	@ApiProperty({
		type: "string",
	})
	name: string;
}

@ApiExtraModels(ObjectsBucketIdNameUniqueInput)
export class ConnectObjects {
	@ApiProperty({
		type: "string",
		required: false,
	})
	id?: string;
	@ApiProperty({
		type: ObjectsBucketIdNameUniqueInput,
		required: false,
	})
	bucket_id_name?: ObjectsBucketIdNameUniqueInput;
}
