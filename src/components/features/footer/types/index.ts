import { LucideIcon } from "lucide-react";

export interface FooterLink {
  name: string;
  href: string;
  icon: LucideIcon;
  color: string;
  ariaLabel: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  tooltip: string;
  color: string;
  glow: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  quote: string;
}
