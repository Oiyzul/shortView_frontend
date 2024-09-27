"use client";

import Image from "next/image";
import { useState } from "react";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="relative flex flex-col">
        <input
          type="text"
          placeholder="Title"
          className="p-12 text-6xl outline-none bg-transparent placeholder:text-[#b3b3b1]"
        />
        <select className="mb-12 px-5 py-2.5 ml-12 w-max">
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <div className="flex gap-5 h-[700px] relative">
          <button
            className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Image src="/plus.png" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className="flex gap-5 absolute z-50 w-full left-[50px]">
              <input type="file" id="image" style={{ display: "none" }} />
              <button className="">
                <label htmlFor="image">
                  <Image src="/image.png" alt="" width={16} height={16} />
                </label>
              </button>
              <button className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center cursor-pointer border-[#1a8917]">
                <Image src="/external.png" alt="" width={16} height={16} />
              </button>
              <button className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center cursor-pointer border-[#1a8917]">
                <Image src="/video.png" alt="" width={16} height={16} />
              </button>
            </div>
          )}
        </div>
        <button className="absolute top-0 right-0 text-white px-5 py-2.5 border-none bg-[#1a8917] cursor-pointer rounded-[20px]">
          Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
