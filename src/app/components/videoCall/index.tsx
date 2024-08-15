'use client'

import { useState } from "react";
import microPhoneIcon from '../../../../public/microphone-solid.svg';
import Image from "next/image";


export default function VideoStreams() {

    const [userCount,setUserCount] = useState(4);

   

  return (
    <div className={`w-full h-full grid gap-2 ${userCount == 1 ? "grid-cols-1 grid-rows-1" : userCount == 2 ? "grid-cols-2 grid-rows-1" : userCount == 3 ? "grid-cols-3 grid-rows-1" : "grid-rows-2 grid-cols-2"}`}>

      {
        RenderVideos({userCount})
      }
    </div>
  )
}


function RenderVideos({userCount} : {userCount : number}) {

    const videos : Array<React.JSX.Element> = [];

    for (let i = 0 ; i < userCount;i++) {
        videos.push(
            <div key={i} className='flex  justify-center items-center bg-[#242222] rounded-md'>
                <div className='w-full h-full object-cover relative'>
                  <p className="absolute right-5 top-5 bg-[#565656] opacity-49 px-3 py-1 rounded-md">dilpreet</p>
                  <button className="w-7 h-7 flex items-center justify-center absolute bottom-3 left-3 bg-[#565656] rounded-full">
                    <Image alt="micro phone icon" className="w-4 h-4 " src={microPhoneIcon}/>
                  </button>
                </div>
                <source src={"/"} type='video/mp4'/>
            </div>
        )
    }

    return videos

}