"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  field: string;
  label: string;
  data: string[];
}

export default function FilterCheckbox({ field, label, data }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [checkedState, setCheckedState] = useState(() => {
    const params = searchParams.get(field)?.toString().split(",") || [];

    return data.map((el) => {
      if (params.includes(el.toLowerCase().replaceAll(" ", "-"))) {
        return { name: el, checked: true };
      } else {
        return { name: el, checked: false };
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

      if (query) params.set(field, query);
      else params.delete(field);

      replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [checkedState, pathname, searchParams, replace, field]
  );

  return (
    <form className="p-6 border border-[#d9d9d9] rounded">
      <fieldset>
        <legend className="font-semibold">{label}</legend>
        <div className="flex flex-col gap-3 mt-4">
          {data.map((el, index) => (
            <div key={el} className="flex items-center gap-[0.625rem]">
              <input
                type="checkbox"
                id={el}
                className="w-[1.125rem] h-[1.125rem]"
                checked={checkedState[index].checked}
                onChange={(e) => handleOnChange(e, index)}
              />
              <label
                htmlFor={el}
                className="text-sm font-semibold text-[#4d4d4d]"
              >
                {el}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  );
}
