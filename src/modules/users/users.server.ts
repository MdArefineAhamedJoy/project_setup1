import config from '../../app/config';
import { Student } from '../students.interface';
import { NewUser } from './users.interface';
import { UsersModel } from './users.modeul';

const CreateStudentIntoDB = async (password: string, studentData: Student) => {
  // create a user object
  const user: NewUser = {};
  // if password is not given used defult password
  user.password = password || (config.default_pass as string);

  // set student role
  user.role = 'student';
  // set manuly create id
  user.id = '2030100001';
  const result = await UsersModel.create(user);

  // create student
  if (Object.keys(result).length) {
    // set id , set _id as a user
    studentData.id = result.id;
    // studentData.user = result._id;
  }
};

export const UsersService = {
  CreateStudentIntoDB,
};
