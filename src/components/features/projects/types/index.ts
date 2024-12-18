import { StaticImageData } from "next/image";

export interface ProjectLinks {
  demo?: string;
  github?: string;
  live?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  category: string;
  links: ProjectLinks;
}

export interface ProjectFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}
