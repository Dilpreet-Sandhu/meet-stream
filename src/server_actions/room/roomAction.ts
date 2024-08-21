'use server'
import { auth } from "@/auth";
import dbConnect from "@/database/connection";
import { Room } from "@/models/roomModel";
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
          date: formData.date == "2024-05-05" || date.getUTCDate(),
          time: formData.time == "08:30" || date.getHours(),
          hostId: user?.id,
          members,
          meetingCode: code,
          status: "hasn't started",
          options: {
            screenShare: formData.options.screenShare || false,
            scheduleForLater: formData.options.scheduleForLater || false,
            allowEveryOneToJoin: formData.options.allowEveryOneToJoin || false,
            allowEveryOneToMessage: formData.options.allowEveryOneToMessage || false,
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