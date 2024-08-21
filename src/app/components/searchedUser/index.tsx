'use client'
import { removeMemberFromRoom } from "@/redux/features/room";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function SearchedUser() {

  const members = useAppSelector(state => state.room.members);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-5">
        {
            members.map((user,idx) => (
                <div onClick={() => dispatch(removeMemberFromRoom(user?._id))} key={idx} className='w-[50px]  flex flex-col items-center justify-center mr-4 h-[50px]'>
                    <p className="text-nowrap font-medium">{user.username}</p>
                    <img alt="avatar fill-[#17153B]" className="w-[40px] rounded-full h-[40px]" src={user?.avatar}/>
                    
                </div>
            ))
        }
    </div>
  )
}
