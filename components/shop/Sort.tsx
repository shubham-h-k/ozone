"use client";

import { IoChevronDown } from "react-icons/io5";
import { sortData } from "@/constants";

import useSelectedInput from "@/hooks/useSelectedInput";

export default function Sort() {
  const [sort, setSort] = useSelectedInput("sort", "none");

  return (
    <form className="relative flex items-center gap-3">
      <IoChevronDown className="absolute right-2 top-1/2 -translate-y-1/2" />
      <label htmlFor="product-sort" className="font-semibold">
        Sort By:
      </label>

      <select
        name="options"
        id="product-sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="appearance-none pl-4 pr-8 py-3 text-sm font-semibold bg-transparent border border-[#d9d9d9] rounded-full"
      >
        <option value="none">Choose option</option>
        {sortData.map((el) => (
          <option key={el.id} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    </form>
  );
}
