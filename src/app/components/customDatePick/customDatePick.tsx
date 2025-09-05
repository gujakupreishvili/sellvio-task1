"use client";
import React, { useState, useRef,  } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { IoIosArrowDown } from "react-icons/io";

export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const today = new Date();

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;

    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setSelectedDate(date);
    setDaysLeft(diffDays > 0 ? diffDays : null);
    setOpen(false); 
  };

  return (
    <div className="flex flex-col gap-2 w-[50%] relative" ref={wrapperRef}>
      <label className="text-[18px] font-sans-georgian font-bold text-black">კამპანიის ხანგრძლივობა (დღეები)</label>

      <div
        className="relative cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <input
          type="text"
          readOnly
          className="h-[58px] border-[1px] rounded-[8px] border-[#E3E8EF] px-[18px] outline-none w-full placeholder:text-[#000000D40] placeholder:text-[18px] placeholder:font-sans-georgian placeholder:font-bold"
          value={daysLeft !== null ? `${daysLeft} დღე` : ""}
          placeholder="მაგ: 1 დღე"
        />
        <IoIosArrowDown  className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-200 text-[#0000007A] text-[18px] ${
            open ? "rotate-180" : ""
          }`} />
      </div>

      {open && (
        <div className="absolute z-50 mt-1 bg-white shadow-lg rounded">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            disabled={{ before: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) }}
          />
        </div>
      )}
    </div>
  );
}
