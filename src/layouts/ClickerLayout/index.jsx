import React from "react";
import { BackButton } from "../../components";

export const ClickerLayout = ({ children, parentStyle = '' }) => {

  const styleBg = {
    backgroundImage: 'url(/clicker/mainBg/bg-brony.svg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  return (
    <div style={styleBg} className="flex flex-col w-full min-h-screen h-full items-center justify-center overflow-auto"> 
        <div className="relative flex flex-col items-center justify-between h-full flex-1 space-y-5 max-w-[375px] sm:max-w-full max-h-[810px] sm:max-h-full w-full bg-[#050B15] rounded-[40px] sm:rounded-none app_shadow overflow-hidden border border-white-300 sm:border-none">
          <div className={`w-full h-full flex-1 flex flex-col overflow-auto ${parentStyle}`}>
            {children}
          </div>
      </div>
      
    </div>
  )
}