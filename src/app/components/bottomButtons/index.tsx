"use client";

import { ReactElement, useState } from "react";
import {
  FaChromecast,
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function Buttons({leaveRoom} : {leaveRoom : any}) {
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

  function EndCall() {
    leaveRoom();
  }

  function microPhoneHandler() {}

  function castScreen() {}

  function handleClick(name: "video" | "endCall" | "microPhone" | "cast") {
    setButtonTogglers((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
    if (name == "endCall") {
        EndCall();
    }
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
