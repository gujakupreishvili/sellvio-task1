"use client";
import CampaingFundamentalSection from "@/app/components/Campaign Fundamentals Section/campaingFundamental";
import Input, { InputVariants } from "@/app/components/input/input";
import React from "react";
import control from "../../../../public/assets/createPostIcon/control.svg";
import platformIcon from "../../../../public/assets/createPostIcon/platfromIcon.svg";
import gelIcon from "../../../../public/assets/createPostIcon/lari-svgrepo-com 1.svg";
import PlatformSelector from "@/app/components/platformSelector/platfromSelector";
import dolarIcon from "../../../../public/assets/createPostIcon/dolarIcon.svg";
import networkIcon from "../../../../public/assets/createPostIcon/networkIcon.svg";
import CreatorSelectro from "@/app/components/creatorSelector/creatorSelectro";
import uploadIcon from "../../../../public/assets/createPostIcon/upload.svg";
import ImageIcon from "../../../../public/assets/createPostIcon/imageIcon.svg";
import upload2 from "../../../../public/assets/createPostIcon/upload2.svg";
import bullhorn from "../../../../public/assets/createPostIcon/bullhorn-svgrepo-com 1.svg"
import CustomDatePicker from "@/app/components/customDatePick/customDatePick";
import Switcher from "@/app/components/switcher/switcher";
import ConnectChat from "@/app/components/connectChat/connectChat";
import Tags from "@/app/components/tags/tags";
import Button from "@/app/components/button/button";
import Link from "next/link";

