import React from "react";

interface Props {
  children: React.ReactNode;
}

function ButtonUpdateCount({ children }: Props) {
  return (
    <button className="flex items-center justify-center duration-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:bg-white-hover border border-[#EAEAEA] rounded-md sm:rounded-lg">
      {children}
    </button>
  );
}

export default ButtonUpdateCount;
