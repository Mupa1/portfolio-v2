import { forwardRef, LegacyRef } from 'react';

import { ErrorMessage } from './ErrorMessage';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, type, label, error, ...props },
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm leading-6">
          {label}
        </label>
        <div className="mt-2 relative">
          <input
            ref={ref}
            id={id}
            name={id}
            type={type}
            autoComplete={id}
            className={`block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 shadow-sm ring-1 ring-inset focus:outline-none ${
              error
                ? "ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
                : "ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
            }`}
            {...props}
          />
        </div>
        {error && <ErrorMessage error={error} id={id} />}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
