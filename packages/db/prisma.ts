import { PrismaClient } from "./dist/client";

const prisma = new PrismaClient();

export default prisma;
export * from "./dist/client";
