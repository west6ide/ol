type AppEnv = {
  appName: string;
  apiUrl: string;
};

export function parseEnv(source: Record<string, string | undefined>): AppEnv {
  return {
    appName: source.VITE_APP_NAME?.trim() || 'Northstar Frontend',
    apiUrl: source.VITE_API_URL?.trim() || '',
  };
}

export const env = parseEnv(import.meta.env);
