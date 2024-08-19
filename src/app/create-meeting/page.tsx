import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import MeetingForm from "../components/createMeetingForm";
import AdditonalSettings from "../components/additonalSettings";
import { getAllUsers } from "../actions";


async function getUsers() {
  try {
    const res = await getAllUsers();

    return JSON.parse(JSON.stringify(res))

  } catch (error) {
    console.log(error);
  }
}

export default async function CreateMeeting() {

  const users = await getUsers();

  return (
    <div className="bg-[#D9D0FF] w-full flex flex-col h-screen px-20">
      <div className="self-start pt-4">
        <Link href="/">
          <div className="flex items-center gap-3 justify-center">
            <Image alt="logo" className="w-[30px] h-[30px]" src={logo} />
            <h1 className="font-extrabold text-[#17153B] cursor-pointer text-[20px] ">
              Meet Stream
            </h1>
          </div>
        </Link>
      </div>
      <div className="mt-5">
        <h1 className="font-extrabold text-[#2E236C] cursor-pointer text-[33px]">
          Create New Meeting
        </h1>
      </div>
      <div className="w-10/12 rounded-lg h-[350px] flex bg-[#CABFF0] mt-3">
        <MeetingForm users={users}/>
      </div>
      <div className="mt-5">
        <h1 className="font-extrabold text-[#2E236C] cursor-pointer text-[20px]">
          Additional settings
        </h1>
      </div>
      <div className="w-full h-full py-5 ">
          <AdditonalSettings/>
      </div>
      
    </div>
  );
}
