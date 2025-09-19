// import { serverApi } from "./apiClient";


// export interface IStatic {
//   data: Daum[]
//   totalCount: number
// }

// export interface Daum {
//   id: number
//   type: string
//   text: string
// }

// export const getStaticContent = () => {
//   return serverApi.get<IStatic>("/content", {
//     cache: "force-cache",
//     next: {
//       revalidate: 3600,
//     },
//     timeout: 20000,
//     retries: 2,
//     retryDelay: 1000,
//   });
// };
