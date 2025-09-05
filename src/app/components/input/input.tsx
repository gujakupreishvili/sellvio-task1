"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Switcher from "../switcher/switcher";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiDeleteBin7Fill } from "react-icons/ri";

type InputT = {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  labelStyle?: string;
  variant?: string;
  iconImg?: StaticImageData;
  width?: string;
  text?: string;
  accept?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputVariants = {
  CURRENCY: "currency",
  TEXTAREA: "textarea",
  DROPDOWN: "dropdown",
  FILE: "file",
};

export default function Input({
  label,
  placeholder,
  type = "text",
  className = "",
  labelStyle = "",
  iconImg,
  variant,
  width,
  text,
  accept,
  value,
  onChange,
}: InputT) {

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);

  useEffect(() => {
    if (variant === InputVariants.FILE && label) {
      const savedPreview = localStorage.getItem(`${label}-preview`);
      const savedType = localStorage.getItem(`${label}-type`);
      if (savedPreview) setFilePreview(savedPreview);
      if (savedType) setFileType(savedType);
    }
  }, [label, variant]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileType(file.type);
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setFilePreview(result);
      if (label) {
        localStorage.setItem(`${label}-preview`, result);
        localStorage.setItem(`${label}-type`, file.type);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClearFile = () => {
    setFilePreview(null);
    setFileType(null);
    if (label) {
      localStorage.removeItem(`${label}-preview`);
      localStorage.removeItem(`${label}-type`);
    }
  };

  switch (variant) {
    case InputVariants.CURRENCY:
      return (
        <div className="flex flex-col gap-2 w-full">
          {label && (
            <label className={`${labelStyle} text-[18px] font-bold text-black`}>
              {label}
            </label>
          )}
          <div className="relative w-full">
            {iconImg && <Image src={iconImg} alt="Icon" className="absolute left-4 top-4" />}
            <input
              type={isPasswordVisible ? "number" : "password"}
              className={`${className} w-full`}
              placeholder={isPasswordVisible ? placeholder : "*****"}
            />
            <div className="flex w-full justify-end mt-2 items-center gap-2">
              <p className="text-[16px] font-bold text-[#000000D4]">
                დამალე ბიუჯეტი შემქნელებისთვის
              </p>
              <Switcher initial={false} onToggle={(state) => setIsPasswordVisible(!state)} />
            </div>
          </div>
        </div>
      );

    case InputVariants.TEXTAREA:
      return (
        <div className="flex flex-col gap-2 w-full">
          {label && (
            <label className={`${labelStyle} text-[18px] font-bold text-black`}>
              {label}
            </label>
          )}
          <textarea className={`${className} w-full resize-none`} placeholder={placeholder}></textarea>
        </div>
      );

    case InputVariants.DROPDOWN:
      const options = [
        "Cost Per View",
        "Cost Per Reach",
        "Cost Per Engagement",
        "Cost Per Click",
      ];
      return (
        <div className="flex flex-col gap-2 w-full relative">
          {label && (
            <label className={`${labelStyle} text-[18px] font-bold text-black`}>
              {label}
            </label>
          )}
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            onClick={() => setIsOpen(!isOpen)}
            className={`${className} w-full appearance-none`}
          >
            <option value="" disabled>
              აირჩიეთ ტიპი
            </option>
            {options.map((res) => (
              <option key={res} value={res}>
                {res}
              </option>
            ))}
          </select>
          {isOpen ? (
            <IoIosArrowUp className="absolute text-[#0000007A] text-[20px] top-[55px] right-[18px] duration-700" />
          ) : (
            <IoIosArrowDown className="absolute text-[#0000007A] text-[20px] top-[55px] right-[18px] duration-200" />
          )}
        </div>
      );

    case InputVariants.FILE:
      return (
        <div
          className={`border-dashed border-[1px] border-[#E3E8EF] rounded-[8px] flex flex-col items-center justify-center py-[31px] w-full ${className}`}
          style={{ width: width ?? "48%" }}
        >
          {filePreview ? (
            fileType?.startsWith("image/") ? (
              <div className="relative">
                <Image
                  src={filePreview}
                  width={100}
                  height={100}
                  alt="selected image"
                  className="w-[40px] h-[40px] mb-[8px] object-cover rounded-[8px]"
                />
                <RiDeleteBin7Fill
                  className="text-red-400 text-[18px] absolute right-[-8px] top-[-10px] cursor-pointer"
                  onClick={handleClearFile}
                />
              </div>
            ) : fileType?.startsWith("video/") ? (
              <div className="relative">
                <video
                  src={filePreview}
                  className="w-[40px] h-[40px] mb-[8px] rounded-[8px] object-cover"
                  controls
                />
                <RiDeleteBin7Fill
                  className="text-red-400 text-[18px] absolute right-[-8px] top-[-10px] cursor-pointer"
                  onClick={handleClearFile}
                />
              </div>
            ) : null
          ) : iconImg ? (
            <Image src={iconImg} alt="icon" className="mb-2" width={40} height={40} />
          ) : null}

          {label && (
            <label className={`${labelStyle} text-[16px] font-bold text-[#000000A3] mb-[16px] mt-[10px]`}>
              {label}
            </label>
          )}

          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
            id={`file-input-${label}`}
          />
          <label
            htmlFor={`file-input-${label}`}
            className="cursor-pointer bg-[#0866FF] px-[60px] py-[12px] rounded-md text-white font-medium"
          >
            {text}
          </label>
        </div>
      );

    default:
      return (
        <div className="flex flex-col gap-2" style={{ width: width ?? "100%" }}>
          {label && <label className={`${labelStyle} text-[18px] font-bold text-black`}>{label}</label>}
          <input type={type} placeholder={placeholder} className={`${className} w-full`} value={value} onChange={onChange} />
        </div>
      );
  }
}
