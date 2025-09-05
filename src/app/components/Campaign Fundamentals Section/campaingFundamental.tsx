"use client";
import React, { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";
import arrowDown  from  "../../../../public/assets/createPostIcon/chevron-down.svg"


type Props = {
  iconSrc:StaticImageData;
  title: string;
  description:string;
  isFoldable?: boolean,
  children:ReactNode
}

export default function CampaingFundamentalSection({
  iconSrc,
  title,
  description,
  isFoldable,
  children,
}: Props) {
  const [isShown, setIsShown] = useState(true);

  const showContent = () => {
    if (isFoldable) {
      setIsShown(!isShown);
    }
  };
  console.log(isShown, "show")

  return (
    <div className={`${isShown ? "h-auto" : "h-[130px]"} flex flex-col border-[1px] border-[#00000038] rounded-[8px] p-[30px] bg-white w-[84.6%]`}>
      <div className="flex flex-col mb-[26px] relative">
        <div className="flex items-center gap-[8px]">
          <Image src={iconSrc} alt="" />
          <p className="text-[20px] text-black font-sans-georgian font-semibold">
            {title}
          </p>
        </div>
        <p className="text-[#000000AD] text-[14.35px] font-sans-georgian font-normal w-[80%]">
          {description}
        </p>

        {isFoldable ? (
          <Image
            onClick={showContent}
            className={`absolute right-0 top-3  cursor-pointer ${isShown ? "" : "rotate-180"}`}
            src={arrowDown}
            alt=""
          />
        ) : null}
      </div>
      {isFoldable ? (isShown ? children : null) : children}
    </div>
  );
}
