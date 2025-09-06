import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  title: string;
  description: string;
  Img: StaticImageData;
  isSelected?: boolean;
  onClick?: (title: string) => void; 
};

export default function Creator({ title, description, Img, isSelected = false, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.(title)}
      className={`
        flex items-start border-[1px] border-[#0000001F] rounded-[8px] 
        shadow-[0px_0px_9.8px_0px_#00000014] w-[48%] px-[30px] pt-[16px] pb-[34px] gap-[17px]
        cursor-pointer transition-colors  xl:h-[118px]       ${isSelected ? "bg-[#0866FF20]" : "bg-[#0866FF05]"}
      `}
    >
      <div className="min-w-[48px] h-[48px] bg-[#0866FF0F] rounded-[8px] flex items-center justify-center">
        <Image src={Img} alt="" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[18px] font-sans-georgian font-bold text-black">{title}</p>
        <p className="text-[#000000AD] text-[14.35px] font-sans-georgian font-normal ">{description}</p>
      </div>
    </div>
  );
}
