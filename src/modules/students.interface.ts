import { Types } from 'mongoose';

export type Gurdian = {
  fatherName: string;
  fatherOcopation: string;
  fatherContactNo: string;
  motherName: string;
  motherOcpation: string;
  montherContactNo: string;
};
export type UserName = {
  fistName: string;
  middaleName: string;
  lastName: string;
};

export type LocalGurdiant = {
  name: string;
  ocopation: string;
  contactNo: string;
  addrasse: string;
};

export type Student = {
  id: string;
  user: Types.ObjectId;
  name: UserName;
  email: string;
  gender: ' Male' | 'FeMale' | 'Others';
  avatar?: string;
  contactNo: string;
  dateOfBirthday: string;
  emarganceyContactNo: string;
  blodGrop?: 'A' | 'B' | 'AB' | 'O';
  presentAddrase: string;
  parmanentAddrase: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdiant;
  profileImage?: string;
};
