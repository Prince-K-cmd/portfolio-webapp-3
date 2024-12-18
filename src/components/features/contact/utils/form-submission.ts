import { ContactFormData } from "../types";

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Simulate form submission
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Contact form submission error:", error);
    throw error;
  }
}
