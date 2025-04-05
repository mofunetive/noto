import { Controller, Get, Post, Body, Patch, Delete, UseGuards, Req } from "@nestjs/common";
import { UsersService } from "./users.service";
import CreateUserDto from "./dto/create-user.dto";
import UpdateUserDto from "./dto/update-user.dto";
import { AuthGuard } from "../../guards/auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";

@ApiBearerAuth()
@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@UseGuards(AuthGuard)
	create(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto);
	}

	@Get()
	@UseGuards(AuthGuard)
	find(@Req() req: Request) {
		return this.usersService.find(req);
	}

	@Patch()
	@UseGuards(AuthGuard)
	update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.update(req, updateUserDto);
	}

	@Delete()
	@UseGuards(AuthGuard)
	remove(@Req() req: Request) {
		return this.usersService.remove(req);
	}
}
