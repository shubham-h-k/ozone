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
  const [query, setQuery] = useState<string>(
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
  }, 300);

  const handleClearSearch = function (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    params.delete("query");
    replace(`${pathname}?${params.toString()}`);
    setQuery("");
  };

  return (
    <form
      role="search"
      className="relative md:col-start-[-3] md:row-start-1 md:w-60 md:justify-self-end"
    >
      <FaMagnifyingGlass className="absolute left-2 top-1/2 -translate-y-[45%] h-[14px] w-[14px] text-primary" />

      <label htmlFor="search" className="sr-only">
        Search products
      </label>

      <input
        type="search"
        id="search"
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        value={query}
        className="[&::-webkit-search-cancel-button]:hidden w-full rounded-full bg-primary-opacity py-2 pl-10 pr-8 placeholder:text-sm"
      />

      <button
        onClick={(e) => handleClearSearch(e)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 cursor-pointer"
      >
        <span className="sr-only">Clear search input</span>
        <IoClose className="h-4 w-4 text-primary" />
      </button>
    </form>
  );
}
