import React from "react";
import { FaFilter } from "react-icons/fa";

interface Props {
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonShowFilters({ setShowFilters }: Props) {
  return (
    <>
      <button
        onClick={() => setShowFilters(true)}
        className="lg:hidden flex items-center gap-2 px-3 py-1 text-sm font-medium border border-[#d9d9d9] rounded-full"
      >
        <span>Filters</span>
        <FaFilter className="w-3 h-3" />
      </button>
    </>
  );
}

export default ButtonShowFilters;
