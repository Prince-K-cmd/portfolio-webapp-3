// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { ContactFormFieldProps } from "../types";

// interface ExtendedContactFormFieldProps extends ContactFormFieldProps {
//   value: string;
//   showRequired: boolean;
//   onFocus: () => void;
//   onBlur: () => void;
// }

// export function ContactFormField({
//   id,
//   label,
//   type = "text",
//   placeholder,
//   required = false,
//   icon: Icon,
//   value,
//   showRequired,
//   onFocus,
//   onBlur,
// }: ExtendedContactFormFieldProps) {
//   const [isFocused, setIsFocused] = useState(false);

//   const handleFocus = () => {
//     setIsFocused(true);
//     onFocus();
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//     onBlur();
//   };

//   const shouldShowRequiredStar =
//     isFocused || (showRequired && value.trim() === "");

//   return (
//     <div className="mb-4">
//       <label
//         htmlFor={id}
//         className="block text-sm font-medium text-foreground/80 mb-2 flex items-center"
//       >
//         {label}
//         {required && shouldShowRequiredStar && (
//           <span
//             className="text-red-500 ml-1 transition-all duration-300"
//             aria-hidden="true"
//           >
//             *
//           </span>
//         )}
//       </label>
//       <div className="relative">
//         {Icon && (
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Icon className="h-5 w-5 text-muted-foreground" />
//           </div>
//         )}
//         <Input
//           id={id}
//           type={type}
//           placeholder={placeholder}
//           required={required}
//           aria-required={required}
//           value={value}
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//           className={`
//             w-full
//             ${Icon ? "pl-10" : ""}
//             focus:ring-2
//             focus:ring-transparent
//             focus:border-transparent
//             focus:outline-none
//             transition-all
//             duration-300
//           `}
//         />
//       </div>
//     </div>
//   );
// }

import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { ContactFormFieldProps } from "../types";

interface ExtendedContactFormFieldProps extends ContactFormFieldProps {
  value: string;
  showRequired: boolean;
  onFocus: () => void;
  onBlur?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  fullWidth?: boolean;
}

export function ContactFormField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  icon: Icon,
  value,
  showRequired,
  onFocus,
  onBlur,
}: ExtendedContactFormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground/80 mb-2 flex items-center"
      >
        {label}
        {required && showRequired && (
          <span
            className="text-red-500 ml-1 transition-all duration-300"
            aria-hidden="true"
          >
            *
          </span>
        )}
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
          placeholder={placeholder}
          required={required}
          aria-required={required}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
        />
      </div>
    </div>
  );
}
