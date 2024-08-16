'use client'
import Image from 'next/image';
import phone from '../../../../public/phone.svg';
import video from '../../../../public/video.svg';
import microPhone from '../../../../public/microphone-solid.svg';
import cast from '../../../../public/cast.svg';


export default function Buttons()  {
  return (
    <>
    {
      [
        {
          imagePath : video
        },
        {
          imagePath : phone
        },
        {
          imagePath : microPhone
        },
        {
          imagePath : cast
        },
      ].map((icon,idx) => (
        <button key={idx} className={` w-[45px] h-[45px] rounded-md bg-[#343434] fill-white flex items-center ${idx == 1 ? "bg-red-500 " : ""} justify-center`}><Image alt="plane" className={`w-[25px] h-[25px] fill-white`} src={icon.imagePath}/></button>
      ))
    }
    
    </>
  )
}
