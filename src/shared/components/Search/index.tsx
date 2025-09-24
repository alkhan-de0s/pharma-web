"use client";
import { SearchCheckIcon } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const initialSearch = searchParams.get("search") ?? "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);


  const updateURL = useCallback(
    debounce((term: string) => {
      const newParams = new URLSearchParams(searchParams);

      if (term) {
        newParams.set("search", term);
      } else {
        newParams.delete("search");
      }

      replace(`${pathname}?${newParams.toString()}`);
    }, 500), 
    [pathname, replace, searchParams]
  );


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchTerm(value);
    updateURL(value);
  }


  useEffect(() => {
    const currentSearch = searchParams.get("search") ?? "";
    setSearchTerm(currentSearch);
  }, [searchParams]);

  return (
    <div className="relative flex flex-1 flex-shrink-0 group">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        name="search"
        className="peer block w-full rounded-xl border-2 border-gray-200 bg-gradient-to-r from-gray-50 to-white py-3 pl-12 pr-4 text-sm font-medium text-gray-800 shadow-sm outline-none placeholder:text-gray-400 transition-all duration-300 ease-in-out hover:border-gray-300 hover:shadow-md focus:border-blue-500 focus:bg-white focus:shadow-lg focus:ring-4 focus:ring-blue-100"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        autoComplete="off"
      />

      <SearchCheckIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out peer-focus:text-blue-500 peer-focus:scale-110 group-hover:text-gray-600" />

      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 peer-focus:opacity-100 pointer-events-none bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl -z-10"></div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
        <div className="h-4 w-4 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin"></div>
      </div>
    </div>
  );
}
