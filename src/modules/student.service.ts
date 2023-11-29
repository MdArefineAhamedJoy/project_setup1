import { StudentsModels } from './student.Model';

const getAllStudentDb = async () => {
  const result = await StudentsModels.find();
  return result;
};

const getStudentById = async (id: string) => {
  const result = await StudentsModels.findOne({ id });
  return result;
};

export const createService = {
  getAllStudentDb,
  getStudentById,
};
