import { StudentsModels } from "./student.Model";
import { Student } from "./students.interface";


const CreateStudentDatabase = async(student : Student) => {
    const result = await StudentsModels.create(student)
    return result
}

const getAllStudentDb = async () => {
    const result = await StudentsModels.find()
    return result
}

const getStudentById =async (id : string) => {
    const result = await StudentsModels.findOne({id})
    return result
}

export  const createService = {
    CreateStudentDatabase,
    getAllStudentDb,
    getStudentById
}