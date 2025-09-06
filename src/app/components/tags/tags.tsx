import React, { useState } from "react";
import Input from "../input/input";
import Button from "../button/button";
import { FiPlus } from "react-icons/fi";

export default function Tags() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTag = () => {
    const newTag = inputValue.trim();

    if (newTag === "") return;

    if (tags.includes(newTag)) {
      alert("ეს თეგი უკვე არსებობს");
      setInputValue("");
      return;
    }

    setTags((prev) => [...prev, newTag]);
    setInputValue("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-2">
    
        <form className="flex items-end gap-[16px]"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTag();
          }}
         action="">
          <Input
            label="კამპანიის თეგები"
            placeholder="თეგის დამატება"
            className="w-full h-[56px] border-[#E3E8EF] border-[1px] rounded-[8px] px-[18px] outline-none"
            width="95%"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <Button
            icon={FiPlus}
            className="h-[56px] border-[1px] border-[#E3E8EF] w-[5%] rounded-[8px] flex items-center justify-center cursor-pointer"
            onClick={handleAddTag}
          />
        </form>
 

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <div
              key={tag}
              onClick={() => handleRemoveTag(tag)}
              className="bg-[#3012B31F] border-[1px] border-[#3012B3] rounded-[8px] px-[22px] py-[10px] text-[16px] font-sans-georgian font-semibold cursor-pointer hover:bg-[#3012B340] transition"
            >
              {tag}
            </div>
          ))
        ) : (
          <p className="bg-[#3012B31F] border-[1px] border-[#3012B3] rounded-[8px] px-[22px] py-[10px] text-[#111827] text-[16px] font-sans-georgian font-semibold">
            თეგები ცარიელია
          </p>
        )}
      </div>
    </div>
  );
}
