"use client";

import useSelectedInput from "@/hooks/useSelectedInput";
import { sortData } from "@/constants";

export default function SortMobile() {
  const [sort, setSort] = useSelectedInput("sort", "none");
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();
  // const [sort, setSort] = useState(
  //   () => searchParams.get("sort")?.toString() || "none"
  // );

  // useEffect(
  //   function () {
  //     const params = new URLSearchParams(searchParams);
  //     if (sort === "none") {
  //       params.delete("sort");
  //     } else {
  //       params.set("sort", sort);
  //     }
  //     replace(`${pathname}?${params.toString()}`, { scroll: false });
  //   },
  //   [sort, pathname, replace, searchParams]
  // );

  return (
    <form className="p-6 border border-[#d9d9d9] rounded">
      <fieldset>
        <legend className="mb-4 font-semibold">Sort By</legend>

        <div className="flex items-center gap-3 flex-wrap">
          {sortData.map((el) => (
            <div key={el.id} className="relative flex items-center gap-3">
              <input
                type="radio"
                id={el.id}
                name="sort"
                value={el.value}
                checked={sort === el.value}
                onChange={(e) => setSort(e.target.value)}
                className="peer appearance-none w-5 h-5 border border-[#4d4d4d] rounded-full cursor-pointer"
              />

              <div className="pointer-events-none absolute left-1 w-3 h-3 rounded-full peer-checked:bg-[#4d4d4d] cursor-pointer"></div>

              <label
                htmlFor={el.id}
                className="text-sm font-semibold text-[#4d4d4d]"
              >
                {el.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  );
}
