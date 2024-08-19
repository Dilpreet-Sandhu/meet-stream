import { ReactElement } from "react";

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
