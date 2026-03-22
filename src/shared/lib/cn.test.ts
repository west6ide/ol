import { describe, expect, it } from 'vitest';
import { cn } from '@/shared/lib/cn';

describe('cn', () => {
  it('joins class names predictably', () => {
    expect(cn('base', undefined, ['extra'], { active: true, hidden: false })).toBe(
      'base extra active',
    );
  });
});
