
import { cookies, headers } from 'next/headers';
import { fetchWithTimeout,FetchOptions } from './serverFetchWithTimeout';



export const lang = {
  "ru"  : 1,
  "uz" : 2,

}

export async function getServerLocale(): Promise<string> {
  const headersList = await headers();
  const cookieStore = await cookies();
  
  const localeFromHeader = headersList.get('x-locale');
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value;
  
  return localeFromHeader || localeFromCookie || 'ru';
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
      "accept-language" : String(lang[locale as keyof typeof lang] ?? lang["ru"]  ),
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


