'use client'
import { signOut } from "next-auth/react";
import React from "react";

export default function Logout() {

    function handleLogout() {
        signOut()
    }
    
  return (
    <div
      onClick={handleLogout}
      className="px-4 font-medium cursor-pointer rounded-md flex items-center justify-center border-[#2E236C] border-[3px] w-[100px] h-[40px]"
    >
      Logout
    </div>
  );
}
