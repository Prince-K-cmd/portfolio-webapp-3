import { SocialLink } from "src/types/socials";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const socialLinks: Record<string, SocialLink> = {
  GITHUB: {
    icon: Github,
    href: "https://github.com/princekm",
    tooltip: "GitHub",
  },
  LINKEDIN: {
    icon: Linkedin,
    href: "https://linkedin.com/in/princekm",
    tooltip: "LinkedIn",
  },
  EMAIL: {
    icon: Mail,
    href: "mailto:contact@example.com",
    tooltip: "Email",
  },
  TWITTER: {
    icon: Twitter,
    href: "https://twitter.com/princekm",
    tooltip: "Twitter",
  },
};
