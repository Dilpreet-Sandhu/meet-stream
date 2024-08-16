import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import MeetingForm from "../components/createMeetingForm";

export default function CreateMeeting() {
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
        <div className="mt-10">
            <h1 className="font-extrabold text-[#2E236C] cursor-pointer text-[33px]">Create New Meeting</h1>
        </div>
        <div className="w-10/12 rounded-md h-[350px] flex bg-[#CABFF0] mt-3">
            <MeetingForm/>
        </div>
    </div>
  );
}
