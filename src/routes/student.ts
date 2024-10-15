import { Router } from "express";
import { getStudents } from "../controllers/student";

const router = Router();

router.get("/", getStudents);

export default router;
