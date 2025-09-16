import { matchedUrls } from "@/shared/layout/Header/data";

export const isUrlMatched = (pathname: string): boolean => {
  const cleanPathname = (pathname?.slice(3) || "").toLowerCase();
  
  return matchedUrls.some((url) => {
    const cleanUrl = url.toLowerCase();
    
    if (cleanUrl.includes(':')) {
      const basePath = cleanUrl.split(':')[0];
      return cleanPathname.startsWith(basePath);
    }
    
    return cleanUrl === cleanPathname;
  });
};