// export interface ContactFormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export interface ContactFormErrors {
//   name?: string;
//   email?: string;
//   subject?: string;
//   message?: string;
// }

// export interface ContactFormFieldProps {
//   id: keyof ContactFormData;
//   label: string;
//   type?: string;
//   placeholder?: string;
//   required?: boolean;
//   icon?: React.ComponentType<{ className?: string }>;
// }

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactFormFieldProps {
  id: keyof ContactFormData;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}
