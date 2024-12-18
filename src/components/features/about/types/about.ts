import { LucideIcon } from "lucide-react";

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface AboutMetadata {
  name: string;
  professionalTitle: string;
  shortBio: string;
  longBio: string;
  profileImage: string;
}
