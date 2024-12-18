// "use client";

// import { useState } from "react";
// import { Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { ContactFormField } from "./ContactFormField";
// import { useContactForm } from "../hooks/use-contact-form";
// import { CONTACT_FORM_FIELDS } from "../constants";

// export function ContactForm() {
//   const { formData, errors, isSubmitting, handleInputChange, handleSubmit } =
//     useContactForm();

//   const [showAllRequired, setShowAllRequired] = useState(false);
//   const [focusedFields, setFocusedFields] = useState<string[]>([]);

//   const handleFieldFocus = (fieldId: string) => {
//     setFocusedFields((prev) => {
//       if (!prev.includes(fieldId)) {
//         return [...prev, fieldId];
//       }
//       return prev;
//     });

//     // Show all required stars when any field is focused
//     if (focusedFields.length === 0) {
//       setShowAllRequired(true);
//     }
//   };

//   const handleFieldBlur = () => {
//     // Check if all fields are empty and not focused
//     const allFieldsEmpty = Object.values(formData).every(
//       (value) => value.trim() === ""
//     );

//     if (allFieldsEmpty && focusedFields.length === 0) {
//       setShowAllRequired(false);
//     }
//   };

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     // Reset required star visibility on submission
//     setShowAllRequired(false);
//     setFocusedFields([]);
//     handleSubmit(e);
//   };

//   return (
//     <form
//       onSubmit={handleFormSubmit}
//       className="space-y-6"
//       aria-labelledby="contact-form-title"
//     >
//       <div className="grid md:grid-cols-2 gap-4">
//         {CONTACT_FORM_FIELDS.map((field) => (
//           <ContactFormField
//             key={field.id}
//             {...field}
//             value={formData[field.id]}
//             onChange={handleInputChange}
//             showRequired={showAllRequired}
//             onFocus={() => handleFieldFocus(field.id)}
//             onBlur={handleFieldBlur}
//             aria-invalid={!!errors[field.id]}
//             aria-errormessage={errors[field.id]}
//           />
//         ))}
//       </div>

//       {/* Message Textarea */}
//       <div>
//         <label
//           htmlFor="message"
//           className="block text-sm font-medium text-foreground/80 mb-2 flex items-center"
//         >
//           Your Message
//           {(showAllRequired || formData.message.trim() === "") && (
//             <span
//               className="text-red-500 ml-1 transition-all duration-300"
//               aria-hidden="true"
//             >
//               *
//             </span>
//           )}
//         </label>
//         <Textarea
//           id="message"
//           placeholder="Write your message here..."
//           value={formData.message}
//           onChange={handleInputChange}
//           onFocus={() => handleFieldFocus("message")}
//           onBlur={handleFieldBlur}
//           required
//           aria-required="true"
//           aria-invalid={!!errors.message}
//           aria-errormessage={errors.message}
//           className="min-h-[150px] resize-y"
//         />
//         {errors.message && (
//           <p className="text-red-500 text-sm mt-1" role="alert">
//             {errors.message}
//           </p>
//         )}
//       </div>

//       <Button
//         type="submit"
//         disabled={isSubmitting}
//         className="
//           w-full
//           theme-gradient-button
//           flex
//           items-center
//           justify-center
//           gap-2
//         "
//       >
//         <Send className="h-5 w-5" />
//         {isSubmitting ? "Sending..." : "Send Message"}
//       </Button>
//     </form>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormField } from "./ContactFormField";
import { useContactForm } from "../hooks/use-contact-form";
import { CONTACT_FORM_FIELDS } from "../constants";

export function ContactForm() {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } =
    useContactForm();

  const [showAllRequired, setShowAllRequired] = useState(false);
  const [focusedFields, setFocusedFields] = useState<string[]>([]);

  const handleFieldFocus = (fieldId: string) => {
    // When any field is focused, show all required stars
    setFocusedFields((prev) => {
      if (!prev.includes(fieldId)) {
        return [...prev, fieldId];
      }
      return prev;
    });

    // Always show all required stars when a field is focused
    setShowAllRequired(true);
  };

  const handleFieldBlur = (fieldId: string) => {
    // Remove the field from focused fields
    setFocusedFields((prev) => prev.filter((id) => id !== fieldId));

    // Check if all fields are empty
    const allFieldsEmpty = Object.entries(formData).every(
      ([key, value]) => key === "id" || value.trim() === ""
    );

    // If all fields are empty and no fields are currently focused
    if (allFieldsEmpty && focusedFields.length === 0) {
      // Hide all required stars
      setShowAllRequired(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Reset required star visibility on submission
    setShowAllRequired(false);
    setFocusedFields([]);
    handleSubmit(e);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="space-y-6"
      aria-labelledby="contact-form-title"
    >
      <div className="space-y-4">
        {CONTACT_FORM_FIELDS.map((field) => (
          <ContactFormField
            key={field.id}
            {...field}
            value={formData[field.id]}
            onChange={handleInputChange}
            showRequired={showAllRequired}
            onFocus={() => handleFieldFocus(field.id)}
            onBlur={() => handleFieldBlur(field.id)}
            aria-invalid={!!errors[field.id]}
            aria-errormessage={errors[field.id]}
            fullWidth
          />
        ))}

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground/80 mb-2 flex items-center"
          >
            Your Message
            {showAllRequired && (
              <span
                className="text-red-500 ml-1 transition-all duration-300"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
          <Textarea
            id="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleInputChange}
            onFocus={() => handleFieldFocus("message")}
            onBlur={() => handleFieldBlur("message")}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-errormessage={errors.message}
            className="min-h-[150px] resize-y w-full"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full 
          theme-gradient-button 
          flex 
          items-center 
          justify-center 
          gap-2
        "
      >
        <Send className="h-5 w-5" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
