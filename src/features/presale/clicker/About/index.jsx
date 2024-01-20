import React from "react";

export const About = () => {
  return (
    <div className="flex items-start justify-between w-full space-x-5 sm:flex-col sm:space-x-0 sm:space-y-[32px] max-w-[1224px]">
      <div className="flex flex-col space-y-[32px] max-w-[580px] sm:px-4 sm:space-y-6">
        <span className="poppins font-semibold text-[40px] leading-[42px] sm:text-xl sm:leading-[26px]">Clix Game</span>
        <span className="text-white-600 font-light sm:text-sm">
          The DeFi market is experiencing significant growth. While it's still maturing, there's great opportunity for new products to gain a massive audience quickly.Get early access to decentralized finance with lightning fast transactions while scaling up with massive audience  experiencing significant growth. While it's still maturing, there's great opportunity for new products to gain a massive audience 
        </span>
      </div>
      <img className="h-[240px] max-w-[496px] rounded-[30px] sm:max-w-full" src="/presale/about.svg" alt="" />
    </div>
  )
}