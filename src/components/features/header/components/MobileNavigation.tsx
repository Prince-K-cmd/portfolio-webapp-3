// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Download, Lock } from "lucide-react";
// import { MENU_ITEMS } from "../constants";
// import { SocialLinks } from "./SocialLinks";

// interface MobileNavigationProps {
//   isOpen: boolean;
//   setIsOpen: (open: boolean) => void;
//   activeSection: string;
// }

// export function MobileNavigation({
//   isOpen,
//   setIsOpen,
//   activeSection,
// }: MobileNavigationProps) {
//   return (
//     <>
//       <Button
//         variant="ghost"
//         size="icon"
//         onClick={() => setIsOpen(!isOpen)}
//         className="group md:hidden"
//         aria-label={isOpen ? "Close Menu" : "Open Menu"}
//       >
//         {isOpen ? (
//           <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }}>
//             <X
//               className="
//                 h-6
//                 w-6
//                 text-destructive
//                 group-hover:rotate-12
//                 transition-transform
//               "
//             />
//           </motion.div>
//         ) : (
//           <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }}>
//             <Menu
//               className="
//                 h-6
//                 w-6
//                 group-hover:text-blue-400
//                 transition-colors
//               "
//             />
//           </motion.div>
//         )}
//       </Button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-background border-b"
//           >
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col space-y-4">
//                 {MENU_ITEMS.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={`
//                       text-sm
//                       font-medium
//                       transition-colors
//                       hover:text-blue-400
//                       flex items-center
//                       space-x-2
//                       ${
//                         activeSection === item.href.slice(1)
//                           ? item.color
//                           : "text-muted-foreground"
//                       }
//                     `}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.icon && <item.icon className="w-4 h-4 mr-2" />}
//                     {item.name}
//                   </Link>
//                 ))}

//                 <SocialLinks variant="mobile" />

//                 <div className="space-y-4 pt-4">
//                   <Button
//                     variant="default"
//                     className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 group"
//                   >
//                     <Download className="h-4 w-4 group-hover:rotate-6 transition-transform" />
//                     <span>Download Resume</span>
//                   </Button>

//                   <Button
//                     variant="outline"
//                     className="w-full flex items-center justify-center space-x-2 group"
//                   >
//                     <Lock
//                       className="
//                         h-4
//                         w-4
//                         transition-colors
//                         group-hover:text-blue-400
//                       "
//                     />
//                     <span>Admin Access</span>
//                   </Button>
//                 </div>
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Lock } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { MENU_ITEMS } from "../constants";

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeSection: string;
  isMobileMenuView?: boolean;
}

export function MobileNavigation({
  isOpen,
  setIsOpen,
  activeSection,
  isMobileMenuView = false,
}: MobileNavigationProps) {
  // Mobile Menu Toggle Button
  const MobileMenuToggle = () => (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsOpen(!isOpen)}
      className="group"
    >
      {isOpen ? (
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }}>
          <X
            className="
              h-6
              w-6
              text-destructive
              group-hover:rotate-12
              transition-transform
            "
          />
        </motion.div>
      ) : (
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }}>
          <Menu
            className="
              h-6
              w-6
              group-hover:text-blue-400
              transition-colors
            "
          />
        </motion.div>
      )}
    </Button>
  );

  // If not in mobile menu view, just return the toggle button
  if (!isMobileMenuView) {
    return <MobileMenuToggle />;
  }

  // Full Mobile Menu
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                      text-sm
                      font-medium
                      transition-colors
                      hover:text-blue-400
                      flex items-center
                      space-x-2
                      ${
                        activeSection === item.href.slice(1)
                          ? item.color
                          : "text-muted-foreground"
                      }
                    `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  {item.name}
                </Link>
              ))}
              <SocialLinks variant="mobile" />
              <div className="space-y-4 pt-4">
                <Button
                  variant="default"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 group"
                >
                  <Download className="h-4 w-4 group-hover:rotate-6 transition-transform" />
                  <span>Download Resume</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 group"
                >
                  <Lock
                    className="
                        h-4
                        w-4
                        transition-colors
                        group-hover:text-blue-400
                      "
                  />
                  <span>Admin Access</span>
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
