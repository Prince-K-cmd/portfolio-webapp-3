import { LucideIcon } from "lucide-react";

export interface Skill {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface TechnicalSkill {
  name: string;
  proficiency: number;
}
