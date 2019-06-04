import { Router } from "express";
const router = Router();

import { createProject } from "../controllers/project_controller";

router.post('/', createProject);

export default router;
