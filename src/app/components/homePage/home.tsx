"use client";
import JoinMeetingButton from "../joinMeetingButton";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeText() {
  return (
    <motion.div

  
    
    className="w-full h-full  justify-start py-10">
      <h1 className="font-semibold text-[40px]">Connect Seemlessly,</h1>
      <h1 className="font-semibold  text-[40px]">Anywhere</h1>
      <div className="mt-3 font-normal text-[15px]">
        <p className=" ">
          Experience high-quality video conferencing with Meet Stream.
        </p>
        <p className="">
          Join meetings effortlessly from any device and stay connected
        </p>
        <p className="">with your team, family, and friends</p>
      </div>
      <div className="mt-10 flex gap-5">
        <JoinMeetingButton />
        <Link href={"/create-meeting"}>
          <button className="bg-[#17153B] border-[3px] px-5 py-2 rounded-md text-white opacity-85">
            host a meeting
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
