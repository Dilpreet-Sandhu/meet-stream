import Image from "next/image";
import search from "../../../../public/search.svg";
import SearchedUser from "../searchedUser";

export default function SearchUsers() {
  return (
    <div className="flex flex-col w-full h-full">
      <form className="flex relative">
        <input
          placeholder="invite people"
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
      <div className=" flex  items-center w-full h-full ">
        <SearchedUser/>
      </div>
    </div>
  );
}
