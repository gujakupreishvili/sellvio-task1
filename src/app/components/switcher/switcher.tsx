import React, { useState } from 'react';

interface SwitcherProps {
  initial?: boolean;
  onToggle?: (state: boolean) => void;
}

const Switcher = ({ initial = false, onToggle }:SwitcherProps) => {
  const [isOn, setIsOn] = useState(initial);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-[40px] h-[22px] rounded-[100px]  p-0.5 relative transition-colors duration-200 cursor-pointer ${
        isOn ? 'bg-[#0866FF]' : 'bg-[#D2D5DA]'
      }`}
    >
      <span
        className={`block w-[18px] h-[18px] bg-white rounded-[100px] absolute top-0.5 transition-left duration-200 ${
          isOn ? 'left-[20px]' : 'left-0.5'
        }`}
      />
    </button>
  );
};

export default Switcher;

