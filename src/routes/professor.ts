import { Router } from "express";
import {
  getProfessors,
  updateProfessor,
  createProfessor,
  deleteProfessor,
} from "../controllers/professor";

import validate from "../middlewares/validate";
import { professorSchema } from "../schemas/professor";

const router = Router();

router.get("/", getProfessors);
router.post("/", validate(professorSchema), createProfessor);
router.delete("/:id", validate(professorSchema), deleteProfessor);

router.put("/:id", updateProfessor);

export default router;
