export type Tusers = {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'admin' | 'students' | 'faculty';
  status: 'in-progras' | 'blocked';
  isDeleted: boolean;
};
