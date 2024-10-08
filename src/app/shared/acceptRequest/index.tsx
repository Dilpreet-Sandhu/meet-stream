"use client";

import { setJoinMeetingFalse } from "@/redux/features/additonals";
import { addNotifcation, setDisplayOfNotification } from "@/redux/features/roomNotification";
import { useAppSelector } from "@/redux/store";
import { Fragment } from "react";
import { useDispatch } from "react-redux";

export default function AcceptRequestDialog() {
  const meetingNotificaiton = useAppSelector(
    (state) => state.additional.meetingNotificaiton
  );
  const notifications = useAppSelector(
    (state) => state.meetingNotification.notifications
  );
  const dispatch = useDispatch();

  

  function denyRequest(idx : number) {
    dispatch(setDisplayOfNotification(idx))
  }

  function acceptRequest(idx : number) {
    dispatch(setDisplayOfNotification(idx))
  }


  return (
    <>
      {meetingNotificaiton && (
        <div className="absolute w-[400px] flex flex-col justify-end gap-5  h-full px-4 py-5 z-50">
          {notifications.map((notifcation, idx) => (
            <Fragment key={idx}>
              {notifcation.display && (
                <div
                  
                  className="w-[300px] flex items-center justify-between  h-[50px] bg-zinc-700 rounded-md"
                >
                  <h1 className="pl-3 text-white">{notifcation.name}</h1>
                  <div className="pr-5 flex gap-1">
                    <button onClick={() => acceptRequest(idx)} className="w-[60px] h-[30px] text-white text-[14px] flex items-center rounded-md justify-center mr-2 bg-green-500">
                      accept
                    </button>
                    <button onClick={() => denyRequest(idx)} className="w-[60px] h-[30px] text-white text-[14px] flex items-center rounded-md justify-center  bg-red-500">
                      deny
                    </button>
                  </div>
                </div>
              )}
            
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
}
