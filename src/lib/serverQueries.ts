// import { FaqResponse, HomeSliderResponse, homeUpcomingEventsResponse, PartnersResponse } from "@/modules/Home/model";
// import { IOurHistorySegmentResponse } from "@/modules/OurHistory/models";
// import { HighlightEvent } from "@/shared/components/Highlights/models";
// import { TeamsApiResponse, VideoTourApiResponse } from "@/shared/components/VirtualTour/model";
// import { serverApi } from "./apiClient";
// import { IStatic } from "./staticContent";

// export interface ParallelQuery<K extends string, T = any> {
//   key: K;
//   endpoint: string;
//   options?: any;
//   transform?: (data: any) => T;
// }

// export type QueryResult<TData> =
//   | {
//       success: true;
//       data: TData;
//       error?: undefined;
//     }
//   | {
//       success: false;
//       data?: undefined;
//       error: string;
//     };

// export type FetchParallelReturn<
//   TQueries extends readonly ParallelQuery<string, any>[]
// > = {
//   results: {
//     [Q in TQueries[number] as Q["key"]]: QueryResult<
//       Q extends ParallelQuery<any, infer R> ? R : never
//     >;
//   };
//   data: {
//     [Q in TQueries[number] as Q["key"]]?: Q extends ParallelQuery<any, infer R>
//       ? R
//       : never;
//   };
//   errors: Record<string, string>;
//   hasErrors: boolean;
// };

// export async function fetchParallelQueries<
//   TQueries extends readonly ParallelQuery<string, any>[]
// >(queries: TQueries): Promise<FetchParallelReturn<TQueries>> {
//   const promises = queries.map(
//     async ({ key, endpoint, options, transform }) => {
//       try {
//         const raw = await serverApi.get(endpoint, options);
//         const data = transform ? transform(raw) : raw;
//         return { key, result: { success: true, data } as QueryResult<any> };
//       } catch (error) {
//         return {
//           key,
//           result: {
//             success: false,
//             error: error instanceof Error ? error.message : "Unknown error",
//           } as QueryResult<any>,
//         };
//       }
//     }
//   );

//   const settled = await Promise.all(promises);

//   const results = {} as FetchParallelReturn<TQueries>["results"];
//   const data: Record<string, any> = {};
//   const errors: Record<string, string> = {};

//   settled.forEach(({ key, result }) => {
//     (results as any)[key] = result;

//     if (result.success) {
//       data[key] = result.data;
//     } else {
//       errors[key] = result.error;
//     }
//   });

//   return {
//     results,
//     data: data as any,
//     errors,
//     hasErrors: Object.keys(errors).length > 0,
//   };
// }

// export async function fetchExploreAndVideoTours() {
//   return fetchParallelQueries([
//     {
//       key: "explore",
//       endpoint: "/explore",
//       transform: (res: IOurHistorySegmentResponse) => res,
    
//     },
//     {
//       key: "videoTours",
//       endpoint: "/videoTours",
//       transform: (res: VideoTourApiResponse) => res.data,
//     },
//     {
//       key: "teams",
//       endpoint: "/teams",
//       transform: (res: TeamsApiResponse) => res.data,
//     },
//   ] as const);
// }

// export async function fetchHomePage() {
//   return fetchParallelQueries([
//     {
//       key: "homeSlider",
//       endpoint: "/homeSlider",
//       transform: (res: HomeSliderResponse) => res.data,
//     },
//     {
//       key:"homeUpcomingEvents",
//       endpoint:"/homeUpcomingEvents",
//       transform: (res:homeUpcomingEventsResponse) => res.data,
//     },
//     {
//       key:"faq",
//       endpoint:"/faq/item/filter?skip=0&take=10",
//       transform: (res:FaqResponse) => res.data,
//     },
//      {
//       key:"partners",
//       endpoint:"partners",
//       transform: (res:PartnersResponse) => res.data,
//     },
//     {
//       key:"staticContent",
//       endpoint:'content',
//       transform:(res:IStatic)=>res.data
//     }
    
//   ] as const);
// }
// export async function fetchHighlightInner({id}:{id?:string}) {

//   return fetchParallelQueries([
//     {
//       key: "event",
//         endpoint: `events/byId?Id=${id}`,
//       transform: (res: HighlightEvent) => res,
//     },
//     {
//       key:"partners",
//       endpoint:"partners",
//       transform: (res:PartnersResponse) => res.data,
//     }
    
    
//   ] as const);
// }


