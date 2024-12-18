import { ContactFormData, ContactFormErrors } from "../types";

export function validateContactForm(
  formData: ContactFormData
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Invalid email address";
  }

  // Subject validation
  if (!formData.subject.trim()) {
    errors.subject = "Subject is required";
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
}
