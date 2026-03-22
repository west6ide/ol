import { describe, expect, it } from 'vitest';
import { parseEnv } from '@/shared/config/env';

describe('parseEnv', () => {
  it('uses safe defaults', () => {
    expect(parseEnv({})).toEqual({
      appName: 'Northstar Frontend',
      apiUrl: '',
    });
  });

  it('trims incoming values', () => {
    expect(
      parseEnv({
        VITE_APP_NAME: ' Demo ',
        VITE_API_URL: ' https://api.example.com ',
      }),
    ).toEqual({
      appName: 'Demo',
      apiUrl: 'https://api.example.com',
    });
  });
});
