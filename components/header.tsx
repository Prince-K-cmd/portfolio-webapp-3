"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Github, Linkedin, Mail, Download, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const menuItems = [
  { name: "About", href: "#about", color: "text-blue-400" },
  { name: "Skills", href: "#skills", color: "text-cyan-400" },
  { name: "Projects", href: "#projects", color: "text-indigo-400" },
  { name: "Contact", href: "#contact", color: "text-purple-400" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })

      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 header-glow
        ${isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <span className="text-blue-400">{`<`}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                KPrince-Coder
              </span>
              <span className="text-indigo-400">{`/>`}</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Full */}
          <nav className="hidden xl:flex items-center justify-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-blue-400 relative
                  ${activeSection === item.href.slice(1) ? item.color : "text-muted-foreground"}`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions - Full */}
          <div className="hidden xl:flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="mailto:contact@example.com">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="default"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                    asChild
                  >
                    <Link href="/resume.pdf" download>
                      <Download className="h-4 w-4" />
                      <span>Resume</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download Resume</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative group admin-button"
                    onClick={() => console.log("Admin authentication")}
                  >
                    <Lock className="h-5 w-5 transition-colors group-hover:text-blue-400" />
                    <span className="sr-only">Admin</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Admin Access</p>
                </TooltipContent>
              </Tooltip>
              <ThemeToggle />
            </TooltipProvider>
          </div>

          {/* Tablet Navigation (1024px - 1279px) */}
          <div className="hidden md:flex xl:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation (< 768px) */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-b"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                      activeSection === item.href.slice(1) ? item.color : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="mailto:contact@example.com">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500"
                    asChild
                  >
                    <Link href="/resume.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

