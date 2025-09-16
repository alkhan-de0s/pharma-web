
import { cookies, headers } from 'next/headers';
import { fetchWithTimeout,FetchOptions } from './serverFetchWithTimeout';



const lang = {
  "az"  : 1,
  "en" : 3,
  "ru" : 2
}

async function getServerLocale(): Promise<string> {
  const headersList = await headers();
  const cookieStore = await cookies();
  
  const localeFromHeader = headersList.get('x-locale');
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value;
  
  return localeFromHeader || localeFromCookie || 'en';
}


export const serverApiClient = async <T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> => {

  const locale = await getServerLocale();
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  const url = new URL(endpoint, baseUrl);
  const defaultOptions: FetchOptions = {
    timeout: 10000,
    retries: 2,
    headers: {
      'Content-Type': 'application/json',
      "languageId" : String(lang[locale as keyof typeof lang] ?? lang["az"]  ),
      ...options.headers,
    },
    ...options,
  };
  

  return fetchWithTimeout<T>(url.toString(), defaultOptions);
};


export const serverApi = {
  get: <T>(endpoint: string, options?: FetchOptions) =>
    serverApiClient<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, data?: any, options?: FetchOptions) =>
    serverApiClient<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    }),

  put: <T>(endpoint: string, data?: any, options?: FetchOptions) =>
    serverApiClient<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),

  delete: <T>(endpoint: string, options?: FetchOptions) =>
    serverApiClient<T>(endpoint, { ...options, method: 'DELETE' }),
};


