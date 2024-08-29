"use client";

import { ReactElement, useContext, useEffect, useState } from "react";
import {
  FaChromecast,
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { useDispatch } from "react-redux";
import CopyButton from "../copyButton";
import { BiCopy } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { context } from "@/context/context";
import { leaveMeeting } from "@/server_actions/room/roomAction";
import { redirect } from "next/navigation";

export default function Buttons({

  data,
}: {
  data: any;
}) {
  const [buttonTogglers, setButtonTogglers] = useState({
    video: true,
    endCall: true,
    microPhone: true,
    cast: true,
    copy : true
  });

  type button = {
    id: number;
    name: "video" | "endCall" | "microPhone" | "cast" | "copy";
    activeButton: ReactElement;
    inactiveButton: ReactElement;
  };
  const dispatch = useDispatch();
  const {setVideo,video,streamState} = useContext(context);
  console.log(video);

  const buttons: Array<button> = [
    {
      id: 1,
      name: "video",
      activeButton: (
        <FaVideo color={"white"} style={{ width: "25px", height: "25px" }} />
      ),
      inactiveButton: (
        <FaVideoSlash color="red" style={{ width: "25px", height: "25px" }} />
      ),
    },
    {
      id: 2,
      name: "endCall",
      activeButton: (
        <MdCall color={"white"} style={{ width: "25px", height: "25px" }} />
      ),
      inactiveButton: (
        <MdCall color={"gray"} style={{ width: "25px", height: "25px" }} />
      ),
    },
    {
      id: 3,
      name: "microPhone",
      activeButton: (
        <FaMicrophone
          color={"white"}
          style={{ width: "25px", height: "25px" }}
        />
      ),
      inactiveButton: (
        <FaMicrophoneSlash
          color={"red"}
          style={{ width: "25px", height: "25px" }}
        />
      ),
    },
    {
      id: 4,
      name: "cast",
      activeButton: (
        <FaChromecast
          color={"white"}
          style={{ width: "25px", height: "25px" }}
        />
      ),
      inactiveButton: (
        <FaChromecast color="gray" style={{ width: "25px", height: "25px" }} />
      ),
    },
    {
      id :5,
      name : "copy",
      activeButton : (
        <BiCopy color="white" style={{width : "25px",height:"25px"}}/>
      ),
      inactiveButton : (
        <TiTick color="white" style={{width : "25px",height:"25px"}}/>
      )
    }
  ];

  function videoHandler() {
    setVideo((prev : boolean) => !prev);
    if (streamState) {
      streamState.enabled = false;  
    }
  }

  function EndCall() {
    const leaveRoom =  async() => {
      const room = await leaveMeeting();
      redirect(`/`);
    }
    leaveRoom()
  }

  function microPhoneHandler() {}

  function castScreen() {}

  function handleClick(name: "video" | "endCall" | "microPhone" | "cast" | "copy") {
    setButtonTogglers((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
    if (name == "endCall") {
      EndCall();
    }
    if (name == "copy") {
      copy()
    }
    if (name == "video") {
      videoHandler()
    }
  }
  function copy() {
    async function copyCode() {
      await navigator.clipboard.writeText(data);
    }
    copyCode();
  }


  

  return (
    <>
     
      <div className="flex flex-1 items-center justify-center gap-5 ">
        {buttons.map((icon, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(icon.name)}
            className={` w-[45px] h-[45px] rounded-md bg-[#343434] fill-white flex items-center ${
              idx == 1 ? "bg-red-500 " : ""
            } justify-center`}
          >
            {buttonTogglers[icon.name]
              ? icon.activeButton
              : icon.inactiveButton}
          </button>
        ))}
      </div>
    </>
  );
}
