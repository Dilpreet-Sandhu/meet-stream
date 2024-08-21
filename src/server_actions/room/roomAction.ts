'use server'
import { auth } from "@/auth";
import dbConnect from "@/database/connection";
import { Room } from "@/models/roomModel";
import uniqid from "uniqid";



export async function createMeeting(formData : any) {
    try {
    
        const connection = await dbConnect();
     
    
        const members = formData.members.map((member: any) => member._id);
    
 
    
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
          date: formData.date,
          time: formData.time,
          hostId: user?.id,
          members,
          meetingCode: code,
          status: "hasn't started",
          options: {
            screenShare: formData.options.screenShare,
            scheduleForLater: formData.options.scheduleForLater,
            allowEveryOneToJoin: formData.options.allowEveryOneToJoin,
            allowEveryOneToMessage: formData.options.allowEveryOneToMessage,
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