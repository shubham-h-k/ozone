import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export default function HorizontalRule({ className }: Props) {
  return (
    <hr
      className={(twMerge("w-full border-t border-t-[#d9d9d9]"), className)}
    />
  );
}
