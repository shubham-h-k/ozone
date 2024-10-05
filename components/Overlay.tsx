import { ReactNode } from "react";

interface Props {
  isVisible: boolean;
  children: ReactNode;
}

export default function Overlay() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-[#d9d9d9] opacity-30"></div>
  );
}
