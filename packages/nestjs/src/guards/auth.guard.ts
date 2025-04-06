import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor() {}
	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<Request>();
		const userId = request.headers["userId"] as string;

		if (!userId) {
			throw new UnauthorizedException("User ID is missing");
		}

		return true;
	}
}
