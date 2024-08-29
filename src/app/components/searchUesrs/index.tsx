'use client'
import { addMembersToRoom } from "@/redux/features/room";
import Image from "next/image";
import { useState } from "react";
import { BiPlus, BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import search from "../../../../public/search.svg";
import SearchedUser from "../searchedUser";

export default function SearchUsers({ users }: { users: any }) {
  const [openDialog, setOpenDialog] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

console.log(users);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputVal(e.target.value);
    setOpenDialog(e.target.value.length > 0);
  }

  function handleAddMemberClick() {
    setOpenDialog(false);
  }

  function handleAddMember(user : any) {
      dispatch(addMembersToRoom(user));
  }

  return (
    <div onClick={() => setOpenDialog(false)}  className="flex flex-col w-full h-full">
      <div
        className={`w-[355px] ${
          !openDialog && "hidden"
        } py-2 h-[170px] absolute right-[450px] top-[220px] && flex flex-col rounded-md bg-zinc-300`}
      >
        <div className="w-full h-[80%] px-2">
          <div className="w-full h-full grid py-1 grid-cols-1 grid-rows-3 gap-1 ">
            {users.map((user: any, idx: number) => (
              <div key={idx} className="bg-zinc-200 shadow-md rounded-sm flex">
                <div className="w-10/12 flex pl-1 items-center gap-2  pt-1">
                  <div className="flex items-center gap-[4px]">
                    {
                      user?.avatar ? (
                        <img
                      className="w-7 h-7 rounded-full"
                      src={user?.avatar}
                      alt="user"
                    />
                      ) : <BiUserCircle className="w-7 h-7 rounded-full"/>
                    }
                    <p>{user?.username}</p>
                  </div>
                </div>
                <div onClick={() => handleAddMember(user)} className="flex-1 flex items-center justify-center mr-3">
                  <BiPlus
                    className="w-[30px] h-[30px] bg-zinc-100 hover:bg-white rounded-sm"
                    color="green"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <form className="flex relative">
        <input
          placeholder="invite people"
          value={inputVal}
          onChange={handleInputChange}
          className="bg-transparent outline-none pl-1 placeholder:text-gray-400 w-[350px] border-b-[2px] border-[#17153B] pt-3"
        />
        <button type="submit">
          <Image
            src={search}
            alt="search"
            className="w-[25px] h-[25px] absolute top-[3px] right-1"
          />
        </button>
      </form>
      <div className=" flex  items-center mt-4 w-full h-full ">
        <SearchedUser />
      </div>
    </div>
  );
}
