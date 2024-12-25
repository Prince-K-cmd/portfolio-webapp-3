// features/header/index.ts

export { Header } from "./components/Header";
export { HeaderLogo } from "./components/HeaderLogo";
export { DesktopNavigation } from "./components/DesktopNavigation";
export { DesktopActions } from "./components/DesktopActions";
export { MobileNavigation } from "./components/MobileNavigation";
export { SocialLinks } from "./components/SocialLinks";

// Export constants
export { MENU_ITEMS, LOGO_DATA } from "./constants";

// Export types if any
export interface HeaderProps {
  activeSection?: string;
  isScrolled?: boolean;
}
