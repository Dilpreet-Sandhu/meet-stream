'use server'
import { auth } from "@/auth";
import dbConnect from "@/database/connection";
import { Room } from "@/models/roomModel";
import { redirect } from "next/navigation";
import uniqid from "uniqid";



export async function createMeeting(formData : any) {
    try {
    
        const connection = await dbConnect();
     
    
        const members = formData.members.map((member: any) => member._id);
    
      const date = new Date();
    
        const session = await auth();
        const user = session?.user;
    
        if (!session) {
          return {
            message : "you are not logged in"
          }
        }
        const code = uniqid();
    
        const room = await Room.create({
          title: formData.title,
          description: formData.description,
          date: formData.date == "2024-05-05" || date,
          time: formData.time == "08:30" || date,
          hostId: user?.id,
          members,
          meetingCode: code,
          status: "hasn't started",
          options: {
            screenShare: formData?.options?.screenShare ,
            scheduleForLater: formData?.options?.scheduleForLater ,
            allowEveryOneToJoin: formData?.options?.allowEveryOneToJoin ,
            allowEveryOneToMessage: formData?.options?.allowEveryOneToMessage,
          },
        });
    
        console.log(room);
    
        if (!room) {
          return {
            message : "couldn't create room"
          }
        }

        return {
            data : room,
            message : "room created successfully"
        }
      } catch (error : any) {
        console.log(error);
        return {
            message : error
        }
      }
}

export async function getMeetingDetails(id : string) {
  try {
    if (!id) {
      return {
        messag : "no room id found"
      }
    }

    const room = await Room.findById(id);

    if (!room) {
      return {
        message : "invalid room id"
      }
    }

    return {
      message : "successfully fetched room ",
      data : room
    }
 
  } catch (error) {
    console.log(error);
    return {
      message : error
    }
  }
}

export async function addMemberByCode(code : string,userId : string) {
    try {
        if (!code) {
          return {
            message : "please provide room code"
          }
        }
        if (!userId) {
          return {
            message : "you should be logged in to access rooms"
          }
        }
        const room = await Room.findOne({meetingCode : code});

        if (!room) {
          return {
            message :'invalid room code'
          }
        }
        if (room.members.includes(userId)) {
            return
        }
        

        room.members.push(userId);
        await room.save({validateBeforeSave :false});
      

        return {
          data : room,
          message :"entered room successfully"
        }

    } catch (error : any) {
      console.log(error);
      return {
        message : error
      }
    }
}


export async function leaveMeeting() {
  try {
    
    const session = await auth();
    const userId = session?.user.id;
    console.log(userId);

    const room = await Room.findOne({members : {$in : [userId]}});
    room.members = room.members.filter((member : any) => member.toString() !== userId);
    await room.save();

    console.log(room);


    if (!room) {
      return {
        message : "invalid userId"
      }
    }

    return {
      message : "left room successfully"
    }



  } catch (error) {
    console.log(error);
  }
}