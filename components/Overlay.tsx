import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  isVisible: boolean;
  children: ReactNode;
}

export default function Overlay({ isVisible, children }: Props) {
  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#d9d9d9] opacity-30",
          {
            hidden: !isVisible,
          }
        )}
      ></div>
      {children}
    </>
  );
}
