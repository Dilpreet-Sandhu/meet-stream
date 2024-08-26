import Buttons from "@/app/components/bottomButtons";
import CopyButton from "@/app/components/copyButton";
import Messages from "@/app/components/messages";
import SendButton from "@/app/components/sendMessageButton";
import VideoStreams from "@/app/components/videoCall";
import AcceptRequestDialog from "@/app/shared/acceptRequest";
import { auth } from "@/auth";
import { getMeetingDetails, leaveMeeting } from "@/server_actions/room/roomAction";
import { redirect } from "next/navigation";

export default async function MeetingRoom({ params }: { params: any }) {
  const { id } = params;

  const { data } = await getMeetingDetails(id);
  const session = await auth();
  

  async function copyText() {
    "use server";
    try {
      await navigator.clipboard.writeText(data?.meetingCode);
    } catch (error) {
      console.log(error);
    }
  }
  async function leaveRoom(codeInput : string,userId : string)  {
    'use server';
    const room = await leaveMeeting();
    redirect(`/`);
  }


  return (
    <div>
      {
        data.members.includes(session?.user.id) || data.hostId == session?.user?.id  ? (
          <div className="w-full flex flex-col h-screen bg-black">
      <AcceptRequestDialog />
      <header className="bg-zinc-900 pl-5 text-[15px] py-5 w-full text-white">
        {data?.title}
      </header>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex">
          <div className="w-3/5 h-full">
            <div className="w-[850px]  mt-7 rounded-xl ml-10 h-[550px]">
              <VideoStreams />
            </div>
          </div>
          <div className="w-2/5 py-5 px-10 h-full">
            <div className="w-11/12 h-full flex overflow-hidden flex-col bg-[#1C1B1B] rounded-md">
              <h1 className="text-white text-[25px] pl-5 pt-5">Room chat</h1>
              <div className="flex-1">
                <Messages />
              </div>
              <div className="w-full mb-5 h-[70px]">
                <div className="w-full h-full py-1  px-5">
                  <div className="w-full h-full flex items-center justify-between py-3 px-2  bg-[#282828]">
                    <input
                      className="flex-1 h-10 placeholder:text-[11px] bg-transparent outline-none text-white text-[#14px]"
                      placeholder="type something here"
                    />
                    <SendButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 flex items-center gap-4  w-full py-2">
          <div className="w-[600px] ml-5 cursor-pointer flex">
            <div className="w-[150px] h-[40px] py-3 cursor-pointer rounded-md flex items-center z-14  bg-zinc-500 opacity-40 ">
              <p className=" text-nowrap text-[13px] cursor-pointer font-semibold text-white  tracking-wide pl-2">
                {data?.meetingCode}
              </p>
              <div className="w-[1px] h-full ml-1 bg-white" />
              <CopyButton copyFn={copyText} />
            </div>
          </div>
          <div className="flex flex-1 gap-5">
            <Buttons leaveRoom={leaveRoom}/>
          </div>
        </div>
      </div>
    </div>
        ) : <div className="w-full h-screen bg-zinc-900 flex items-center justify-center text-white text-3xl">
          you are not authorized to enter meeting
        </div>
      }
    </div>
  );
}
