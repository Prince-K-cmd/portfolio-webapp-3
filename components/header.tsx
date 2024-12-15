// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Menu, X, Github, Linkedin, Mail, Download, Lock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/theme-toggle";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { logoData, menuItems, socialLinks, resumeLink } from "@/data/header";

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isAdminButtonClicked, setIsAdminButtonClicked] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (
//           scrollPosition >= sectionTop &&
//           scrollPosition < sectionTop + sectionHeight
//         ) {
//           setActiveSection(section.id);
//         }
//       });

//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 header-glow
//         ${isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"}`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="text-xl font-bold">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="flex items-center space-x-2"
//             >
//               <span className="text-blue-400">{logoData.startBracket}</span>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
//                 {logoData.text}
//               </span>
//               <span className="text-indigo-400">{logoData.endBracket}</span>
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation - Full */}
//           <nav className="hidden md:flex items-center justify-center space-x-8">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`text-sm font-semibold transition-colors hover:text-blue-400 relative ${
//                   activeSection === item.href.slice(1)
//                     ? item.color
//                     : "text-muted-foreground"
//                 }`}
//               >
//                 {item.name}
//                 {activeSection === item.href.slice(1) && (
//                   <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current"></span>
//                 )}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop Actions - Full */}
//           <div className="hidden md:flex items-center space-x-4">
//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button variant="ghost" size="icon" asChild>
//                     <Link href="https://github.com" target="_blank">
//                       <Github className="h-5 w-5" />
//                     </Link>
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>GitHub</p>
//                 </TooltipContent>
//               </Tooltip>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button variant="ghost" size="icon" asChild>
//                     <Link href="https://linkedin.com" target="_blank">
//                       <Linkedin className="h-5 w-5" />
//                     </Link>
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>LinkedIn</p>
//                 </TooltipContent>
//               </Tooltip>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button variant="ghost" size="icon" asChild>
//                     <Link href="mailto:contact@example.com">
//                       <Mail className="h-5 w-5" />
//                     </Link>
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Email</p>
//                 </TooltipContent>
//               </Tooltip>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     variant="default"
//                     className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
//                   >
//                     <Download className="h-4 w-4" />
//                     <span>Resume</span>
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Download Resume</p>
//                 </TooltipContent>
//               </Tooltip>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className={`relative group admin-button ${
//                       isAdminButtonClicked ? "clicked" : ""
//                     }`}
//                     onClick={() => {
//                       console.log("Admin authentication");
//                       setIsAdminButtonClicked(true);
//                     }}
//                     onMouseLeave={() => setIsAdminButtonClicked(false)}
//                   >
//                     <Lock className="h-5 w-5 transition-colors group-hover:text-blue-400" />
//                     <span className="sr-only">Admin</span>
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Admin Access</p>
//                 </TooltipContent>
//               </Tooltip>
//               <ThemeToggle />
//             </TooltipProvider>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden items-center space-x-4">
//             <ThemeToggle />
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
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
//                 {menuItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={`text-sm font-medium transition-colors hover:text-blue-400 ${
//                       activeSection === item.href.slice(1)
//                         ? item.color
//                         : "text-muted-foreground"
//                     }`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 <div className="flex items-center space-x-4 pt-4 border-t">
//                   <Button variant="ghost" size="icon" asChild>
//                     <Link href="https://github.com" target="_blank">
//                       <Github className="h-5 w-5" />
//                     </Link>
//                   </Button>
//                   <Button variant="ghost" size="icon" asChild>
//                     <Link href="https://linkedin.com" target="_blank">
//                       <Linkedin className="h-5 w-5" />
//                     </Link>
//                   </Button>
//                   <Button variant="ghost" size="icon" asChild>
//                     <Link href="mailto:contact@example.com">
//                       <Mail className="h-5 w-5" />
//                     </Link>
//                   </Button>
//                 </div>
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { logoData, menuItems, socialLinks } from "@/data/header";
import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdminButtonClicked, setIsAdminButtonClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });

      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TooltipProvider delayDuration={300}>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 header-glow
          ${
            isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2"
              >
                <span className="text-blue-400">
                  {logoData[0].startBracket}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  {logoData[0].text}
                </span>
                <span className="text-indigo-400">
                  {logoData[0].endBracket}
                </span>
              </motion.div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                      text-sm
                      font-semibold
                      transition-colors
                      hover:text-blue-400
                      relative
                      group
                      ${
                        activeSection === item.href.slice(1)
                          ? item.color
                          : "text-muted-foreground"
                      }
                    `}
                >
                  {item.name}
                  <span
                    className={`
                        absolute
                        -bottom-1
                        left-0
                        w-full
                        h-0.5
                        bg-current
                        scale-x-0
                        group-hover:scale-x-100
                        transition-transform
                        duration-300
                        origin-left
                        ${
                          activeSection === item.href.slice(1)
                            ? "scale-x-100"
                            : ""
                        }
                      `}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <Tooltip key={social.href}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 0, color: "currentColor", opacity: 0.8 }}
                        whileHover={{
                          y: -4, // Reduced from -10 to -5
                          color: "#3b82f6", // Tailwind blue-500
                          transition: {
                            duration: 0.1, // Shortened duration
                            ease: "easeOut", // Increased stiffness for subtler movement
                          },
                        }}
                        className="
                          relative
                          group
                          inline-block
                          transform
                          transition-all
                          duration-150
                          cursor-pointer
                        "
                      >
                        <div
                          className="
                            p-3
                            rounded-full
                            transition-all
                            duration-150
                            group-hover:bg-background/10
                            dark:group-hover:bg-white/10
                          "
                        >
                          <social.icon
                            className="
                              w-5
                              h-5
                              transition-all
                              duration-150
                            "
                          />
                        </div>
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      {social.tooltip}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              {/* Resume Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="default"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 group"
                  >
                    <Download className="h-4 w-4 group-hover:rotate-6 transition-transform" />
                    <span>Resume</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Download Resume</TooltipContent>
              </Tooltip>

              {/* Admin Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`
                        relative
                        group
                        admin-button
                        ${isAdminButtonClicked ? "clicked" : ""}
                      `}
                    onClick={() => {
                      console.log("Admin authentication");
                      setIsAdminButtonClicked(true);
                    }}
                    onMouseLeave={() => setIsAdminButtonClicked(false)}
                  >
                    <Lock
                      className="
                          h-5
                          w-5
                          transition-colors
                          group-hover:text-blue-400
                        "
                    />
                    <span className="sr-only">Admin</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Admin Access</TooltipContent>
              </Tooltip>

              {/* Enhanced Theme Toggle */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block">
                    <ThemeToggle />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Change Theme</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block">
                    <ThemeToggle />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Change Theme</p>
                </TooltipContent>
              </Tooltip>
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
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
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
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                          text-sm
                          font-medium
                          transition-colors
                          hover:text-blue-400
                          ${
                            activeSection === item.href.slice(1)
                              ? item.color
                              : "text-muted-foreground"
                          }
                            `}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    {/* Mobile Social Links */}
                    {socialLinks.map((social) => (
                      <Tooltip key={social.href}>
                        <TooltipTrigger asChild>
                          <motion.a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ y: 0, color: "currentColor" }}
                            whileHover={{
                              y: -10,
                              color: "#3b82f6", // Tailwind blue-500
                              transition: {
                                duration: 0.3,
                                type: "spring",
                                stiffness: 300,
                              },
                            }}
                            className="
                                    relative
                                    group
                                    inline-block
                                    transform
                                    transition-all
                                    duration-300
                                    cursor-pointer
                                  "
                          >
                            <div
                              className="
                                      p-2
                                      rounded-full
                                      transition-colors
                                      group-hover:bg-background/10
                                      dark:group-hover:bg-white/10
                                    "
                            >
                              <social.icon
                                className="
                                        w-5
                                        h-5
                                        transition-colors
                                        duration-300
                                      "
                              />
                            </div>
                          </motion.a>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          {social.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </TooltipProvider>
  );
}
