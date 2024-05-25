import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className="rounded-md px-3 py-1.5 text-sm leading-6 text-primary-100 shadow-sm bg-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";

export { Button };
