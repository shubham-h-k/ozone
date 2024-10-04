import React from "react";

function PromotionCode() {
  return (
    <div className="mt-8 pt-6 border-t border-t-borderColor">
      <h2 className="mb-4 font-bold">Promotional Code</h2>
      <p className="inline-block mb-2 px-2 py-1 text-xs text-[#4d4d4d] border border-dashed border-current">
        Try <strong>FLAT25</strong>
      </p>
      <form className="flex flex-wrap items-center justify-between gap-4">
        <label htmlFor="promotion-code" className="sr-only">
          Enter your promotion code
        </label>
        <input
          id="promotion-code"
          type="text"
          className="flex-1 p-3 text-sm placeholder:text-[#9ca3af] bg-primary bg-opacity-[0.04] border border-[#eaeaea] rounded-lg"
          placeholder="Enter your code"
        />
        <button className="px-6 py-2 font-bold text-white bg-primary rounded-full">
          Apply
        </button>
      </form>
    </div>
  );
}

export default PromotionCode;
