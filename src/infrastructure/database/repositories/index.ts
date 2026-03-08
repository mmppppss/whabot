import { db } from "..";

import { UserRepository } from "./user.repo";

export const userRepo = new UserRepository(db);
