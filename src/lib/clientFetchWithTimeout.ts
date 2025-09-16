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
        
        cache: fetchOptions.cache || 'no-cache',
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