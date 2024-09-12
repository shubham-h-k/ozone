import React from "react";

interface Props {
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonShowFilters({ setShowFilters }: Props) {
  return (
    <>
      <button
        onClick={() => {
          console.log("click");
          setShowFilters(true);
        }}
        className="lg:hidden px-3 py-1 text-sm font-medium border border-[#d9d9d9] rounded-full"
      >
        Filters
      </button>
    </>
  );
}

export default ButtonShowFilters;
