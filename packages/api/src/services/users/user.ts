import type { PrismaClient } from "@noto/database";

export interface CreateUserParams {
	uuid: string;
}

export async function getOrCreateUser(database: PrismaClient, params: CreateUserParams) {
	let user = await database.user.findUnique({
		where: { authId: params.uuid },
	});

	if (!user) {
		const authUser = await database.users.findUnique({
			where: { id: params.uuid },
		});

		if (!authUser) {
			throw new Error(`Auth user with id ${params.uuid} not found`);
		}

		user = await database.user.create({
			data: {
				name: typeof authUser.raw_user_meta_data === "string" ? (JSON.parse(authUser.raw_user_meta_data).full_name ?? "Unknown User") : "Unknown User",
				email: authUser?.email ?? "",
				authId: authUser.id,
				createdAt: new Date(),
			},
		});
	}

	return user;
}
