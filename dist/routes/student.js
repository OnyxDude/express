"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controllers/student");
const validate_1 = __importDefault(require("../middlewares/validate"));
const student_2 = require("../schemas/student");
const router = (0, express_1.Router)();
router.get("/", student_1.getStudents);
router.post("/", (0, validate_1.default)(student_2.studentSchema), student_1.createStudent);
router.delete("/:id", (0, validate_1.default)(student_2.studentSchema), student_1.deleteStudent);
router.put("/:id", student_1.updateStudent);
exports.default = router;
