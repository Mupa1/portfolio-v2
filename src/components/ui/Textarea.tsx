import { forwardRef, TextareaHTMLAttributes } from "react";

import { ErrorMessage } from "./ErrorMessage";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, placeholder, error, ...props }, ref) => {
    return (
      <div>
        <div className="min-w-0 flex-1">
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
          <div className="bg-primary-900 placeholder:text-gray-400 overflow-hidden rounded-md shadow-sm ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-primary-600">
            <textarea
              placeholder={placeholder}
              rows={10}
              defaultValue={""}
              ref={ref}
              className={`block w-full resize-none border-0 rounded-md bg-primary-900 p-2 sm:p-3 shadow-sm ring-1 ring-inset focus:outline-none ${
                error
                  ? "ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
                  : "ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
              }`}
              {...props}
            />
          </div>
        </div>
        {error && <ErrorMessage error={error} id={id} />}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
