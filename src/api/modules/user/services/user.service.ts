import { userRepo } from "@/infrastructure/database/repositories";
import bcrypt from "bcrypt";

export interface RegisterInput {
	email: string;
	password: string;
	username: string;
}

export class UserService {

	public async register(body: RegisterInput) {
		const { email, password, username } = body;

		const existingUser = await userRepo.findByEmail(email);
		if (existingUser) {
			throw new Error("User already exists");
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await userRepo.create(username, email, hashedPassword);

		return {
			id: user.id,
			username: user.username,
			email: user.email
		};
	}
}
