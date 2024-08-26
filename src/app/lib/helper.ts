'use client'
import { addMemberByCode } from "@/server_actions/room/roomAction";
import { redirect } from "next/navigation";
import { ReactElement, useState } from "react";
import toast from "react-hot-toast";

interface buttonInter {
  name:
    | "screenShare"
    | "scheduleForLater"
    | "allowEveryoneToJoin"
    | "allowEveryoneToMessage";
    text : string
}

export const optionsButtons : buttonInter[] = [
  {
    name: "screenShare",
    text: "screen share",
  },
  {
    name: "scheduleForLater",
    text: "schedule for later",
  },
  {
    name: "allowEveryoneToJoin",
    text: "allow everyone to join",
  },
  {
    name: "allowEveryoneToMessage",
    text: "allow everyone to message",
  },
];


export const useAsyncMutation  = (mutationHook : any) => {
      const [loading,setLoading] = useState(false);
      const [data,setData] = useState<null | any>(null);
      const [error,setError] = useState(null);

      const [mutation] = mutationHook();

      
       async function executeMutation(message : string,...args : any) {
        const toastId = toast.loading(message);
          setLoading(true);

          try {
            const res = await mutation(...args);

            console.log(res);

            if (res.data) {
              toast.success("request hit endpoint successfully",{id : toastId});
              setData(res.data);
            }else {
              toast.error("couldn't send request",{id : toastId})
            }

          } catch (error : any) {
              setError(error);
              setLoading(false);
          }finally {
            setLoading(false)
          }
      }


      return [data,executeMutation,loading,error]


}


// export const apiCall = async (roomData : Record<string,any>) => {
//   try {
//     const toastId = toast.loading("making request");
//     const res = await fetch("http://localhost:3000/api/meeting/create",{
//       method : 'POST',
//       body : JSON.stringify(roomData)
//     });
//     const data = await res.json();
//     console.log(data);
//     toast.success("request sent successfully",{id : toastId});
// } catch (error) {
//     console.log(error);
// }
//  }


