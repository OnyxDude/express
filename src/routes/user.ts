import { Router } from "express";
import { getStudents } from "../controllers/user";

const router = Router();

router.get("/students", getStudents);

export default router;
