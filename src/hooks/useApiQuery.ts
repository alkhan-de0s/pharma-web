
'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { useApiClient } from './useApiClient';
import { FetchOptions } from '@/lib/clientFetchWithTimeout';


function createQueryKey(endpoint: string, locale: string, params?: Record<string, any>) {
  return [endpoint, locale, params].filter(Boolean);
}


export function useApiQuery<T>(
  endpoint: string,
  options?: {
    enabled?: boolean;
    staleTime?: number;
    gcTime?: number;
    refetchOnWindowFocus?: boolean;
    params?: Record<string, any>;
    fetchOptions?: FetchOptions;
  }
) {
  const locale = useLocale();
  const api = useApiClient();
  
  const {
    enabled = true,
    staleTime = 5 * 60 * 1000, 
    gcTime = 10 * 60 * 1000, 
    refetchOnWindowFocus = false,
    params,
    fetchOptions,
  } = options || {};

  return useQuery({
    queryKey: createQueryKey(endpoint, locale, params),
    queryFn: async () => {
      
      let url = endpoint;
      if (params) {
        const searchParams = new URLSearchParams(params);
        url += `${endpoint.includes('?') ? '&' : '?'}${searchParams.toString()}`;
      }
      
      return api.get<T>(url, fetchOptions);
    },
    enabled,
    staleTime,
    refetchOnWindowFocus,
    gcTime
    
  });
}


export function useApiMutation<TData, TVariables = any>(
  endpoint: string,
  method: 'POST' | 'PUT' | 'DELETE' = 'POST',
  options?: {
    onSuccess?: (data: TData) => void;
    onError?: (error: Error) => void;
    invalidateQueries?: string[]; 
  }
) {
  const api = useApiClient();
  const queryClient = useQueryClient();
  const locale = useLocale();
  
  const { onSuccess, onError, invalidateQueries } = options || {};

  return useMutation({
    mutationFn: async (variables: TVariables) => {
      switch (method) {
        case 'POST':
          return api.post<TData>(endpoint, variables);
        case 'PUT':
          return api.put<TData>(endpoint, variables);
        case 'DELETE':
          return api.delete<TData>(endpoint);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    },
    onSuccess: (data) => {
      
      if (invalidateQueries) {
        invalidateQueries.forEach(queryEndpoint => {
          queryClient.invalidateQueries({
            queryKey: createQueryKey(queryEndpoint, locale)
          });
        });
      }
      
      onSuccess?.(data);
    },
    onError,
  });
}

