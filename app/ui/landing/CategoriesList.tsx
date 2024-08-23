"use client";

import { useState } from "react";

export default function CategoriesList() {
  const [selected, setSelected] = useState("all");

  return (
    <ul className="flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-none ">
      <li>
        <button
          onClick={() => setSelected("all")}
          className={`pb-1 text-sm font-bold border-b-2 ${
            selected === "all" ? "border-current" : "border-transparent"
          }`}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => setSelected("digital")}
          className={`pb-1 text-sm font-bold border-b-2  ${
            selected === "digital" ? "border-current" : "border-transparent"
          }`}
        >
          Digital Products
        </button>
      </li>
      <li>
        <button
          onClick={() => setSelected("network")}
          className={`pb-1 text-sm font-bold border-b-2 ${
            selected === "network" ? "border-current" : "border-transparent"
          }`}
        >
          Network Hardware
        </button>
      </li>
      <li>
        <button
          onClick={() => setSelected("power")}
          className={`pb-1 text-sm font-bold border-b-2 ${
            selected === "power" ? "border-current" : "border-transparent"
          }`}
        >
          Power Equiment
        </button>
      </li>
      <li>
        <button
          onClick={() => setSelected("printers")}
          className={`pb-1 text-sm font-bold border-b-2 ${
            selected === "printers" ? "border-current" : "border-transparent"
          }`}
        >
          Printers
        </button>
      </li>
      <li>
        <button
          onClick={() => setSelected("services")}
          className={`pb-1 text-sm font-bold border-b-2 ${
            selected === "services" ? "border-current" : "border-transparent"
          }`}
        >
          Services
        </button>
      </li>
    </ul>
  );
}
