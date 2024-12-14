// import { footerData } from "@/data/footer";

// export function Footer() {
//   return (
//     <footer className="py-6 bg-background border-t">
//       <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
//         {footerData.copyright}
//       </div>
//     </footer>
//   );
// }

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";
// import { footerData } from "@/data/footer";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// export function Footer() {
//   const socialLinks = [
//     {
//       icon: Github,
//       href: "https://github.com/princekm",
//       color:
//         "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white",
//       glow: "hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
//       tooltip: "GitHub",
//     },
//     {
//       icon: Linkedin,
//       href: "https://linkedin.com/in/princekm",
//       color:
//         "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
//       glow: "hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]",
//       tooltip: "LinkedIn",
//     },
//     {
//       icon: Twitter,
//       href: "https://twitter.com/princekm",
//       color:
//         "text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",
//       glow: "hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] dark:hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]",
//       tooltip: "Twitter",
//     },
//     {
//       icon: Mail,
//       href: "mailto:contact@princekm.dev",
//       color:
//         "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
//       glow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] dark:hover:shadow-[0_0_15px_rgba(248,113,113,0.5)]",
//       tooltip: "Send Email",
//     },
//   ];

//   return (
//     <footer className="py-16 bg-background border-t">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Brand Section */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="space-y-4"
//             >
//               <div className="flex items-center space-x-2">
//                 <Globe className="w-8 h-8 text-blue-500" />
//                 <h2 className="text-2xl font-bold gradient-text">
//                   Prince Kyeremeh
//                 </h2>
//               </div>
//               <p className="text-muted-foreground max-w-md">
//                 Crafting innovative solutions at the intersection of technology
//                 and creativity. Transforming ideas into impactful digital
//                 experiences.
//               </p>
//               <p className="italic text-sm text-muted-foreground">
//                 "Code is poetry in motion, design is art in function."
//               </p>
//             </motion.div>
//           </div>

//           {/* Social and Contact Section */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <TooltipProvider delayDuration={300}>
//                 <div className="space-y-6">
//                   <h3 className="text-xl font-semibold">Let's Connect</h3>
//                   <div className="flex space-x-6">
//                     {socialLinks.map((social, index) => (
//                       <Tooltip key={social.href}>
//                         <TooltipTrigger asChild>
//                           <motion.a
//                             href={social.href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             whileHover={{
//                               y: -10,
//                               scale: 1.1,
//                               transition: { duration: 0.2 },
//                             }}
//                             className={`
//                               p-3 rounded-full
//                               transition-all duration-300
//                               ${social.color}
//                               ${social.glow}
//                               hover:bg-background/10
//                               dark:hover:bg-white/10
//                               group
//                               relative
//                               overflow-hidden
//                               cursor-pointer
//                             `}
//                           >
//                             <social.icon className="w-6 h-6 relative z-10" />
//                             {/* Animated Glow Effect */}
//                             <span
//                               className="
//                                 absolute
//                                 inset-0
//                                 bg-gradient-to-r
//                                 from-transparent
//                                 via-white/20
//                                 to-transparent
//                                 opacity-0
//                                 group-hover:opacity-100
//                                 transition-opacity
//                                 duration-300
//                                 pointer-events-none
//                               "
//                             />
//                           </motion.a>
//                         </TooltipTrigger>
//                         <TooltipContent
//                           side="bottom"
//                           className="
//                             bg-foreground/90
//                             text-background
//                             dark:bg-background/90
//                             dark:text-foreground
//                             rounded-md
//                             px-3
//                             py-1
//                             text-xs
//                           "
//                         >
//                           {social.tooltip}
//                         </TooltipContent>
//                       </Tooltip>
//                     ))}
//                   </div>

