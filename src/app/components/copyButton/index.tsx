'use client'
import Image from "next/image";
import copy from "../../../../public/copy.svg";
import toast from "react-hot-toast";
const CopyButton = ({copyFn} : {copyFn : () => Promise<void>}) => {
  return (
    <button onClick={() => {
        copyFn();
        toast.success("code copied successfully")
    }} className="pl-2 cursor-pointer">
      <Image
        alt="clone"
        className="w-[23px] h-[23px] z-1 ml-2 cursor-pointer fill-white"
        src={copy}
      />
    </button>
  );
};

export default CopyButton;
