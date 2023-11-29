export type Tusers = {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'admin' | 'students' | 'faculty';
  status: 'in-progras' | 'blocked';
  isDeleted: boolean;
};

export type NewUser = {
  password: string;
  role: string;
  id: string;
};
