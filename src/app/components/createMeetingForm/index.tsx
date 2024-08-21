"use client";

import { addFormDate } from "@/redux/features/room";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import SearchUsers from "../searchUesrs";
import unqid from "uniqid";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCreateMeetingMutation } from "@/redux/features/api";
import { apiCall, useAsyncMutation } from "@/app/lib/helper";
import { useEffect, useState } from "react";

export default function MeetingForm({
  submitBtn,
  users,
}: {
  submitBtn: any;
  users: any;
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const roomData = useAppSelector((state) => state.room);
  const [loading,setLoading] = useState(false);

  // const [data,executeMutation,loading,error] = useAsyncMutation(useCreateMeetingMutation);

  return (
    <div className="w-full  h-full flex">
      <div className="w-1/2  py-5 px-1 h-full">
        <form>
          <div className="w-[400px] pl-5 h-[70px]">
            <p className="text-[#17153B] text-[14px] font-medium opacity-65">
              title
            </p>
            <input
              value={roomData.title}
              onChange={(e) =>
                dispatch(addFormDate({ name: "title", data: e.target.value }))
              }
              name="title"
              className="w-[300px] text-[#17153B] placeholder:text-[#17153B] focus:outline-none bg-transparent pl-4 rounded-md h-[40px] placeholder:opacity-65 placeholder:text-[13px] border-[#17153B] bg-none border-[3px]"
              placeholder="enter room title"
            />
          </div>
          <div className="w-[400px] pl-5 pt-5 h-[100px]">
            <p className="text-[#17153B] text-[14px] font-medium opacity-65">
              description
            </p>
            <input
              name="description"
              value={roomData.description}
              onChange={(e) =>
                dispatch(
                  addFormDate({ name: "description", data: e.target.value })
                )
              }
              className="w-[300px] text-[#17153B] placeholder:text-[#17153B] focus:outline-none bg-transparent pl-4 rounded-md h-[70px] placeholder:opacity-65 placeholder:text-[13px] border-[#17153B] bg-none border-[3px]"
              placeholder="enter description"
            />
          </div>
          <div className="w-full pt-5 h-[100px] flex gap-5 mt-5">
            <div className="w-[200px] pl-5 h-[50px]">
              <p className="text-[#17153B] text-[14px] font-medium opacity-65">
                Date
              </p>
              <input
                name="date"
                value={roomData.date}
                disabled={!roomData.options.scheduleForLater && true}
                onChange={(e) =>
                  dispatch(addFormDate({ name: "date", data: e.target.value }))
                }
                className="w-[200px] px-4 text-[#17153B]  placeholder:text-[#17153B] focus:outline-none bg-transparent pl-4 rounded-md h-[40px] placeholder:opacity-65 placeholder:text-[13px] border-[#17153B] bg-none border-[3px]"
                type="date"
              />
            </div>
            <div className="w-[100px] pl-5 h-[50px]">
              <p className="text-[#17153B] text-[14px] font-medium opacity-65">
                Time
              </p>
              <input
                name="time"
                value={roomData.time}
                disabled={!roomData.options.scheduleForLater && true}
                onChange={(e) =>
                  dispatch(addFormDate({ name: "time", data: e.target.value }))
                }
                className="w-[120px] px-4 text-[#17153B]  focus:outline-none bg-transparent pl-4 rounded-md h-[40px] text-[14px] border-[#17153B] bg-none border-[3px]"
                type="time"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 px-20 h-full flex  justify-end">
        <div className="flex items-start   w-full h-full flex-col">
          <div>
            <p className="text-[15px] text-[#17153B] opacity-75 pt-5 font-medium">
              people to invite
            </p>
            <SearchUsers users={users} />
          </div>

          <div className="h-[50px]  mt-[120px] w-10/12">
            <button
              onClick={() => {
                toast.loading("creating room")
                submitBtn(roomData);
                toast.success("room created")
              }}
              className="bg-[#2E236C] outline-none rounded-md  w-full h-full text-white font-medium text-[18px]"
            >
              Create Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
