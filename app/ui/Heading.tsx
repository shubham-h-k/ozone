import { ReactNode } from "react";

interface Props {
  as: string;
  children: ReactNode;
}

export default function Heading({ as, children }: Props) {
  if (as === "h2")
    return (
      <h2 className="max-w-[30rem] md:max-w-[40rem] mx-auto text-xl md:text-[2rem] font-bold md:leading-10 text-center">
        {children}
      </h2>
    );
}
