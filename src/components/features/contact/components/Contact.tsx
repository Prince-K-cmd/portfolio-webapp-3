"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-section-title"
      className="py-24 bg-gradient-to-b from-background to-blue-900/10"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          id="contact-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <MessageCircle className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                </div>
                <p className="text-muted-foreground">
                  Feel free to reach out. I'm always open to discussing new
                  projects, creative ideas, or opportunities to collaborate.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>Location: Your City, Country</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-blue-500" />
                  <a
                    href="mailto:contact@example.com"
                    className="hover:text-blue-500 transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
