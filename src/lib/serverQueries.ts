import { ProductDto } from "@/modules/Products/model";
import { serverApi } from "./apiClient";

export interface ParallelQuery<K extends string, T = any> {
  key: K;
  endpoint: string;
  options?: any;
  transform?: (data: any) => T;
}

export type QueryResult<TData> =
  | {
      success: true;
      data: TData;
      error?: undefined;
    }
  | {
      success: false;
      data?: undefined;
      error: string;
    };

export type FetchParallelReturn<
  TQueries extends readonly ParallelQuery<string, any>[]
> = {
  results: {
    [Q in TQueries[number] as Q["key"]]: QueryResult<
      Q extends ParallelQuery<any, infer R> ? R : never
    >;
  };
  data: {
    [Q in TQueries[number] as Q["key"]]?: Q extends ParallelQuery<any, infer R>
      ? R
      : never;
  };
  errors: Record<string, string>;
  hasErrors: boolean;
};

export async function fetchParallelQueries<
  TQueries extends readonly ParallelQuery<string, any>[]
>(queries: TQueries): Promise<FetchParallelReturn<TQueries>> {
  const promises = queries.map(
    async ({ key, endpoint, options, transform }) => {
      try {
        const raw = await serverApi.get(endpoint, options);
        const data = transform ? transform(raw) : raw;
        return { key, result: { success: true, data } as QueryResult<any> };
      } catch (error) {
        return {
          key,
          result: {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
          } as QueryResult<any>,
        };
      }
    }
  );

  const settled = await Promise.all(promises);

  const results = {} as FetchParallelReturn<TQueries>["results"];
  const data: Record<string, any> = {};
  const errors: Record<string, string> = {};

  settled.forEach(({ key, result }) => {
    (results as any)[key] = result;

    if (result.success) {
      data[key] = result.data;
    } else {
      errors[key] = result.error;
    }
  });

  return {
    results,
    data: data as any,
    errors,
    hasErrors: Object.keys(errors).length > 0,
  };
}

export async function fetchProducts(languageId: number) {
  return fetchParallelQueries([
    {
      key: "products",
      endpoint: "/products?languageId=" + languageId,
      transform: (res: ProductDto[]) => res,
    
    },
    
  ] as const);
}




