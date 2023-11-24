import express from "express" ;
import { createControlar } from "./student.controlar";


const studentRouter = express.Router()

studentRouter.post("/create-student" , createControlar.createStudents)

studentRouter.get("/student" , createControlar.getAllStudentsCnt )

studentRouter.get("/:id" , createControlar.getStudentByIdCnt )

export const router  = studentRouter