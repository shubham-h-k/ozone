import { RefObject, useEffect, useRef } from "react";

export default function useDetectOutsideClick(
  handler: () => void,
  listenCapture: boolean = true
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(
    function () {
      function handleClick(e: Event) {
        if (ref.current && !ref.current.contains(e.target as Element))
          handler();
      }
      document.addEventListener("click", handleClick, listenCapture);
      return () =>
        document.removeEventListener("click", handleClick, listenCapture);
    },
    [handler, listenCapture]
  );

  return ref;
}
