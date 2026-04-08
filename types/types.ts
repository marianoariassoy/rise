export interface News {
  id?: number;
  title: string;
  text: string;
  image: string;
  date: string;
}

export interface Contact {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  date?: string;
  percentage?: number;
  description?: string;
  address?: string;
}

export interface Team {
  id: number;
  title: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  text: string;
  image: string;
}
