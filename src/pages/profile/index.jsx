import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";

export const ProfilePage = () => {
  return (
    <BaseLayout parentStyle='space-y-[70px] sm:space-y-6 max-w-[1224px] w-full'>
      <div className="relative w-full">
        <div className="bg-white-500 w-full h-[300px] rounded-[30px]"></div>
        <div className="absolute bottom-[-15%] left-[30px] p-2.5 rounded-[30px] bg-white z-10 h-[132px] w-[132px]">
          <div className="bg-black w-full h-full rounded-[20px]"></div>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex flex-col max-w-[600px] w-full space-y-[30px]">
          <div className="">
            <span className="text-[32px] poppins font-semibold">Meo World</span>
          </div>
          <span className="text-white-600 font-light">
            The DeFi market is experiencing significant growth. While it's still maturing, there's great opportunity for new products to gain a massive audience quickly.Get early access to decentralized finance with lightning fast transactions while scaling up with massive audience  experiencing significant growth. While it's still maturing, there's great opportunity for new products to gain a massive audience 
          </span>
          <div className="">
            <button className="bg-[#7355F0] rounded-[16px] py-4 px-5">Explore MEO World</button>
          </div>
        </div>

        <div className="flex flex-col bg-[#1C1D1E] border border-white-50 p-6 space-y-3 h-fit min-w-[253px] rounded-[20px]">
          <span className="text-white-400">Followers</span>
          <span className="text-[32px] font-semibold poppins">7,000</span>
        </div>
      </div>
      
    </BaseLayout>
  )
}