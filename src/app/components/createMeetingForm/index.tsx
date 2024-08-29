"use client";

import { addFormDate } from "@/redux/features/room";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import SearchUsers from "../searchUesrs";

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
  const [loading, setLoading] = useState(false);

  // const [data,executeMutation,loading,error] = useAsyncMutation(useCreateMeetingMutation);

  return (
    <div className="w-full  h-full flex">
      <div className="w-full  py-5 px-1 h-full">
        <form className="flex justify-center items-center flex-col">
          <div className="flex items-center">
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
            <div className="w-[500px] h-[100px]">
              <p className="text-[#17153B] text-[14px] font-medium opacity-65">
                description
              </p>
              <textarea
                name="description"
                value={roomData.description}
                onChange={(e) =>
                  dispatch(
                    addFormDate({ name: "description", data: e.target.value })
                  )
                }
                className="w-[400px] text-[#17153B] pt-2 text-[13px] placeholder:text-[#17153B] focus:outline-none bg-transparent pl-4 rounded-md h-[70px] placeholder:opacity-65 placeholder:text-[13px] border-[#17153B] bg-none border-[3px]"
                placeholder="enter description"
              />
            </div>
          </div>
          <div className="w-full  h-[100px] ml-[230px] flex gap-2 mt-5">
            <div className="w-[400px] pl-5 h-[50px]">
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
                className="w-[300px] px-4 text-[#17153B]  placeholder:text-[#17153B] focus:outline-none bg-transparent pl-4 rounded-md h-[40px] placeholder:opacity-65 placeholder:text-[13px] border-[#17153B] bg-none border-[3px]"
                type="date"
              />
            </div>
            <div className="w-[200px] h-[50px]">
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
                className="w-[200px] px-4 text-[#17153B]  focus:outline-none bg-transparent pl-4 rounded-md h-[40px] text-[14px] border-[#17153B] bg-none border-[3px]"
                type="time"
              />
            </div>
          </div>
        </form>
        <div className="flex-1 flex items-center justify-center mt-5">
        <div className="h-[50px] w-[500px]">
            <button
              onClick={() => {
                const toastId = toast.loading("creating room")
                submitBtn(roomData);
                toast.success("room created",{id : toastId});
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
