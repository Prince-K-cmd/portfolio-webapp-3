//

"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, User, MessageCircle } from "lucide-react";
import { ContactFormData } from "@/types/contact";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = (): boolean => {
    const { name, email, subject, message } = formData;

    // Comprehensive validation
    if (!name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    if (!subject.trim()) {
      toast({
        title: "Subject Required",
        description: "Please enter an email subject.",
        variant: "destructive",
      });
      return false;
    }

    if (!message.trim()) {
      toast({
        title: "Message Required",
        description: "Please enter your message.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Simulate form submission
      // In a real-world scenario, you'd use fetch or axios here
      console.log("Form submitted:", formData);

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Accessibility-focused form input component
  const FormInput = ({
    id,
    label,
    type = "text",
    icon: Icon,
    ...props
  }: {
    id: string;
    label: string;
    type?: string;
    icon?: React.ComponentType<{ className?: string }>;
  } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground/80 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-muted-foreground" />
          </div>
        )}
        <Input
          id={id}
          type={type}
          aria-label={label}
          value={formData[id as keyof ContactFormData]}
          onChange={handleInputChange}
          required
          className={`
            w-full
            ${Icon ? "pl-10" : ""}
            focus:ring-2 
            focus:ring-transparent 
            focus:border-transparent 
            focus:outline-none
            transition-all
            duration-300
          `}
          {...props}
        />
      </div>
    </div>
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 bg-gradient-to-b from-blue-900/20 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} noValidate aria-label="Contact Form">
            <FormInput
              id="name"
              label="Full Name"
              placeholder="Your Name"
              icon={User}
              required
            />

            <FormInput
              id="email"
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              icon={Mail}
              required
            />

            <FormInput
              id="subject"
              label="Email Subject"
              placeholder="Purpose of your message"
              icon={MessageCircle}
              required
            />

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground/80 mb-2"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                aria-label="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Type your message here..."
                required
                className=" w-full 
                  focus:ring-2 
                  focus:ring-transparent 
                  focus:border-transparent 
                  focus:outline-none 
                  transition-all 
                  duration-300
                  placeholder:text-muted-foreground 
                  placeholder:opacity-50"
              />
            </div>

            <Button
              type="submit"
              aria-label="Send Message"
              className="
                w-full 
                bg-gradient-to-r 
                from-blue-500 
                to-cyan-500 
                hover:from-blue-600 
                hover:to-cyan-600 
                flex 
                items-center 
                justify-center 
                space-x-2
              "
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
