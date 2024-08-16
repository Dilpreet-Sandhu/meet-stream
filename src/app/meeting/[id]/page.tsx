import Messages from "@/app/components/messages";
import VideoStreams from "@/app/components/videoCall";
import Image from "next/image";
import React from "react";
import copy from "../../../../public/copy.svg";
import Buttons from "@/app/components/bottomButtons";
import SendButton from "@/app/components/sendMessageButton";
import AcceptRequestDialog from "@/app/shared/acceptRequest";

export default function MeetingRoom() {
  return (
    <div className="w-full flex flex-col h-screen bg-black">
      <AcceptRequestDialog/>
      <header className="bg-zinc-900 pl-5 text-[15px] py-5 w-full text-white">
        Dilpreet's room
      </header>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex">
          <div className="w-3/5 h-full">
            <div className="w-[850px]  mt-7 rounded-xl ml-10 h-[550px]">
              <VideoStreams />
            </div>
          </div>
          <div className="w-2/5 py-5 px-10 h-full">
            <div className="w-11/12 h-full flex overflow-hidden flex-col bg-[#1C1B1B] rounded-md">
              <h1 className="text-white text-[25px] pl-5 pt-5">Room chat</h1>
              <div className="flex-1">
                <Messages />
              </div>
              <div className="w-full mb-5 h-[70px]">
                <div className="w-full h-full py-1  px-5">
                  <div className="w-full h-full flex items-center justify-between py-3 px-2  bg-[#282828]">
                    <input
                      className="flex-1 h-10 placeholder:text-[11px] bg-transparent outline-none text-white text-[#14px]"
                      placeholder="type something here"
                    />
                    <SendButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 flex items-center gap-4   w-full py-2">
          <div className="w-[600px] ml-5 flex">
            <div className="w-[150px] h-[40px] py-3 rounded-md flex items-center z-14  bg-zinc-500 opacity-40 ">
              <p className=" text-nowrap text-[13px] font-semibold text-white pl-2">xyz-wes-cbg</p>
              <div className="w-[1px] h-full ml-1 bg-white" />
              <button className="pl-2">
                <Image alt="clone" className="w-[23px] h-[23px] z-1 ml-2 fill-white" src={copy}/>
              </button>
            </div>
          </div>
          <div className="flex flex-1 gap-5">
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}
