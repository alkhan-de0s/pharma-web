"use client";

import { SearchCheckIcon } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) params.set("name", term);
    else params.delete("name");
    replace(`${pathname}?${params.toString()}`);
  }

  return (
   
    <div className="relative flex flex-1 flex-shrink-0 group">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        name="search"
        className="peer block w-full rounded-xl border-2 border-gray-200 bg-gradient-to-r from-gray-50 to-white py-3 pl-12 pr-4 text-sm font-medium text-gray-800 shadow-sm outline-none placeholder:text-gray-400 transition-all duration-300 ease-in-out hover:border-gray-300 hover:shadow-md focus:border-blue-500 focus:bg-white focus:shadow-lg focus:ring-4 focus:ring-blue-100"
        placeholder={placeholder}
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />

      <SearchCheckIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out peer-focus:text-blue-500 peer-focus:scale-110 group-hover:text-gray-600" />

      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 peer-focus:opacity-100 pointer-events-none bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl -z-10"></div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
        <div className="h-4 w-4 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin"></div>
      </div>
    </div>
  );
}
