"use client";
import React, { useState } from "react";
import starIcon from "../../../../public/assets/createPostIcon/star-svgrepo-com 1.svg";
import cupIcon from "../../../../public/assets/createPostIcon/cup-1-svgrepo-com 1.svg";
import userIcon from "../../../../public/assets/createPostIcon/user-check-svgrepo-com 1.svg";
import scissorsIcon from "../../../../public/assets/createPostIcon/scissors-svgrepo-com 1.svg";
import Creator from "../creator/creator";

export default function CreatorSelectro() {
  const [selected, setSelected] = useState<string[]>([]);
  console.log(selected,"selected")

  const toggleSelect = (platform: string) => {
    setSelected((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="flex flex-wrap gap-[30px]">
      <Creator
        onClick={toggleSelect}
        isSelected={selected.includes("ინფლუენსერი ")}
        Img={starIcon}
        title="ინფლუენსერი "
        description="ცნობილი შემქმნელები დამკვიდრებული აუდიტორიით"
      />
      <Creator
        onClick={toggleSelect}
        isSelected={selected.includes("გამოცდილი შემქმნელი ")}
        Img={cupIcon}
        title="გამოცდილი შემქმნელი "
        description="შემქმნელები დადასტურებული კონტენტის გამოცდილებით"
      />
      <Creator
        onClick={toggleSelect}
        isSelected={selected.includes("დამწყები შემქმნელი ")}
        Img={userIcon}
        title="დამწყები შემქმნელი "
        description="ახალი შემქმნელები რომლებიც ცდილობენ გამოცდილების დაგროვებას"
      />
      <Creator
        onClick={toggleSelect}
        isSelected={selected.includes("კლიპერი ")}
        Img={scissorsIcon}
        title="კლიპერი "
        description="ვიდეო მონტაჟის სპეციალისტები"
      />
    </div>
  );
}
