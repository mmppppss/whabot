import { userRepo } from "@/infrastructure/database/repositories";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export interface RegisterInput {
	email: string;
	password: string;
	name: string;
}
export class AuthService {

	public async login(body: any) {

		const { email, password } = body;

		const user = await userRepo.findByEmail(email);

		if (!user) {
			throw new Error("User not found");
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) return null;
		const token = this.generateToken(user.id, user.email);
		const userResponse = {
			id: user.id,
			username: user.username, 
			email: user.email
		}
		const reponse = {
			message: 'Login Correcto',
			data:{
				user: userResponse,
				token
			}
		}
		return reponse;
	}

	// mover a helpers globales 
	private generateToken(userId: string, email: string): string {
		const secret = process.env.JWT_SECRET || "clave_super_secreta_provisional";

		return jwt.sign(
			{ sub: userId, email: email },
			secret,
			{ expiresIn: '7d' }
		);
	}

	public async refresh(refreshToken: string) {

		if (refreshToken !== "fake-refresh-token-456") {
			throw new Error("Invalid refresh token");
		}

		return {
			message: "Token refreshed",
			accessToken: "new-fake-access-token-789"
		};
	}

	public async logout(user: any) {

		return {
			message: "User logged out"
		};
	}
}
