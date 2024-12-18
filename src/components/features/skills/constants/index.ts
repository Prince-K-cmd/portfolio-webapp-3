import {
  Code,
  Server,
  Smartphone,
  Cloud,
  Database,
  Shield,
} from "lucide-react";
import { Skill, TechnicalSkill } from "../types";

export const SKILLS: Skill[] = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "Redux/Context"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Kotlin", "Jetpack Compose", "Android SDK", "Material Design"],
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Database Design"],
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["OAuth 2.0", "JWT", "HTTPS", "Data Encryption"],
  },
];

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  { name: "React/Next.js", proficiency: 90 },
  { name: "TypeScript", proficiency: 85 },
  { name: "Node.js", proficiency: 80 },
  { name: "Python", proficiency: 75 },
  { name: "AWS", proficiency: 70 },
];
