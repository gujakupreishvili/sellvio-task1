import React from "react";
import users from "../../../../public/assets/postIcon/users-svgrepo-com 1.svg";
import eye from "../../../../public/assets/postIcon/eye.svg";
import diagrama from "../../../../public/assets/postIcon/diagram.svg";
import Image from "next/image";
import Button from "../button/button";
type Props ={
  postType:string,
  current:number,
  total:number
}

export default function Post({postType, current, total}:Props) {

  const percentage = Math.min(100, (current / total) * 100);
  return (
    <div className="w-[32.1%] border-[1px] border-[#00000036] rounded-[8px] max-w-[446px] min-w-[300px]  ">
      <div className="bg-[linear-gradient(180deg,#636363_0%,#999999_100%)] h-[244px] w-full rounded-tl-[8px] rounded-tr-[8px] relative">
        <p className="absolute bottom-[22px] left-[15px] text-white font-bold font-sans-georgian text-[18px]">
          ვიდეოს სახელწოდება
        </p>
        <p className={`px-[10px] py-[6px] rounded-[12px] ${postType ==="აქტიური" ? "bg-[#00D5404F]" : "bg-[#C13D3F4F]"}  absolute left-[16px] top-[19px] text-[10px] font-sans-georgian font-semibold text-[#FFFFFFBD]`}>
          {postType}
        </p>
      </div>
      <div className="flex flex-col px-[22px] pb-[18px] pt-[16px]">
        <div className="flex w-[80%] justify-between items-center mb-[13px]">
          <div className="flex items-center gap-[8px] ">
            <Image src={users} alt="users" />
            <p className="text-[14px] font-sans-georgian font-medium text-[#111827AD]">
              8 შემქმნელი
            </p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Image src={eye} alt="eye" />
            <p className="text-[14px] font-sans-georgian font-medium text-[#111827AD]">
              45,000 ნახვა
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-[10px]">
          <p className="text-[#000000AD] text-[14px] font-sans-georgian font-medium">
            ბიუჯეტი
          </p>
          <p className="text-[#111827] text-[14px] font-sans-georgian font-semibold">
            ${current} / ${total}
          </p>
        </div>
        <div className="w-full bg-[#0F07310A] rounded-full h-2.5 mb-[12px] ">
          <div
            className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 "
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <hr className="text-[#111827] opacity-8 mb-[12px]" />

        <div className="flex items-center justify-between mb-[23px]">
          <p className="text-[14px] text-[#000000AD] font-sans-georgian font-medium">ჯამური გადახდა</p>
          <p className="text-[#00D540] text-[17px] font-sans-georgian font-semibold">${current}</p>
        </div>

        <div className="flex items-center justify-between gap-[10px]">
          <Button className="flex items-center justify-center gap-[8px] w-[65%] h-[40px] text-[12px] text-[#111827] font-sans-georgian font-bold border-[0.5px] border-[#11182742]   rounded-[8px]" Img={diagrama} text="ანალიტიკა"></Button>
          <Button className="border-[0.5px] border-[#11182742] text-[12px] text-[#111827] font-sans-georgian font-bold rounded-[8px] h-[40px] w-[30%]" text="გახსენი ჩატი"></Button>
        </div>
      </div>
    </div>
  );
}
