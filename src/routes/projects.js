import Router from "express";
const router = Router();

import { createProject } from "../controllers/project_controller";

router.get("/", createProject);

export default router;
