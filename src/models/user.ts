import { USER } from 'src/constants/user';

export interface Project {
  id: number;
  projectName: string;
  techStack?: string;
  totalTask?: number;
  taskDone?: number;
  totalTime?: number;
  timeDone?: number;
}

export interface User {
  id: number;
  fullName: string;
  userName: string;
  plan: USER.PLANS;
  email: string;
  avatar?: string;
  role: USER.ROLES;
  status: USER.STATUS;
  taxId: number;
  language?: string;
  country?: string;
  totalProject?: number;
  totalTask?: number;
  projects?: Project[];
}
