"use client";

import Image from "next/image";
import Link from "next/link";
import login from '../../../../public/login.svg';

export default function SignIn() {
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
            <div className=" font-semibold text-[#333333] ">about us</div>
            <div className="px-4 font-medium cursor-pointer rounded-md flex items-center justify-center border-[#2E236C] border-[3px] w-[100px] h-[40px]">
              <Link href={"/sign-in"}>sign in</Link>
            </div>
            <div className="px-4 font-medium cursor-pointer rounded-md flex items-center justify-center border-[#2E236C] border-[3px] w-[100px] h-[40px]">
              <Link href={"/sign-up"}>sign up</Link>
            </div>
          </div>
        </div>
        <div className="w-[90vw] py-5 px-20 flex items-center justify-center  h-[83vh] mt-[30px]">
          <div className="w-full h-full  px-32">
            <div className="w-full h-full px-10">
              <div className="bg-[#B8AADE] rounded-2xl opacity-44 flex w-full h-full">
                <div className="w-1/2 pl-[55px] h-full rounded-s-2xl">
                  <div className=" pt-[45px]">
                    <h1 className="font-bold text-[#17153B] text-2xl">Login</h1>
                  </div>
                  <div className="pt-3 text-[#737373] text-[14px] flex">
                    <p>Does'nt have an account ?</p>
                    <Link className="underline" href={"/sign-up"}>
                      Sign up
                    </Link>
                  </div>
                  <div className="pt-[20px] flex flex-col">
                    <h1 className="text-[#2E236C] font-bold text-[17px]">
                      Email adress
                    </h1>
                    <input
                      placeholder="Enter your email"
                      className="pl-2 placeholder:text-zinc-600 text-zinc-800 text-[14px] flex items-center  placeholder:text-[12px] w-[300px] border-[#2E236C] border-[3px] rounded-md h-10 bg-transparent mt-2"
                    />
                  </div>
                  <div className="pt-[20px] flex flex-col">
                    <h1 className="text-[#2E236C] font-bold text-[17px]">
                      password
                    </h1>
                    <input
                      placeholder="Enter your password"
                      className="pl-2 placeholder:text-zinc-600 text-zinc-800 text-[14px] flex items-center  placeholder:text-[12px] w-[300px] border-[#2E236C] border-[3px] rounded-md h-10 bg-transparent mt-2"
                    />
                  </div>
                  <div className="pt-[20px]">
                    <button className="w-[300px] h-[40px] bg-[#2E236C] text-white rounded-md">Sign in</button>
                  </div>
                  <div className="w-[300px] flex justify-center py-2">or</div>
                  <div>
    <button className="px-4 py-2 w-[300px] items-center justify-center border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Google</span>
    </button>
                  </div>
                  
                </div>
                <div className="w-1/2 flex items-center justify-center bg-[rgba(251,250,252,0.44)] h-full rounded-e-2xl">
                <div className="z-333333">
                <Image className="mr-10 z-333" src={login} alt="login"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
