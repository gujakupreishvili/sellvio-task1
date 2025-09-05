import Image, { StaticImageData } from "next/image";
import React from "react";
type Props = {
  Img:StaticImageData
  title:string
  description:string
};

export default function PostTitle({Img, title, description}:Props) {
  return (
    <div className="flex flex-col mb-[26px]">
      <div className="flex items-center gap-[8px]">
        <Image src={Img} alt="" />
        <p className="text-[20px] text-black font-sans-georgian font-semibold">{title}</p>
      </div>
      <p className="text-[#000000AD] text-[14.35px] font-sans-georgian font-normal">{description}</p>
    </div>
  );
}
