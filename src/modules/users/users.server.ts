import config from '../../app/config';
import { StudentsModels } from '../student.Model';
import { Student } from '../students.interface';
import { Tusers } from './users.interface';
import { UsersModel } from './users.modeul';

const CreateStudentIntoDB = async (password: string, studentData: Student) => {
  // create a user object
  const userData: Partial<Tusers> = {};
  // if password is not given used defult password
  userData.password = password || (config.default_pass as string);

  // set student role
  userData.role = 'students';
  // set manuly create id
  userData.id = '2030100001';
  const newUser = await UsersModel.create(userData);

  // create student
  if (Object.keys(newUser).length) {
    // set id , set _id as a user
    studentData.id = newUser.id; // embading id
    studentData.user = newUser._id; //ref id
  }
  const newStudent = await StudentsModels.create(studentData);
  return newStudent;
};

export const UsersService = {
  CreateStudentIntoDB,
};
