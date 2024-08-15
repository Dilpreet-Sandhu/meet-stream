"use client";

import { messages } from "@/dummyData";
import { useState } from "react";
import { message } from "../../../dummyData";

const user: { _id: string; name: string } = {
  _id: "0sa0dfef023t3afa0",
  name: "dilpreet",
};

export default function Messages() {
  const [roomMessage, setRoomMessage] = useState(messages);

  return (
    <div className="w-11/12 h-full flex flex-col px-4 pt-5">
      {messages.map((item, idx) => {
        return <SingleMessage key={idx} message={item} />;
      })}
    </div>
  );
}

function SingleMessage({ message }: { message: message }) {
  return (
    <div
      className={`w-[200px] h-[50px] mt-3 bg-[#121212] rounded-md rounded-es-none ${
        message.sender.name == user.name ? "self-end rounded-se-none" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between pt-1 px-2">
        <p className="font-light text-[10px] ml-2 mt-1 text-white">
          {message.sender.name}
        </p>
        <p className="font-light text-[10px] ml-2 mt-1 text-[#626262]">11:30</p>
      </div>
      <div>
        <p className="font-light text-[13px] ml-4 text-[#CBC3FC]">
          {message.content}
        </p>
      </div>
    </div>
  );
}
