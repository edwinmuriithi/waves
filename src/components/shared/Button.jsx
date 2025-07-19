import React from "react";
import { cn } from "../../lib/utils";

const variants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  link: "underline text-blue-600 hover:text-blue-800",
};

const sizes = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-9 px-3 text-sm rounded-md",
  lg: "h-11 px-6 text-base rounded-md",
  icon: "h-10 w-10 p-0",
};

const Button = React.forwardRef(
  ({ className, children, variant = "default", size = "default", type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
