export interface News {
  id?: number;
  slug: string;
  title: string;
  text?: string;
  short_text: string;
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
  slug: string;
  image: string;
  image_home: string;
  image_hero: string;
  date?: string;
  percent?: number;
  description?: string;
  address?: string;
  pool?: string;
  solarium?: string;
  garage?: string;
  security?: string;
  kitchen?: string;
  heating?: string;
  file?: string;
  finished?: boolean;
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