export default function CreatPost() {
  console.log(InputVariants.CURRENCY, "eum variant");
  return (
    <div className="flex flex-col justify-center items-center  bg-[#F7F7F7] min-h-screen gap-[64px] py-[100px]">
      <CampaingFundamentalSection
        iconSrc={control}
        title={"კამპანიის საფუძვლები"}
        description={" დააყენეთ თქვენი კამპანიის ფუნდამენტური დეტალები "}
      >
        <div className="flex flex-col w-full">
          <div className="flex gap-[75px] w-full">
            <Input
              label="კამპანიის სახელი"
              placeholder="მაგ: საზაფხულო პროდუქტი"
              className="border-[1px] border-[#E3E8EF]  rounded-[8px] h-[56px] px-[18px] outline-none w-full placeholder:text-[18px] placeholder:font-sans-georgian placeholder:font-bold placeholder:text-[#000000D10]"
            />
            <Input
              label="ბიუჯეტი (ლარში)"
              placeholder="5000"
              className="border-[1px] border-[#E3E8EF] rounded-[8px] h-[56px] px-[48px] outline-none w-[100%] placeholder:text-[18px] placeholder:font-sans-georgian placeholder:font-bold placeholder:text-[#000000D10]  "
              variant={InputVariants.CURRENCY}
              iconImg={gelIcon}
            />
          </div>
          <Input
            className="border-[1px] border-[#E3E8EF] rounded-[8px] h-[218px] resize-none placeholder:text-[#000000D10] placeholder:text-[18px] placeholder:font-sans-georgian placeholder:font-bold px-[18px] py-[17px] outline-none  "
            placeholder="აღწერეთ თქვენი კამპანიის მიზნები, სამიზნე აუდიტორია და რას ეძებთ შემქმნელებში..."
            label="კამპანიის აღწერა"
            variant={InputVariants.TEXTAREA}
          />
        </div>
      </CampaingFundamentalSection>

      <CampaingFundamentalSection
        iconSrc={platformIcon}
        title={" აირჩიე პლატფორმები"}
        description={
          " აირჩიე რომელ პლატფორმებზე გსურთ ამ კამპანიის მიზნობრივი გამოყენება"
        }
      >
        <PlatformSelector />
      </CampaingFundamentalSection>

      <CampaingFundamentalSection
        iconSrc={dolarIcon}
        title={"გადახდის სტრუქტურა"}
        description={"კონფენსაცია, თუ როგორ მიიღებენ კომპენსაციას შემმნელები"}
      >
        <div className="flex flex-col w-full">
          <Input
            label="შეთავაზების ტიპი"
            variant={InputVariants.DROPDOWN}
            className="border-[1px] border-[#E3E8EF] rounded-[8px] h-[56px] px-[18px] outline-none  "
          />
          <div className="mt-[27px] flex items-end justify-between gap-[18px] w-full ">
            <Input
              type="number"
              className=" border-[1px] border-[#E3E8EF] rounded-[8px] px-[18px] h-[56px] outline-none placeholder:text-[18px] placeholder:text-[#000000D40] placeholder:font-sans-georgian placeholder:font-bold w-full "
              label="გადახდის მოდელი"
              placeholder="რაოდენობა"
              width="70%"
            />
            <Input
              type="number"
              className="border-[1px] border-[#E3E8EF]  rounded-[8px] px-[18px] h-[56px] outline-none placeholder:text-[18px] placeholder:text-[#000000D40] placeholder:font-sans-georgian placeholder:font-bold w-full "
              placeholder="თანხა"
              width="30%"
            />
          </div>
        </div>
      </CampaingFundamentalSection>

      <CampaingFundamentalSection
        iconSrc={networkIcon}
        title="სამიზნე შემქმნელების ტიპი"
        description="აირჩიეთ რომელ ტიპის შემქმნელებთან გსურთ მუშაობა ამ კამპანიისთვის (არასავალდებულო)"
      >
        <CreatorSelectro />
      </CampaingFundamentalSection>

      <CampaingFundamentalSection
        iconSrc={uploadIcon}
        title="გსურთ დამატებით მედიის ატვირთვა?"
        description="იმ შემთხვევაში, თუ თქვენთვის სასურველი კონტენტის შექმნისთვის საჭიროა თქვენი ფოტოებისა და ვიდეობის გამოყენება
        კრეატორების მხირდან, გთხოვთ ატვირთოთ, რათა შეძლონ გამოყენება"
        isFoldable
      >
        <div className="flex  justify-between items-center">
          <Input
            className=""
            label="აირჩიეთ ფაილი"
            iconImg={ImageIcon}
            variant={InputVariants.FILE}
            accept="image/*"
            text="აირჩიეთ ფაილი"
          />
          <Input
            className=""
            label="ატვირთე ლინკი"
            iconImg={upload2}
            variant={InputVariants.FILE}
            accept="video/*"
            text="შეიყვანე ლინკი"
          />
        </div>
      </CampaingFundamentalSection>

      <CampaingFundamentalSection
        iconSrc={bullhorn}
        title="კამპანიის დეტალები"
        description="კამპანიის მოთხოვნები და დამატებითი კონფიგურაცია"
      >
        <div className="flex flex-col gap-[37px]">
          <div className="flex items-center gap-[75px]">
            <CustomDatePicker />
            <Input className="h-[56px] border-[1px] border-[#E3E8EF] rounded-[8px] px-[18px] outline-none placeholder:text-[#000000D40] placeholder:text-[18px] placeholder:font-sans-georgian placeholder:font-bold"  label="სამიზნე აუდიტორია" placeholder="მაგ: ტექნოლოგიების მოყვარული, 18-35 წლის" width="50%" />
          </div>
          <ConnectChat />
          <div>
          <Input  variant={InputVariants.TEXTAREA} label="კამპანიის მოთხოვნები" placeholder="მიუთითეთ ამ კამპანიისთვის სავალდებულო მოთხოვნები (კონტენტის სახელმძღვანელო მითითებები, შედეგები და ა.შ.)" className="outline-none border-[1px] border-[#E3E8EF] rounded-[8px] p-[18px] h-[218px] resize-none placeholder:text-[#000000D10] placeholder:text-[18px] placeholder:font-sans-georgian placeholder:font-bold  "/>
          <p className="mt-[16px] text-[18px] text-[rgba(0,0,0,0.60)] font-sans-georgian font-bold">ეს მოთხოვნები გაზიარდება შექმნელებთან  <span className="text-[#000000D4]">“#მოთხოვნების არხი”</span></p>
          </div>
          <Input  variant={InputVariants.TEXTAREA} label="შემქმნელის დამატებითი მოთხოვნები" placeholder="არასავალდებულო: შემქმნელისთვის ნებისმიერი დამატებითი მოთხოვნა (მინიმალური გამომწერები, კომტენტის სტილი და ა.შ.)" className="outline-none border-[1px] border-[#E3E8EF] rounded-[8px] p-[18px] h-[218px] resize-none placeholder:text-[#000000D10] placeholder:text-[18px] placeholder:font-sans-georgian placeholder:font-bold  "/>
          <Tags />
        </div>
      </CampaingFundamentalSection>
      <div className="flex items-center  justify-end   w-[84.6%] gap-[22px]">
        <Link href ="/">
        <Button text="გაუქმება" className=" h-[39px] w-[220px] border-[1.5px] border-[#00000024] rounded-[8px] text-[#111827] text-[12px] font-sans-georgian font-bold cursor-pointer" />
        </Link>
        <Button text="შექმენი კამპანია" className=" h-[39px] w-[220px] border-[0.5px] border-[##F1E7FF] bg-[#0866FF]  rounded-[8px] text-[#F1E7FF] text-[12px] font-sans-georgian font-bold" />
      </div>
    </div>
  );
}
