import React from 'react'
import Image, { StaticImageData } from "next/image";
type Props = {
 text?: string
 icon?: React.ElementType | undefined
 Img?:StaticImageData
 className: string; 
 pTagStyle?:string
 iconStyle?:string
}

export default function Button({ text, icon: Icon, Img , className ,pTagStyle,iconStyle }: Props) {
  return (
   <button className={`${className}`}>
    {Icon && <Icon className={`${iconStyle}`} />}
    {Img && <Image src={Img} alt="button icon" width={20} height={20} />}
    {text && <p className={`${pTagStyle}`}>{text}</p>}
   </button>
  )
}
