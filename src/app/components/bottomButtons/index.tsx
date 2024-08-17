"use client";
import Image from "next/image";
import cast from "../../../../public/cast.svg";
import microPhone from "../../../../public/microphone-solid.svg";
import phone from "../../../../public/phone.svg";
import video from "../../../../public/video.svg";

import { ReactElement, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  FaChromecast,
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
} from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { MdCall } from "react-icons/md";

export default function Buttons() {
  const [buttonTogglers, setButtonTogglers] = useState({
    video: true,
    endCall: true,
    microPhone: true,
    cast: true,
  });

  type button = {
    id: number;
    name: "video" | "endCall" | "microPhone" | "cast";
    activeButton: ReactElement;
    inactiveButton: ReactElement;
  };
  const dispatch = useDispatch();

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
  ];

  function videoHandler() {}

  function EndCall() {}

  function microPhoneHandler() {}

  function castScreen() {}

  function handleClick(name: "video" | "endCall" | "microPhone" | "cast") {
    setButtonTogglers((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  return (
    <>
      {buttons.map((icon, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(icon.name)}
          className={` w-[45px] h-[45px] rounded-md bg-[#343434] fill-white flex items-center ${
            idx == 1 ? "bg-red-500 " : ""
          } justify-center`}
        >
          {buttonTogglers[icon.name] ? icon.activeButton : icon.inactiveButton}
        </button>
      ))}
    </>
  );
}
