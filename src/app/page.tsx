import Image from "next/image";
import Link from "next/link";
import videoConfrencing from "../../public/videoConfrencing.svg";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#D9D0FF]">
      <div className="px-20 flex flex-col">
        <div className="flex items-center justify-between pt-10 h-[50px] w-full">
          <div>
            <Link href={"/"}>
              <h1 className="font-extrabold cursor-pointer text-[20px] ">
                Meet Stream
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-[30px] justify-center">
            <div className="font-semibold text-[#333333] ">dashboard</div>
            <div className=" font-semibold text-[#333333] ">about us</div>
            <div className="px-4 font-medium cursor-pointer rounded-md flex items-center justify-center border-[#2E236C] border-[3px] w-[100px] h-[40px]">
              <Link href={"/sign-in"}>sign in</Link>
            </div>
            <div className="px-4 font-medium cursor-pointer rounded-md flex items-center justify-center border-[#2E236C] border-[3px] w-[100px] h-[40px]">
              <Link href={"/sign-up"}>sign up</Link>
            </div>
          </div>
        </div>
        <div className="w-full flex h-[80vh] mt-[25px]">
          <div className="w-1/2 h-full py-20">
            <div className="w-full h-full  justify-start py-10">
              <h1 className="font-semibold text-[40px]">Connect Seemlessly,</h1>
              <h1 className="font-semibold  text-[40px]">Anywhere</h1>
              <div className="mt-3 font-normal text-[15px]">
                <p className=" ">
                  Experience high-quality video conferencing with Meet Stream.
                </p>
                <p className="">
                  Join meetings effortlessly from any device and stay connected
                </p>
                <p className="">with your team, family, and friends</p>
              </div>
              <div className="mt-10 flex gap-5">
                <button className="bg-[#17153B] border-[3px] px-5 py-2 rounded-md text-white opacity-85">
                  join a meeting
                </button>
                <Link href={"/create-meeting"}>
                <button  className="bg-[#17153B] border-[3px] px-5 py-2 rounded-md text-white opacity-85">
                  host a meeting
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full py-[84px] mr-[75px]">
            <Image alt={"image"} src={videoConfrencing} />
          </div>
        </div>
      </div>
    </div>
  );
}
