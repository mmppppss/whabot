import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {

	private userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	public create = async (req: Request, res: Response): Promise<Response> => {
		try {
			const { email, password, username } = req.body;

			if (!email || !password || !username) {
				return res.status(400).json({
					message: "Missing required fields: email, password, username"
				});
			}

			const result = await this.userService.register({ email, password, username });

			return res.status(201).json({
				message: "User created successfully",
				data: result
			});

		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Error creating user"
			});
		}
	};

}
