"use client";

import { setOptionToggler } from "@/redux/features/room";
import { useDispatch } from "react-redux";
import { optionsButtons } from "@/app/lib/helper";
import { useAppSelector } from "@/redux/store";

function AdditonalSettings() {
  const dispatch = useDispatch();
  const options = useAppSelector(state => state.room.options);


  return (
    <div className="w-3/4 h-full grid grid-cols-2 grid-rows-2">
      {optionsButtons.map((item, idx) => (
        <div className="px-3 flex items-center justify-between" key={idx}>
          <div>
            <p className="text-[#17153B] text-[16px] font-bold">{item.text}</p>
          </div>
          <div className="mr-10 flex gap-5">
            <button
              className={`bg-[#2E236C] ${!options[item.name] && "opacity-50" } text-white w-[100px] h-10`}
              onClick={() =>
                dispatch(setOptionToggler({ name: item.name, type: true }))
              }
            >
                on
            </button>
            <button
              onClick={() =>
                dispatch(setOptionToggler({ name: item.name, type: false }))
              }
              className={`bg-[#2E236C] ${options[item.name] && "opacity-50"} text-white w-[100px] h-10`}
            >
              off
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdditonalSettings;
