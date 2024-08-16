'use client'
import { setJoinMeetingTrue } from "@/redux/features/additonals";
import { useDispatch } from "react-redux";

export default function JoinMeetingButton() {

    const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setJoinMeetingTrue())} className="bg-[#17153B] border-[3px] px-5 py-2 rounded-md text-white opacity-85">
      join a meeting
    </button>
  );
}
