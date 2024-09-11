"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  "Accessories",
  "Digital Products",
  "Network Hardware",
  "Power Equipment",
  "Printers",
  "Services",
];

export default function CategorySelector() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [checkedState, setCheckedState] = useState(() => {
    const params =
      searchParams.get("productCategory")?.toString().split(",") || [];

    return categories.map((category) => {
      if (params.includes(category.toLowerCase().replaceAll(" ", "-"))) {
        return { name: category, checked: true };
      } else {
        return { name: category, checked: false };
      }
    });
  });

  function handleOnChange(
    e: React.ChangeEvent<HTMLInputElement>,
    position: number
  ) {
    setCheckedState((checkedState) =>
      checkedState.map((item, index) =>
        index === position ? { ...item, checked: e.target.checked } : item
      )
    );
  }

  useEffect(
    function () {
      const params = new URLSearchParams(searchParams);
      const query = checkedState
        .filter((state) => state.checked)
        .map((state) => state.name.toLowerCase().replaceAll(" ", "-"))
        .join(",");

      if (query) params.set("productCategory", query);
      else params.delete("productCategory");

      replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [checkedState, pathname, searchParams, replace]
  );

  return (
    <form className="p-6 border border-[#d9d9d9] rounded">
      <fieldset>
        <legend className="font-semibold">Categories</legend>
        <div className="flex flex-col gap-3 mt-4">
          {categories.map((category, index) => (
            <div key={category} className="flex items-center gap-[0.625rem]">
              <input
                type="checkbox"
                id={category}
                className="w-[1.125rem] h-[1.125rem]"
                checked={checkedState[index].checked}
                onChange={(e) => handleOnChange(e, index)}
              />
              <label
                htmlFor={category}
                className="text-sm font-semibold text-[#4d4d4d]"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  );
}
