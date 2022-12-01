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
  id: string;
  fullName: string;
  userName: string;
  plan: string;
  email: string;
  avatar?: string;
  role: string;
  status: string;
  taxId?: number;
  language?: string;
  company?: string;
  country?: string;
  contact?: number;
  totalProject?: number;
  totalTask?: number;
  projects?: Project[];
}
