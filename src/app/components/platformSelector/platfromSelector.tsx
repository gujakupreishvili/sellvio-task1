"use client";

import React, { useState } from "react";
import Button from "@/app/components/button/button";
import TikTokSvg from  "../../../../public/assets/createPostIcon/tik tok.svg"
import instagram from "../../../../public/assets/createPostIcon/instagram-1-svgrepo-com 2.svg"
import facebook from "../../../../public/assets/createPostIcon/facebook.svg"

export default function PlatformSelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (platform: string) => {
    setSelected((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform) 
        : [...prev, platform]         
    );
  };

  return (
    <div className="flex items-center justify-between">
      <Button
        text="Tik Tok"
        Img={TikTokSvg}
        isSelected={selected.includes("tiktok")}
        onClick={() => toggleSelect("tiktok")}
        className="flex flex-col items-center border-[1px] border-[#E3E8EF] py-[16px] px-[103px] gap-[17px] rounded-[8px] cursor-pointer"
        pTagStyle="text-[#000000] text-[16px] font-sans-georgian font-semibold"
      />
      <Button
        text="Instagram"
        Img={instagram}
        isSelected={selected.includes("instagram")}
        onClick={() => toggleSelect("instagram")}
        className="flex flex-col items-center border-[1px] border-[#E3E8EF] py-[16px] px-[103px] gap-[17px] rounded-[8px] cursor-pointer"
        pTagStyle="text-[#000000] text-[16px] font-sans-georgian font-semibold"
      />
      <Button
        text="Facebook"
        Img={facebook}
        isSelected={selected.includes("facebook")}
        onClick={() => toggleSelect("facebook")}
        className="flex flex-col items-center border-[1px] border-[#E3E8EF] py-[16px] px-[103px] gap-[17px] rounded-[8px] cursor-pointer"
        pTagStyle="text-[#000000] text-[16px] font-sans-georgian font-semibold"
      />
    </div>
  )
}
