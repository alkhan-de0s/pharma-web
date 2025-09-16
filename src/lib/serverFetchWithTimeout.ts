
export class FetchTimeoutError extends Error {
  constructor(timeout: number) {
    super(`Request timeout after ${timeout}ms`);
    this.name = 'FetchTimeoutError';
  }
}

export class FetchHttpError extends Error {
  public status: number;
  public statusText: string;
  public response?: Response;

  constructor(status: number, statusText: string, response?: Response) {
    super(`HTTP ${status}: ${statusText}`);
    this.name = 'FetchHttpError';
    this.status = status;
    this.statusText = statusText;
    this.response = response;
  }
}

export interface FetchOptions extends RequestInit {
  timeout?: number;
  parseResponse?: boolean; 
  retries?: number; 
  retryDelay?: number; 
  params?: Record<string, any>;
}

export async function fetchWithTimeout<T = any>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    timeout = 8000,
    parseResponse = true,
    retries = 0,
    retryDelay = 1000,
    params,
    ...fetchOptions
  } = options;

  let lastError: Error;

  
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      
      if (!response.ok) {
        throw new FetchHttpError(response.status, response.statusText, response);
      }

      
      if (!parseResponse) {
        return response as unknown as T;
      }

      const contentType = response.headers.get('content-type');
      
      if (contentType?.includes('application/json')) {
        const data = await response.json();
        return data as T;
      } else if (contentType?.includes('text/')) {
        const text = await response.text();
        return text as unknown as T;
      } else {
        
        const blob = await response.blob();
        return blob as unknown as T;
      }

    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error && error.name === 'AbortError') {
        lastError = new FetchTimeoutError(timeout);
      } else if (error instanceof FetchHttpError) {
        
        if (error.status >= 500 && attempt < retries) {
          lastError = error;
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          continue;
        }
        throw error;
      } else {
        lastError = error instanceof Error ? error : new Error('Unknown fetch error');
      }

      
      if (attempt === retries) {
        throw lastError;
      }

      
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }

  throw lastError!;
}


export async function serverFetchWithTimeout<T = any>(
  url: string,
  options: FetchOptions & {
    cache?: RequestCache;
    next?: NextFetchRequestConfig;
  } = {}
): Promise<T> {
  const {
    cache = 'force-cache', 
    next,
    ...restOptions
  } = options;

  return fetchWithTimeout<T>(url, {
    ...restOptions,
    cache,
    next,
  });
}


export async function clientFetchWithTimeout<T = any>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  
  return fetchWithTimeout<T>(url, {
    cache: 'no-cache', 
    ...options,
  });
}


export const createFetcher = (baseOptions: FetchOptions = {}) => {
  return <T = any>(url: string, options: FetchOptions = {}): Promise<T> => {
    return fetchWithTimeout<T>(url, { ...baseOptions, ...options });
  };
};


export const apiFetcher = createFetcher({
  timeout: 10000,
  retries: 2,
  retryDelay: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fastFetcher = createFetcher({
  timeout: 3000,
  retries: 0,
});

export const robustFetcher = createFetcher({
  timeout: 15000,
  retries: 3,
  retryDelay: 2000,
});


//Diger usullar ucun example

// / 1. Sade sorgu
// const data = await fetchWithTimeout<ApiResponse>('/api/data');

// 2. Timeout ve retry ile

// const posts = await fetchWithTimeout<Post[]>('/api/posts', {
//   timeout: 5000,
//   retries: 2,
//   retryDelay: 1500,
// });

// 3. Server-side cache ile
// const serverData = await serverFetchWithTimeout<User[]>('/api/users', {
//   timeout: 8000,
//   cache: 'force-cache',
//   next: { revalidate: 60 }, // 60 saniye cache
// });

// 4. POST request
// const newPost = await fetchWithTimeout<Post>('/api/posts', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ title: 'New Post', content: 'Content' }),
//   timeout: 10000,
// });

// 5. JSON olmayan response html veya xml ucun
// const htmlContent = await fetchWithTimeout<string>('/api/html-content', {
//   parseResponse: true,
// });

// 6. Raw response
// const response = await fetchWithTimeout<Response>('/api/file', {
//   parseResponse: false, 
// });



// Error handling ile try catch
// try {
//   const data = await fetchWithTimeout<ApiResponse>('/api/data', {
//     timeout: 5000,
//     retries: 2,
//   });
//   console.log(data);
// } catch (error) {
//   if (error instanceof FetchTimeoutError) {
//     console.error('Request timed out');
//   } else if (error instanceof FetchHttpError) {
//     console.error(`HTTP Error: ${error.status} - ${error.statusText}`);
//     if (error.status === 404) {
      // notFound() aparacaq sehifeye

//     } else if (error.status >= 500) {
      // Server error handling
      //burdada ya notFOund veya new Error() ile error.tsx oxudula biler.
//     }
//   } else {
//     console.error('Unknown error:', error);
//   }
// }