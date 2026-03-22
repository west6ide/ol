import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/shared/lib/cn';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost';
  }
>;

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={cn('button', `button--${variant}`, className)} {...props}>
      {children}
    </button>
  );
}
