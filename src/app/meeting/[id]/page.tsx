import React from "react";

export default function MeetingRoom() {
  return (
    <div className="w-full flex flex-col h-screen bg-black">
      <header className="bg-zinc-900 pl-5 text-[15px] py-5 w-full text-white">
        Dilpreet's room
      </header>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex">
          <div className="w-3/5 h-full">
          <div className="w-[800px] bg-red-600 pl-10 mt-7 rounded-xl ml-10 h-[400px]"></div>
          </div>
          <div className="w-2/5 h-full">

          </div>

        </div>
        <div className="bg-zinc-900 w-full py-7">

        </div>
      </div>
    </div>
  );
}
