import React from 'react'
import Image, { StaticImageData } from "next/image";
type Props = {
 text?: string
 icon?: React.ElementType
 Img?:StaticImageData
 className: string; 
 pTagStyle?:string
}

export default function Button({ text, icon: Icon, Img , className ,pTagStyle}: Props) {
  return (
   <button className={`${className}`}>
    {Icon && <Icon size={20} />}
    {Img && <Image src={Img} alt="button icon" width={20} height={20} />}
    {text && <p className={`${pTagStyle}`}>{text}</p>}
   </button>
  )
}
