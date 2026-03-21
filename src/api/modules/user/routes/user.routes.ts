import { Router } from "express";
import { UserController } from "../controllers/auth.controller";

const router = Router();
const controller = new UserController();

router.post("/create", controller.create);

export default router;
