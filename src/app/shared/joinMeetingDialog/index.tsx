"use client";

import { setJoinMeetingFalse } from "@/redux/features/additonals";
import { useAppSelector } from "@/redux/store";
import { motion } from 'framer-motion';
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

 





export default function JoinMeetingDialog({user,addMember} : {user : any,addMember : any}) {
  const joinMeeting = useAppSelector((state) => state.additional.joinMeeting);
  const dispatch = useDispatch();

  const [codeInput,setCodeInput] = useState("");



  function closeDialog() {
    dispatch(setJoinMeetingFalse());
  }

 

  return (
    <>
      {joinMeeting ? (
        <motion.div
        initial={{opacity : 0,scale : 0}}
        whileInView={{opacity: 1,scale : 1}}

          className="w-[450px]  h-[250px] bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
   absolute top-[35%] left-[34%] translate-x-[-50%] translate-y-[-50%]"
        >
          <div className="w-full h-full flex flex-col">
            <div className=" w-full h-[50px] flex items-center justify-between">
              <h1 className="mt-3 ml-4 font-medium text-[#17153B] text-[18px]">
                join a meeting
              </h1>
              
          
              <button
                onClick={() => closeDialog()}
                className="bg-transparent text-[17px] text-[#17153B] pr-5 font-mono font-bold"
              >
                x
              </button>
            </div>
            <div className="flex-1 ">
              <div className="pl-4 flex flex-col gap-2 pt-4">
                <label>Enter room code</label>
                <input
                  onChange={(e) => setCodeInput(e.target.value)}
                  value={codeInput}
                  placeholder="room code"
                  className="bg-transparent pl-1 outline-none w-11/12 h-[40px] border-white rounded-md border-[2px]"
                />
              </div>
              <div className="pt-6 pl-5">
                <button onClick={() => {
                  addMember(codeInput,user?.id);
                  toast.success("entered room")
                }} className="w-[100px] h-[40px] rounded-md bg-[#2E236C] text-white">
                  Join room
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </>
  );
}
