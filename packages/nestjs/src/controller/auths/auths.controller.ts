import { Body, Controller, Delete, Get, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";

import { AuthGuard } from "../../guards/auth.guard";
import { AuthsService } from "./auths.service";
import CreateAuthDto from "./dto/create-auth.dto";
import UpdateAuthDto from "./dto/update-auth.dto";

@ApiBearerAuth()
@Controller("auths")
export class AuthsController {
	constructor(private readonly authsService: AuthsService) {}

	@Post()
	@UseGuards(AuthGuard)
	create(@Body() createAuthDto: CreateAuthDto) {
		return this.authsService.create(createAuthDto);
	}

	@Get()
	@UseGuards(AuthGuard)
	find(@Req() req: Request) {
		return this.authsService.find(req);
	}

	@Patch()
	@UseGuards(AuthGuard)
	update(@Req() req: Request, @Body() updateAuthDto: UpdateAuthDto) {
		return this.authsService.update(req, updateAuthDto);
	}

	@Delete()
	@UseGuards(AuthGuard)
	remove(@Req() req: Request) {
		return this.authsService.remove(req);
	}
}
