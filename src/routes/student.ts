import { Router } from "express";
import {
  getStudents,
  updateStudent,
  createStudent,
  deleteStudent,
} from "../controllers/student";

const router = Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.delete("/:id", deleteStudent);

router.put("/:id", updateStudent);

export default router;
