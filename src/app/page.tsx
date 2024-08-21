import { auth } from "@/auth";
import Link from "next/link";
import HomePageImg from "./components/homePage";
import HomeText from "./components/homePage/home";
import JoinMeetingDialog from "./shared/joinMeetingDialog";
import Logout from "./components/logout";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  

  return (
    <div className="w-full min-h-screen bg-[#D9D0FF]">
      <JoinMeetingDialog user={user}/>
      <div className="px-20 flex flex-col">
        <div className="flex items-center justify-between pt-10 h-[50px] w-full">
          <div>
            <Link href={"/"}>
              <h1 className="font-extrabold cursor-pointer text-[20px] ">
                Meet Stream
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-[25px] justify-center">
            <div className="font-semibold text-[#333333] ">dashboard</div>
            <div className=" font-semibold text-[#333333] ">about us</div>
            {user ? (
              <Logout user={user}/>
            ) : (
              <>
                <div className="px-4 font-medium cursor-pointer rounded-md flex items-center justify-center border-[#2E236C] border-[3px] w-[100px] h-[40px]">
                  <Link href={"/sign-in"}>sign in</Link>
                </div>
                <div className="px-4 font-medium cursor-pointer rounded-md flex items-center justify-center border-[#2E236C] border-[3px] w-[100px] h-[40px]">
                  <Link href={"/sign-up"}>sign up</Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-full flex h-[80vh] mt-[25px]">
          <div className="w-1/2  h-full py-20">
            <HomeText />
          </div>
          <HomePageImg />
        </div>
      </div>
    </div>
  );
}
