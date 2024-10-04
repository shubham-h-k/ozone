"use client";

import { IoChevronDown } from "react-icons/io5";
import { sortData } from "@/constants";

import useSelectedInput from "@/hooks/useSelectedInput";

export default function Sort() {
  const [sort, setSort] = useSelectedInput("sort", "none");

  return (
    <form className="relative flex items-center justify-end gap-2 lg:gap-3">
      <IoChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
      <label
        htmlFor="product-sort"
        className="text-sm lg:text-base font-medium lg:font-semibold"
      >
        Sort By:
      </label>

      <select
        name="options"
        id="product-sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="appearance-none pl-3 pr-4 py-1 lg:pl-4 lg:pr-8 lg:py-3 text-xs lg:text-sm lg:font-semibold bg-transparent border border-[#d9d9d9] rounded-full cursor-pointer"
      >
        <option value="none">None</option>
        {sortData.map((el) => (
          <option key={el.id} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    </form>
  );
}
