import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        `
        flex 
        h-10 
        w-full 
        rounded-md 
        border 
        border-input 
        bg-background 
        px-3 
        py-2 
        text-sm 
        ring-offset-background 
        file:border-0 
        file:bg-transparent 
        file:text-sm 
        file:font-medium 
        placeholder:text-muted-foreground 
        placeholder:opacity-40  // Reduced opacity for placeholders
        focus-visible:outline-none 
        focus-visible:ring-2 
        focus-visible:ring-blue-500/50 
        focus-visible:border-transparent 
        disabled:cursor-not-allowed 
        disabled:opacity-50 
        transition-all 
        duration-200
        `,
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
