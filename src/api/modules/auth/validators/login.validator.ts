import { z } from 'zod';

export const login = z.object({
	password: z.string().min(1, 'Password is required'),
	email: z.string().email('Invalid email format').optional(),
	username: z.string().min(1, 'Username is required').optional()
}).refine(
	(data) => data.email || data.username,
	{ message: 'Email or username is required' }
);

export type LoginDTO = z.infer<typeof login>;
