import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { AuthsService } from "./auths.service";
import CreateAuthDto from "./dto/create-auth.dto";
import UpdateAuthDto from "./dto/update-auth.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";

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
	findAll() {
		return this.authsService.findAll();
	}

	@Get(":id")
	@UseGuards(AuthGuard)
	findOne(@Param("id") id: string) {
		return this.authsService.findOne(id);
	}

	@Patch(":id")
	@UseGuards(AuthGuard)
	update(@Param("id") id: string, @Body() updateAuthDto: UpdateAuthDto) {
		return this.authsService.update(id, updateAuthDto);
	}

	@Delete(":id")
	@UseGuards(AuthGuard)
	remove(@Param("id") id: string) {
		return this.authsService.remove(id);
	}
}
