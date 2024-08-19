"use server";

import { auth } from "@/auth";
import dbConnect from "@/database/connection";
import { Room } from "@/models/roomModel";
import { roomMeeting } from "@/redux/features/room";
import { getSession } from "next-auth/react";
import uniqid from "uniqid";

export async function createRoom(formData: roomMeeting) {
  try {
    await dbConnect();

    const code = uniqid();

    const session = await auth();

    if (formData.members.length > 4) {
        throw new Error("room doesn't allow more then 4 people")
    }

    const meeting = await Room.create({
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      hostId: session?.user.id,
      members: formData.members,
      meetingCode: code,
      status: "hasn't started",
      options: {
        screenShare: formData.options.screenShare,
        scheduleForLater: formData.options.scheduleForLater,
        allowEveryOneToJoin: formData.options.allowEveryoneToJoin,
        allowEveryOneToMessage: formData.options.allowEveryoneToMessage,
      },
    });

    if (!meeting) {
        throw new Error("couldn't created meeting")
    }

  } catch (error) {
    return error;
  }
}
