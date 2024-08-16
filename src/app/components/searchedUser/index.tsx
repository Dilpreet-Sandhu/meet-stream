'use client'
import { dummyUsers } from "@/dummyData"
import Image from "next/image"
import avatar from '../../../../public/avatar.svg';

export default function SearchedUser() {
  return (
    <div className="flex gap-5">
        {
            dummyUsers.map((user,idx) => (
                <div className='w-[50px] flex flex-col items-center justify-center mr-4 h-[50px]'>
                    <p>{user.name}</p>
                    <Image alt="avatar fill-[#17153B]" className="w-[40px] h-[40px]" src={avatar}/>
                    
                </div>
            ))
        }
    </div>
  )
}
