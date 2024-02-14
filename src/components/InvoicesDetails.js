import React from "react";
import { TiPlus } from "react-icons/ti";

export default function InvoicesDetails() {
  return (
    <div className="flex items-start justify-between">
      {/* Invoice header */}
      <div>
        <h1 className="text-2xl font-bold ">Invoices</h1>
        <p className="text-sm">There are 7 total invoices</p>
      </div>
      {/* Buttons */}
      <div className="">
        <button className="flex items-center p-2 bg-[#7C5DF9] text-white font-bold rounded-full gap-2">
          <TiPlus className="bg-white text-[#7656f8] w-10 h-10 rounded-full" />
          New Invoice
        </button>
      </div>
    </div>
  );
}
