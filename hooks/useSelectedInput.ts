import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useSelectedInput(
  field: string,
  defaultValue: string
): [string, Dispatch<SetStateAction<string>>] {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [checkedState, setCheckedState] = useState(
    () => searchParams.get(field)?.toString() || defaultValue
  );

  useEffect(
    function () {
      const params = new URLSearchParams(searchParams);
      if (checkedState === defaultValue) {
        params.delete(field);
      } else {
        params.set(field, checkedState);
      }
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [checkedState, field, defaultValue, pathname, replace, searchParams]
  );

  return [checkedState, setCheckedState];
}
