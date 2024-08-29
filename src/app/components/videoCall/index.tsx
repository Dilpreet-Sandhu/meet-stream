"use client";

import { context } from "@/context/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import microPhoneIcon from "../../../../public/microphone-solid.svg";


export default function VideoStreams({data} : {data : any}) {
  const [userCount, setUserCount] = useState(1);
  const refs = useContext(context);
  const {socket,streamState,video} = useContext(context);

  

  
  useEffect(() => {
    const peerConnection = new RTCPeerConnection({
      iceServers : [{urls : ["stun:stun.l.google.com:19302"]}]
    });
    const connectPeers = async () => {

        peerConnection.onicecandidate = e => {
          if (e.candidate) {
            socket.emit("candidate",e.candidate)
          }
        }

        peerConnection.ontrack = e => {
          setUserCount(2);
          const remoteVideo = refs.videoRef2;
          if (remoteVideo) {
            console.log(e.streams);
            remoteVideo.current.srcObject = e?.streams[0];
          }
        }

        socket.on("offer",async (offer : any) => {
          console.log(offer);
            await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
            socket.emit("answer",answer)
        })

        socket.on("answer",async (answer : any) => {
            await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
            console.log(answer)
        })

        socket.on("candidate",async (candidate : any) => {
          try {
            await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
          } catch (error) {
            console.log("error while recieving ice candidates",error);
          }
        })
    };
    const startMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video : true,audio : true});
        if (stream) {
          streamState.current = stream.getVideoTracks()[0];
          console.log("stream " +streamState.current)
        }
        const localVideo = refs.videoRef1;
        
        if (localVideo) {
            localVideo.current.srcObject = stream;
        }
        stream.getTracks().forEach(track => {
          peerConnection.addTrack(track,stream);
        });

 
          const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        socket.emit("offer",offer);
        
      } catch (error) {
        console.log("error while starting media stream" + error);
      }
    }

      connectPeers();
    
    startMediaStream();

    return () => {
      socket.off('offer');
      socket.off('answer');
      socket.off('candidate');
    }
  });
  useEffect(() => {
    if (video) {
      refs.videoRef1.current.style.display = "none";
    }
  },[video])

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
      {RenderVideos({ userCount,refs,video })}
    </div>
  );
}

function RenderVideos({ userCount,refs,video }: { userCount: number,refs : any ,video : boolean}) {
  const videos: Array<React.JSX.Element> = [];

  const {videoRef1,videoRef2,videoRef3} = refs;

 


  for (let i = 0; i < userCount; i++) {
    videos.push(
      <div
        key={i}
        className={`flex  justify-center items-center bg-[#242222] rounded-md`}
      >
        <div className="w-full h-full object-cover relative">
          <video
            ref={i === 0 ? videoRef1 : i == 1 ? videoRef2 : videoRef3}
            className={` w-full  h-full`}
            autoPlay
            playsInline
            id={`${i == 0 ? "local-vid" : "remote-vid"}`}
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
