import { Request, Response, NextFunction } from 'express';
import { ZodType, ZodError } from 'zod';

export const validate = <T>(schema: ZodType<T>) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse(req.body);
			next();
		} catch (error) {
			if (error instanceof ZodError) {
				return res.status(400).json({
					message: 'Validation error',
					errors: error.issues.map((err) => ({
						path: err.path.join('.'),
						message: err.message
					}))
				});
			}
			next(error);
		}
	};
};
