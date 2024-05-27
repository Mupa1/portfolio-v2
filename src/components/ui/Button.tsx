import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        "flex gap-2 justify-center items-center rounded-md p-2 sm:p-3 leading-6 font-normal text-primary-100 shadow-sm bg-primary-500 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";

export { Button };
