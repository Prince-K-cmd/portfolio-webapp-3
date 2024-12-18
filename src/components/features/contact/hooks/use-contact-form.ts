import { useState, useCallback } from "react";
import { ContactFormData, ContactFormErrors } from "../types";
import { validateContactForm } from "../utils/validation";
import { submitContactForm } from "../utils/form-submission";
import { useToast } from "@/hooks/use-toast";

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));

      // Clear specific field error when user starts typing
      if (errors[id as keyof ContactFormErrors]) {
        setErrors((prev) => ({
          ...prev,
          [id]: undefined,
        }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validate form
      const validationErrors = validateContactForm(formData);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);

        // Show toast for first error
        const firstError = Object.values(validationErrors)[0];
        toast({
          title: "Form Validation Error",
          description: firstError,
          variant: "destructive",
        });

        return;
      }

      try {
        setIsSubmitting(true);

        await submitContactForm(formData);

        // Reset form and show success toast
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});

        toast({
          title: "Message Sent Successfully",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      } catch (error) {
        toast({
          title: "Submission Error",
          description:
            "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, toast]
  );

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
}
