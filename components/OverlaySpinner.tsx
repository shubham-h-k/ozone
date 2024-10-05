import clsx from "clsx";
import Spinner from "@/components/Spinner";
import { createPortal } from "react-dom";

// createPortal(<OverlaySpinner />, document.body)
function OverlaySpinner() {
  return (
    <>
      {createPortal(
        <>
          <div
            className={clsx(
              "fixed top-0 left-0 right-0 bottom-0 z-[10] bg-[#d9d9d9] opacity-30"
            )}
          ></div>
          <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  z-50 p-4 border bg-white">
            <Spinner width={100} height={100} borderWidth={10} />
          </div>
        </>,
        document.body
      )}
    </>
  );
}

export default OverlaySpinner;
