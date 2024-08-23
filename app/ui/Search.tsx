"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { IoClose } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [query, setQuery] = useState(
    () => searchParams.get("query")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback(function (term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 600);

  const handleClearSearch = function (e: Event) {
    e.preventDefault();
    if (e.target === null) {
      throw new Error("target can not be null");
    }
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    replace(`${pathname}?${params.toString()}`);
    setQuery("");
  };

  return (
    <form className="relative md:col-start-[-3] md:row-start-1 md:w-60 md:justify-self-end">
      <FaMagnifyingGlass className="absolute left-2 top-1/2 -translate-y-[45%] h-[14px] w-[14px] text-primary" />

      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <input
        id="search"
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        value={query}
        className="w-full rounded-full bg-primary-opacity py-2 pl-10 pr-8 placeholder:text-sm"
      />

      <button
        onClick={(e) => handleClearSearch(e)}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <IoClose className="h-4 w-4 text-primary" />
      </button>
    </form>
  );
}
