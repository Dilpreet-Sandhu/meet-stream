'use client'

import { createContext, ReactNode, useMemo, useRef, useState } from "react"
import io from 'socket.io-client'

export const context = createContext<any>(null);




export default function VideoContextProvider({children} : {children : ReactNode}) {

    const videoRef1 = useRef<HTMLVideoElement>();
    const videoRef2 = useRef<HTMLVideoElement>();
    const videoRef3 = useRef<HTMLVideoElement>();
    const streamState = useRef<MediaStream | null>();
    const [video,setVideo] = useState(false);

    const socket = useMemo(() => io("http://localhost:4000",{withCredentials:true}),[]);


  return (
    <context.Provider value={{videoRef1,videoRef2,socket,streamState,video,setVideo}}>
        {children}
    </context.Provider>
  )
}
