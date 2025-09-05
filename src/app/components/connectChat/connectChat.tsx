import React, { useState } from 'react'
import Switcher from '../switcher/switcher'

export default function ConnectChat() {
  const [isPrivate, setIsPrivate] = useState(false);
  return (
    <div className="w-full flex justify-between  border-[1px] border-[#E3E8EF] rounded-[8px] h-[56px] items-center px-[18px]">
    <p className='text-[18px] text-[#000000] font-sans-georgian font-bold'>ჩატში გაწევრიანების ტიპი</p>
    <div className="flex gap-[10px] items-center">
    <p className='text-[18px] text-[rgba(0,0,0,0.60)] font-sans-georgian font-bold'>{isPrivate ? 'დახურული' : 'საჯარო'}</p>
      <Switcher initial={false} onToggle={setIsPrivate} />
    </div>
  </div>
  )
}
