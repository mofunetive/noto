import PrismaClient from "@noto/database";

export const database = PrismaClient;

export async function disconnectDatabase() {
	await database.$disconnect();
}
