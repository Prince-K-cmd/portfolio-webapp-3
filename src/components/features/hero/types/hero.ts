// src/features/hero/types/hero.ts
import { LucideIcon } from "lucide-react";

export interface LanguageBadge {
  text: string;
  icon: LucideIcon;
  description: string;
  ariaLabel: string;
  semantic_meaning?: string;
}

export interface HeroCTAButton {
  text: string;
  color: string;
  textColor: string;
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
  analyticsEvent?: string;
}

export interface CodeSnippet {
  id: string;
  language: string;
  category: "Frontend Development" | "Android Development" | "Data Engineering";
  title: string;
  code: string;
  description: string;
  keywords: string[];
}

export interface HeroMetadata {
  name: string;
  jobTitle: string[];
  shortBio: string;
  skills: string[];
}
