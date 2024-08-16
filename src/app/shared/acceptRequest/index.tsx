'use client'

import { notifications } from "@/dummyData"
import { setJoinMeetingFalse } from "@/redux/features/additonals";
import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux";

export default function AcceptRequestDialog() {

    const notification = useAppSelector((state) => state.additional.meetingNotificaiton);
    const dispatch = useDispatch();



  return (
    <>
    {
        notification && <div className='absolute w-[400px] flex flex-col justify-end gap-5  h-full px-4 py-5 z-50'>
        {
          notifications.map((notifcation,idx) => (
              <div key={idx} className="w-[300px] flex items-center justify-between  h-[50px] bg-zinc-700 rounded-md">
                  <h1 className="pl-3 text-white">{notifcation.user.name}</h1>
                  <div className="pr-5 flex gap-1">
                      <button  className="w-[60px] h-[30px] text-white text-[14px] flex items-center rounded-md justify-center mr-2 bg-green-500">accept</button>
                      <button className="w-[60px] h-[30px] text-white text-[14px] flex items-center rounded-md justify-center  bg-red-500">deny</button>
                  </div>
              </div>
          ))
        }
      </div>
    }
    </>
  )
}
