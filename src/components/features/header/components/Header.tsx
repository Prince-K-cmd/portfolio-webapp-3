// "use client";

// import { useState } from "react";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { ThemeToggle } from "@/components/theme-toggle";
// import { useHeaderScroll } from "../hooks/use-header-scroll";
// import { useActiveSection } from "../hooks/use-active-section";
// import { useDeviceType } from "../hooks/use-device-type";

// import { HeaderLogo } from "./HeaderLogo";
// import { DesktopNavigation } from "./DesktopNavigation";
// import { DesktopActions } from "./DesktopActions";
// import { MobileNavigation } from "./MobileNavigation";

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { activeSection } = useActiveSection();
//   const { isScrolled } = useHeaderScroll();
//   const { isMobile, isTablet } = useDeviceType();

//   const shouldRenderFullHeader = !isMobile && !isTablet;

//   return (
//     <TooltipProvider delayDuration={300}>
//       <header
//         className={`
//           fixed
//           top-0
//           w-full
//           z-50
//           transition-all
//           duration-300
//           header-glow
//           ${isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"}
//         `}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <HeaderLogo />

//             {/* Desktop Navigation and Actions */}
//             {shouldRenderFullHeader && (
//               <>
//                 <DesktopNavigation activeSection={activeSection} />
//                 <DesktopActions />
//               </>
//             )}

//             {/* Mobile Navigation */}
//             {(isMobile || isTablet) && (
//               <MobileNavigation
//                 isOpen={isOpen}
//                 setIsOpen={setIsOpen}
//                 activeSection={activeSection}
//               />
//             )}
//           </div>
//         </div>
//       </header>
//     </TooltipProvider>
//   );
// }

"use client";

import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";

import { HeaderLogo } from "./HeaderLogo";
import { DesktopNavigation } from "./DesktopNavigation";
import { DesktopActions } from "./DesktopActions";
import { MobileNavigation } from "./MobileNavigation";
import { useActiveSection } from "../hooks/use-active-section";
import { useHeaderScroll } from "../hooks/use-header-scroll";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection } = useActiveSection();
  const { isScrolled } = useHeaderScroll();

  return (
    <TooltipProvider delayDuration={300}>
      <header
        className={`
          fixed 
          top-0 
          w-full 
          z-50 
          transition-all 
          duration-300 
          header-glow
          ${isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"}
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <HeaderLogo />

            {/* Desktop Navigation and Actions */}
            <div className="hidden md:flex items-center justify-center space-x-8">
              <DesktopNavigation activeSection={activeSection} />
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <DesktopActions />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex md:hidden items-center space-x-4">
              <ThemeToggle />
              <MobileNavigation
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                activeSection={activeSection}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileNavigation
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeSection={activeSection}
          isMobileMenuView={true}
        />
      </header>
    </TooltipProvider>
  );
}
