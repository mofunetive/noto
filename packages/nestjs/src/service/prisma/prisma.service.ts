import { Injectable } from "@nestjs/common";

import { PrismaClient } from "../../../../db/dist/client";

@Injectable()
@Injectable()
export class PrismaService extends PrismaClient {}
