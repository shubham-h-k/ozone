"use client";

import { MdOutlineCancel } from "react-icons/md";

import useSelectedInput from "@/hooks/useSelectedInput";

const colors = [
  { color: "#FB5252", value: "red", id: "color_1" },
  { color: "#FCA120", value: "orange", id: "color_2" },
  { color: "#FFC0CB", value: "pink", id: "color_3" },
  { color: "#FCDB7E", value: "yellow", id: "color_4" },
  { color: "#4AD295", value: "green", id: "color_5" },
  { color: "#92CDFA", value: "light-sky-blue", id: "color_6" },
  { color: "#1273EB", value: "blue", id: "color_7" },
  { color: "#8080F1", value: "purple", id: "color_8" },
  { color: "#1D262D", value: "black", id: "color_9" },
  { color: "#BAC8D3", value: "grey", id: "color_10" },
];

export default function ColorSelector() {
  const [checkedColor, setCheckedColor] = useSelectedInput("color", "all");

  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();
  // const [checkedColor, setCheckedColor] = useState(
  //   () => searchParams.get("color")?.toString() || "all"
  // );

  // useEffect(
  //   function () {
  //     const params = new URLSearchParams(searchParams);
  //     if (checkedColor === "all") {
  //       params.delete("color");
  //     } else {
  //       params.set("color", checkedColor);
  //     }
  //     replace(`${pathname}?${params.toString()}`, { scroll: false });
  //   },
  //   [checkedColor, pathname, replace, searchParams]
  // );

  return (
    <div className="p-6 border-b blg:border border-[#d9d9d9] lg:rounded">
      <fieldset>
        <legend className="mb-4 font-semibold">Colors:</legend>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <MdOutlineCancel className="absolute top-[-2px] left-[-2px] -z-10 w-6 h-6 text-[#d9d9d9]" />
            <input
              type="radio"
              id="color_0"
              name="color"
              value="all"
              checked={checkedColor === "all"}
              onChange={(e) => setCheckedColor(e.target.value)}
              className="appearance-none w-5 h-5 border rounded-full cursor-pointer hover:ring-1 hover:ring-[#1273EB] hover:ring-offset-2"
            />
            <label htmlFor="color_0" className="sr-only">
              none
            </label>
          </div>

          {colors.map((color) => (
            <div key={color.id}>
              <input
                type="radio"
                id={color.id}
                name="color"
                value={color.value}
                checked={checkedColor === color.value}
                onChange={(e) => setCheckedColor(e.target.value)}
                className="appearance-none w-5 h-5 rounded-full cursor-pointer  checked:ring-1 checked:ring-current checked:ring-offset-2 hover:ring-1 hover:ring-current hover:ring-offset-2"
                style={{
                  color: `${color.color}`,
                  backgroundColor: `${color.color}`,
                }}
              />

              <label htmlFor={color.id} className="sr-only">
                {color.value}
              </label>
            </div>
          ))}
          <div>
            <input
              type="radio"
              id="color_11"
              name="color"
              value="white"
              checked={checkedColor === "white"}
              onChange={(e) => setCheckedColor(e.target.value)}
              className="appearance-none w-5 h-5 bg-white border border-[#d9d9d9]  rounded-full cursor-pointer checked:ring-1 checked:ring-[#1273EB]  checked:ring-offset-2 hover:ring-1 hover:ring-[#1273EB]  hover:ring-offset-2"
            />
            <label htmlFor="color_11" className="sr-only">
              white
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
