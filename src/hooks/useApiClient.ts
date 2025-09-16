
'use client';

import { useLocale } from 'next-intl';
import { useCallback } from 'react';
import { fetchWithTimeout, FetchOptions } from '@/lib/clientFetchWithTimeout';


const lang = {
  "az" : 1,
  "ru" : 2,
  "en" : 3
}

export function useApiClient() {
  const locale = useLocale(); 
  
  
  const clientApiCall = useCallback(async <T>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<T> => {
    
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    const url = new URL(endpoint, baseUrl);
 
    
    
    const defaultOptions: FetchOptions = {
      timeout: 15000,
      retries: 1,
      headers: {
        'Content-Type': 'application/json',
        'languageId': String(lang[locale as keyof typeof lang] ?? lang["az"]),
        ...options.headers,
      },
      ...options,
    };
    
    
    return fetchWithTimeout<T>(url.toString(), defaultOptions);
  }, [locale]); 

  
  return {
    get: useCallback(<T>(endpoint: string, options?: FetchOptions) =>
      clientApiCall<T>(endpoint, { ...options, method: 'GET' }), [clientApiCall]),

    post: useCallback(<T>(endpoint: string, data?: any, options?: FetchOptions) =>
      clientApiCall<T>(endpoint, {
        ...options,
        method: 'POST',
        body: data ? JSON.stringify(data) : undefined,
      }), [clientApiCall]),

    put: useCallback(<T>(endpoint: string, data?: any, options?: FetchOptions) =>
      clientApiCall<T>(endpoint, {
        ...options,
        method: 'PUT',
        body: data ? JSON.stringify(data) : undefined,
      }), [clientApiCall]),

    delete: useCallback(<T>(endpoint: string, options?: FetchOptions) =>
      clientApiCall<T>(endpoint, { ...options, method: 'DELETE' }), [clientApiCall]),
    
    
    locale,
  };
}

