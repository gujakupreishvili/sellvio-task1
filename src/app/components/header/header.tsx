import React from 'react'
import logo from  "../../../../public/assets/logo.svg"
import Image from 'next/image'
import Button from '../button/button'
import searchIcon from "../../../../public/assets/search.svg"
import userIcon from  "../../../../public/assets/gg_profile.svg"
import notification from "../../../../public/assets/notification-alarm-bell_svgrepo.com.svg"

export default function Header() {
  return (
    <div className='flex justify-between pl-[32px] pr-[23px] pt-[17px]'>
      <Image  src={logo} alt='logo'/>
      <div className='flex items-center gap-[16px]'>
       <Button Img={searchIcon} className='w-[50px] h-[50px] rounded-[8px] border-[1px] border-[#0000001A] flex items-center justify-center'  />
       <Button Img={userIcon} className='w-[50px] h-[50px] rounded-[8px] border-[1px] border-[#0000001A] flex items-center justify-center'  />
       <Button Img={notification} className='w-[50px] h-[50px] rounded-[8px] border-[1px] border-[#0000001A] flex items-center justify-center'  />
      </div>
    </div>
  )
}
