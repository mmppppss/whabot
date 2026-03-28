import jwt from "jsonwebtoken";

export function generateToken(userId: string, email: string): string {
	const secret = process.env.JWT_SECRET || "clave_super_secreta_provisional";

	return jwt.sign(
		{ sub: userId, email: email },
		secret,
		{ expiresIn: '7d' }
	);
}
