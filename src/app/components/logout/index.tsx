"use client";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";

export default function Logout({user} : {user : any}) {

  const [dialog,setDialog] = useState(false);

  function handleLogout() {
    signOut();
  }

  return (
    <>
      <div
        onClick={handleLogout}
        className="px-4 font-medium cursor-pointer rounded-md flex items-center justify-center border-[#2E236C] border-[3px] w-[100px] h-[40px]"
      >
        Logout
      </div>
      <div className="w-10 h-10 rounded-full">
        {
          user?.image ? (
          <img className="w-full h-full rounded-full cursor-pointer" src={user?.image}/>
          ) : <BiUserCircle className="w-full h-full rounded-full cursor-pointer"/>
        }
      </div>
    </>
  );
}
