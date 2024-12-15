import { LogoData, MenuItem, ResumeLink, SocialLink } from "@/types/header";
import { Github, Linkedin, Mail } from "lucide-react";

export const logoData: LogoData[] = [
  {
    text: "KPrince-Coder",
    startBracket: "<",
    endBracket: "/>",
  },
];

export const menuItems: MenuItem[] = [
  { name: "About", href: "#about", color: "text-blue-500" },
  { name: "Skills", href: "#skills", color: "text-cyan-500" },
  { name: "Projects", href: "#projects", color: "text-indigo-500" },
  { name: "Contact", href: "#contact", color: "text-purple-500" },
];

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/princekm",
    tooltip: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/princekm",
    tooltip: "LinkedIn",
  },
  {
    icon: Mail,
    href: "#contact",
    tooltip: "Email",
  },
];

export const resumeLink: ResumeLink[] = [
  {
    href: "/resume.pdf",
    text: "Resume",
  },
];
