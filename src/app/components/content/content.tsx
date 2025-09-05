import React from "react";
import Button from "../button/button";
import { LuPlus } from "react-icons/lu";
import Post from "../post/post";
import Link from "next/link";

export default function Content() {
  return (
    <div className="flex flex-col pl-[27px] pr-[26px] pt-[65px] ">
      <div className="w-full h-[54px] bg-[#F2F5F9] rounded-[8px] flex items-center px-[5px] py-[7px] mb-[28px]">
        <p className="w-[50%] text-center  py-[8px] rounded-[4px] text-black/67 text-[16px] font-bold font-sans-georgian ">
          ანალიტიკა
        </p>
        <p className="w-[50%] text-center bg-white py-[8px] rounded-[4px] text-black/67 text-[16px] font-bold font-sans-georgian  ">
          კამპინგი
        </p>
      </div>
      <div className="flex justify-between mb-[23px]">
        <p className="text-[20px] font-sans-georgian font-semibold text-black">
          შენი კამპინიები
        </p>
        <Link href= "/createPost">
        <Button
          className=" cursor-pointer flex items-center gap-[10px] px-[15px] py-[12px] bg-[#0866FF] text-white rounded-[8px] text-[14px] font-sans-georgian font-bold"
          icon={LuPlus}
          iconStyle="text-[18px]"
          text="დაიწყე ახალი კემპინგი"
        ></Button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-[26px] justify-center mb-[200px]  ">
        <Post postType="აქტიური" current={1245} total={5600} />
        <Post postType="დასრულებული" current={2045} total={5600} />
        <Post postType="აქტიური" current={3245} total={5600} />
        <Post postType="აქტიური" current={5600} total={5600} />
        <Post postType="დასრულებული" current={2210} total={5600} />
        <Post postType="დასრულებული" current={5600} total={5600} />
      </div>
    </div>
  );
}
