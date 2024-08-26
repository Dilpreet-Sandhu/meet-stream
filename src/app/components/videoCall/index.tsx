"use client";

import { useEffect, useState } from "react";
import microPhoneIcon from "../../../../public/microphone-solid.svg";
import Image from "next/image";

const startMediaStream = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    const videoElement = document.getElementById("local-video") as HTMLVideoElement;
    if (videoElement) {
        videoElement.srcObject = stream;
    }
  } catch (error: any) {
    console.log("error accessing the media devices" + error);
  }
};

const createConnection = (setScreenCount : any) => {
    const config : RTCConfiguration = {
      iceServers : [
        {urls : "stun:stun.l.google.com:19302"}
      ]
    };

    const peerConnection = new RTCPeerConnection(config);

    peerConnection.onicecandidate = e => {
      if (e.candidate) {
        sendIceCandidates(e.candidate);
      }
    }

    peerConnection.ontrack = e => {
      setScreenCount(2);
      const remoteVideoELement = document.getElementById("remote-video") as HTMLVideoElement;
      if (remoteVideoELement) {
        remoteVideoELement.srcObject = e.streams[0];
      }
    }
    

    return peerConnection;

}

const sendIceCandidates = (candidate : RTCIceCandidate) => {
  //send ice candiate to other peer
}

const sendOffer = async (peerConnection : RTCPeerConnection) => {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
}

const handleOffer = async (offer : RTCSessionDescriptionInit,peerConnection : RTCPeerConnection) => {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer); 

    //send the answer the remote peer
}



export default function VideoStreams() {
  const [userCount, setUserCount] = useState(1);
  
  useEffect(() => {
    const connectPeers = async () => {
      const peerConnection =  createConnection(setUserCount);

      await startMediaStream();

      const localStream = (document.getElementById("local-video") as HTMLVideoElement).srcObject as MediaStream;

      localStream.getTracks().forEach((track) => peerConnection.addTrack(track,localStream));

      sendOffer(peerConnection);


    }
    connectPeers();
  })
  
  return (
    <div
      className={`w-full h-full grid gap-2 ${
        userCount == 1
          ? "grid-cols-1 grid-rows-1"
          : userCount == 2
          ? "grid-cols-2 grid-rows-1"
          : userCount == 3
          ? "grid-cols-3 grid-rows-1"
          : "grid-rows-2 grid-cols-2"
      }`}
    >
      {RenderVideos({ userCount })}
    </div>
  );
}

function RenderVideos({ userCount }: { userCount: number }) {
  const videos: Array<React.JSX.Element> = [];

  for (let i = 0; i < userCount; i++) {
    videos.push(
      <div
        key={i}
        className="flex  justify-center items-center bg-[#242222] rounded-md"
      >
        <div className="w-full h-full object-cover relative">
          <video
            className="z-1 w-full h-full"
            autoPlay
            playsInline
            id={`${i === 0 ? "local-video" : "remote-video"}`}
          />
          <p className="absolute right-5 top-5 bg-[#565656] opacity-49 px-3 py-1 rounded-md">
            dilpreet
          </p>
          <button className="w-7 h-7 flex items-center cursor-pointer justify-center absolute bottom-3 left-3 bg-[#565656] rounded-full">
            <Image
              alt="micro phone icon"
              className="w-4 h-4 cursor-pointer"
              src={microPhoneIcon}
            />
          </button>
        </div>
        <source src={"/"} type="video/mp4" />
      </div>
    );
  }

  return videos;
}
