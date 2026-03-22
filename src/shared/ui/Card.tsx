import type { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function Card({ title, description, children }: CardProps) {
  return (
    <article className="surface-card">
      <div className="surface-card__head">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      {children}
    </article>
  );
}
