import { User, Mail, MessageCircle } from "lucide-react";
import { ContactFormFieldProps } from "../types";

export const CONTACT_FORM_FIELDS: ContactFormFieldProps[] = [
  {
    id: "name",
    label: "Full Name",
    placeholder: "Your Name",
    icon: User,
    required: true,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "your.email@example.com",
    icon: Mail,
    required: true,
  },
  {
    id: "subject",
    label: "Email Subject",
    placeholder: "Purpose of your message",
    icon: MessageCircle,
    required: true,
  },
];
