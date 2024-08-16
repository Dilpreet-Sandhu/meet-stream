import React from "react";

function AdditonalSettings() {
  return (
    <div className="w-3/4 h-full grid grid-cols-2 grid-rows-2">
      {[
        "screen share",
        "Schedule for later",
        "Allow everyone to join",
        "Allow everyone to message",
      ].map((item,idx) => (
        <div className="px-3 flex items-center justify-between" key={idx}>
            <div>
                <p className="text-[#17153B] text-[16px] font-bold">{item}</p>
            </div>
            <div className="mr-10 flex gap-5">
                <button className="bg-[#2E236C] text-white w-[100px] h-10 " disabled={true} >on</button>
                <button className="bg-[#2E236C] text-white w-[100px] h-10">off</button>
            </div>
        </div>
      ))
      }
    </div>
  );
}

export default AdditonalSettings;
