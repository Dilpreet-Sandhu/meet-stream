'use client'

import Image from "next/image";
import search from '../../../../public/search.svg';
import SearchUsers from "../searchUesrs";

export default function MeetingForm() {
  return (
    <div className="w-full  h-full flex">
      <div className="w-1/2  py-5 px-1 h-full">
        <div className="w-[400px] pl-5 h-[70px]">
          <p className="text-[#17153B] text-[14px] font-medium opacity-65">
            name
          </p>
          <input
            className="w-[300px] text-[#17153B] placeholder:text-[#17153B] focus:outline-none bg-transparent pl-4 rounded-md h-[40px] placeholder:opacity-65 placeholder:text-[13px] border-[#17153B] bg-none border-[3px]"
            placeholder="enter room name"
          />
        </div>
        <div className="w-[400px] pl-5 pt-5 h-[100px]">
          <p className="text-[#17153B] text-[14px] font-medium opacity-65">
            description
          </p>
          <input
            className="w-[300px] text-[#17153B] placeholder:text-[#17153B] focus:outline-none bg-transparent pl-4 rounded-md h-[70px] placeholder:opacity-65 placeholder:text-[13px] border-[#17153B] bg-none border-[3px]"
            placeholder="enter description"
          />
        </div>
        <div className="w-full pt-5 h-[100px] flex gap-5 mt-5">
          <div className="w-[200px] pl-5 h-[50px]">
            <p className="text-[#17153B] text-[14px] font-medium opacity-65">
              Date
            </p>
            <input
              className="w-[200px] px-4 text-[#17153B] opacity-65 placeholder:text-[#17153B] focus:outline-none bg-transparent pl-4 rounded-md h-[40px] placeholder:opacity-65 placeholder:text-[13px] border-[#17153B] bg-none border-[3px]"
              type="date"
            />
          </div>
          <div className="w-[100px] pl-5 h-[50px]">
            <p className="text-[#17153B] text-[14px] font-medium opacity-65">
              Time
            </p>
            <input
              className="w-[100px] px-4 text-[#17153B] opacity-65 focus:outline-none bg-transparent pl-4 rounded-md h-[40px] text-[14px] border-[#17153B] bg-none border-[3px]"
              type="time"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 px-20 h-full flex  justify-end">
        <div className="flex items-start   w-full h-full flex-col">
          <div>
              <p className="text-[15px] text-[#17153B] opacity-75 pt-5 font-medium">people to invite</p>
              <SearchUsers/>
          </div>

          <div className="h-[50px]  mt-[120px] w-10/12">
            <button className="bg-[#2E236C] outline-none rounded-md  w-full h-full text-white font-medium text-[18px]">Create Meeting</button>
          </div>
        </div>
      </div>
    </div>
  );
}
