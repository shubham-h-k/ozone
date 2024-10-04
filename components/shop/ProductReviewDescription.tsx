"use client";

import { useState } from "react";

import { truncateTextByWords } from "@/lib/utils";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function ProductReviewDescription({ text }: { text: string }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const maxWordsInCollapsedState = 100;
  const isShowMoreButtonVisible =
    text.split(" ").length > maxWordsInCollapsedState;

  const textToShow = isCollapsed
    ? truncateTextByWords(text, maxWordsInCollapsedState)
    : text;

  return (
    <>
      <p className="mt-1 text-sm">
        {textToShow.split("\n\n").map((el) => (
          <span key={el}>
            {el}
            <br />
            <br />
          </span>
        ))}
      </p>
      {isShowMoreButtonVisible && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-[2px] [&:hover_span]:text-[#c45500] [&:hover_span]:underline"
        >
          {isCollapsed ? (
            <FaAngleDown className="font-bold" />
          ) : (
            <FaAngleUp className="font-bold" />
          )}
          <span className="text-sm text-[#007195] font-semibold">
            {isCollapsed ? "Read more" : "Read less"}
          </span>
        </button>
      )}
    </>
  );
}

export default ProductReviewDescription;