//                   {/* Additional Contact Info */}
//                   <div className="mt-6 border-t pt-6 border-muted-foreground/20">
//                     <p className="text-sm text-muted-foreground">
//                       {footerData.copyright}
//                     </p>
//                     <p className="text-xs text-muted-foreground mt-2">
//                       Designed with ❤️ using Next.js and Tailwind CSS
//                     </p>
//                   </div>
//                 </div>
//               </TooltipProvider>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Globe, Sparkles } from "lucide-react";
import { footerData } from "@/data/footer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/princekm",
      color:
        "text-black-900 hover:text-black dark:text-gray-100 dark:hover:text-white",
      glow: "hover:shadow-[0_0_15px_rgba(51,51,51,0.3)] dark:hover:shadow-[0_0_15px_rgba(230,230,230,0.3)]",
      tooltip: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/princekm",
      color:
        "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
      glow: "hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]",
      tooltip: "LinkedIn Profile",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/princekm",
      color:
        "text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",
      glow: "hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] dark:hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]",
      tooltip: "Twitter Profile",
    },
    {
      icon: Mail,
      href: "mailto:contact@princekm.dev",
      color:
        "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
      glow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] dark:hover:shadow-[0_0_15px_rgba(248,113,113,0.5)]",
      tooltip: "Send Email",
    },
  ];

  return (
    <footer
      className="
        relative 
        py-16 
        bg-background 
        overflow-hidden 
        before:absolute 
        before:inset-0 
        before:bg-gradient-to-br 
        before:from-blue-500/10 
        before:via-cyan-500/5 
        before:to-purple-500/10 
        before:-z-10 
        before:opacity-50 
        before:blur-3xl
      "
    >
      {/* Innovative Neon Border Effect */}
      <div
        className="
          absolute 
          inset-0 
          pointer-events-none 
          border-[4px] 
          border-transparent 
          bg-gradient-to-br 
          from-blue-500/30 
          via-cyan-500/20 
          to-purple-500/30 
          animate-border-gradient 
          opacity-50
        "
        style={{
          backgroundClip: "content-box",
          WebkitBackgroundClip: "content-box",
        }}
      />

      {/* Innovative Neon Border Effect */}
      <div
        className="
          absolute 
          inset-0 
          pointer-events-none 
          border-[4px] 
          border-transparent 
          bg-gradient-to-br 
          from-blue-500/30 
          via-cyan-500/20 
          to-purple-500/30 
          animate-border-gradient 
          opacity-50
        "
        style={{
          backgroundClip: "content-box",
          WebkitBackgroundClip: "content-box",
        }}
      />

      {/* Subtle Particle-like Glow Effect */}
      <div
        className="
          absolute 
          top-0 
          left-0 
          right-0 
          h-1 
          bg-gradient-to-r 
          from-transparent 
          via-blue-500/50 
          to-transparent 
          animate-pulse-slow
        "
      />
      {/* Subtle Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-500/5
          via-cyan-500/5
          to-purple-500/5
          opacity-50
          pointer-events-none
        "
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 relative z-20"
            >
              <div className="flex items-center space-x-2 group">
                <Globe
                  className="
                    w-8 h-8
                    text-blue-500
                    group-hover:rotate-[360deg]
                    transition-transform
                    duration-500
                  "
                />
                <h2
                  className="
                    text-2xl
                    font-bold
                    gradient-text
                    group-hover:tracking-wider
                    transition-all
                    duration-300
                  "
                >
                  Prince Kyeremeh
                </h2>
                <Sparkles
                  className="
                    w-5 h-5
                    text-blue-400
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />
              </div>
              <p
                className="
                  text-muted-foreground
                  max-w-md
                  relative
                  before:absolute
                  before:-left-4
                  before:top-0
                  before:w-1
                  before:h-full
                  before:bg-gradient-to-b
                  before:from-blue-500/50
                  before:to-transparent
                "
              >
                Crafting innovative solutions at the intersection of technology
                and creativity. Transforming ideas into impactful digital
                experiences.
              </p>
              <p
                className="
                  italic
                  text-sm
                  text-muted-foreground
                  relative
                  pl-4
                  before:absolute
                  before:left-0
                  before:top-1/2
                  before:-translate-y-1/2
                  before:w-2
                  before:h-2
                  before:bg-blue-500
                  before:rounded-full
                "
              >
                "Code is poetry in motion, design is art in function."
              </p>
            </motion.div>
          </div>

          {/* Social and Contact Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-20"
            >
              <TooltipProvider delayDuration={300}>
                <div className="space-y-6">
                  <h3
                    className="
                      text-xl
                      font-semibold
                      relative
                      inline-block
                      after:absolute
                      after:-bottom-1
                      after:left-0
                      after:w-full
                      after:h-0.5
                      after:bg-gradient-to-r
                      after:from-blue-500
                      after:to-cyan-500
                    "
                  >
                    Let's Connect
                  </h3>
                  <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                      <Tooltip key={social.href}>
                        <TooltipTrigger asChild>
                          <motion.a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                              y: -10,
                              scale: 1.1,
                              transition: { duration: 0.2 },
                            }}
                            className={`
                              p-3
                              rounded-full
                              transition-all
                              duration-300
                              ${social.color}
                              ${social.glow}
                              hover:bg-background/10
                              dark:hover:bg-white/10
                              group
                              relative
                              overflow-hidden
                              cursor-pointer
                              // Innovative Neon Glow Effect
                              before:absolute
                              before:-inset-0.5
                              before:bg-gradient-to-r
                              before:to-cyan-500/30
                              before:rounded-full
                              before:opacity-0
                              before:blur-lg
                              before:transition-all
                              before:duration-300
                              hover:before:opacity-50
                            `}
                          >
                            <social.icon
                              className="
                                w-6
                                h-6
                                relative
                                z-10
                                transition-transform
                                group-hover:rotate-12
                              "
                            />
                            {/* Advanced Particle Glow */}
                            <span
                              className="
                                absolute
                                inset-0
                                bg-gradient-to-r
                                from-transparent
                                via-white/20
                                to-transparent
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                duration-300
                                pointer-events-none
                                animate-pulse-slow
                              "
                            />
                          </motion.a>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          className="
                            bg-foreground/90
                            text-background
                            dark:bg-background/90
                            dark:text-foreground
                            rounded-md
                            px-3
                            py-1
                            text-xs
                            shadow-lg
                            border
                            border-blue-500/20
                          "
                        >
                          {social.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>

                  {/* Innovative Contact Info */}
                  <div
                    className="
                      mt-6
                      border-t
                      pt-6
                      border-muted-foreground/20
                      relative
                      overflow-hidden
                    "
                  >
                    {/* Animated Gradient Border */}
                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-0.5
                        bg-gradient-to-r
                        from-transparent
                        via-blue-500/50
                        to-transparent
                        animate-border-gradient
                      "
                    />
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p
                        className="
                          text-sm
                          text-muted-foreground
                          relative
                          pl-4
                          before:absolute
                          before:left-0
                          before:top-1/2
                          before:-translate-y-1/2
                          before:w-2
                          before:h-2
                          before:bg-blue-500
                          before:rounded-full
                        "
                      >
                        {footerData.copyright}
                      </p>
                      <p
                        className="
                          text-xs
                          text-muted-foreground
                          mt-2
                          relative
                          pl-4
                          before:absolute
                          before:left-0
                          before:top-1/2
                          before:-translate-y-1/2
                          before:w-2
                          before:h-2
                          before:bg-cyan-500
                          before:rounded-full
                        "
                      >
                        Designed with ❤️ using Next.js and Tailwind CSS
                      </p>
                    </motion.div>
                  </div>
                </div>
              </TooltipProvider>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-1
          bg-gradient-to-r
          from-transparent
          via-cyan-500/30
          to-transparent
          opacity-50
        "
      />
    </footer>
  );
}
