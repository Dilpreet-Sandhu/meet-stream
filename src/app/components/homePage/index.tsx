'use client'

import Image from "next/image";
import videoConfrencing from "../../../../public/videoConfrencing.svg";
import {motion} from 'framer-motion';

export default function HomePageImg() {
  return (
    <motion.div

    initial={{opacity  : 0,x : "10%"}}
    whileInView={{opacity:1,x: "0"}}
    transition={{ease:"easeInOut"}}

     className="w-1/2 h-full py-[84px] mr-[75px]">
      <Image alt={"image"} src={videoConfrencing} />
    </motion.div>
  );
}
