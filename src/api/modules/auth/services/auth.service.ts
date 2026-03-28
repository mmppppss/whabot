import { generateToken } from "@/api/helpers/jwt";
import { userRepo } from "@/infrastructure/database/repositories";
import bcrypt from "bcrypt";

export class AuthService {

	public async login(body: any) {

		const { email, password, username } = body;

		let user = null;
		if (email)
			user = await userRepo.findByEmail(email);
		else if (username)
			user = await userRepo.findByUsername(username);

		if (!user) {
			throw new Error("User not found");
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			throw new Error("Invalid password");
		};

		const token = generateToken(user.id, user.email);
		const userResponse = {
			id: user.id,
			username: user.username,
			email: user.email
		}
		const reponse = {
			message: 'Login Correcto',
			data: {
				user: userResponse,
				token
			}
		}
		return reponse;
	}
	
	public async logout(user: any) {

		return {
			message: "User logged out"
		};
	}
}
