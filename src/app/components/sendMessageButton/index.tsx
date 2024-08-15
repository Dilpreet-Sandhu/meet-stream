

import Image from 'next/image'
import plane from '../../../../public/paper-plane-solid.svg';

export default function SendButton() {
  return (
    <button className="mr-2 w-[45px] h-[45px] rounded-sm bg-[#C8ACD6] flex items-center justify-center"><Image alt="plane" className="w-[25px] h-[25px]" src={plane}/></button>

  )
}
