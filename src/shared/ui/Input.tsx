import React, { forwardRef } from 'react';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/cn';

type BaseProps = {
  label: string;
  error?: string;
  as?: 'input' | 'textarea';
};

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps | TextareaProps>(
  function Input({ label, error, as = 'input', className, ...props }, ref) {
    return (
      <label className="field">
        <span className="field__label">{label}</span>
        {as === 'textarea' ? (
          <textarea
            className={cn('field__control field__control--textarea', className)}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            {...(props as TextareaProps)}
          />
        ) : (
          <input
            className={cn('field__control', className)}
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            {...(props as InputProps)}
          />
        )}
        {error ? <span className="field__error">{error}</span> : null}
      </label>
    );
  },
);
