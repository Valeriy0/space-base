import React from "react";

import { NFTPremiumSkins } from "../../../features/clicker/profile/NFTPremiumSkins";
import { NFTSkins } from "../../../features/clicker/profile/NFTSkins";
import { Header } from "../../../features/clicker/components/Header";
import { ReferalLink } from "../../../features/clicker/team/referalLink";
import { YourTeam } from "../../../features/clicker/team/yourTeam";
import { BackButton } from "../../../components";
import { ClickerLayout } from "../../../layouts/ClickerLayout";


export const Profile = () => {
  return (

        <ClickerLayout parentStyle='space-y-8'> 
          <Header minHeight="min-h-[414px]">
                <div className="flex flex-col items-center justify-between px-4 z-[1] space-y-4 w-full h-full pt-[56px] pb-4 w-full">
                    <img className="rounded-full w-[120px] h-[120px]" src="/clicker/main/cat.png" />
                    <div className="flex flex-col items-center">
                        <span className="text-sm text-white opacity-60">Your balance</span>
                        <div className="flex space-x-2.5 items-center ">
                            <img className="w-10 h-10" src="/clicker/profile/header/pinkFrgx.png"/>
                            <span className="text-[44px] text-white font-semibold">527,061</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <span className="text-xl text-white opacity-60">Total Profit</span>
                            <div className="flex items-center justify-center space-x-1">
                                <img className="w-4 h-4" src="/clicker/profile/header/pinkFrgx.png"/>
                                <span className="text-xl text-white">12,000,000</span>
                            </div>
                        </div>
                    </div>
                    <button className="flex items-center justify-center bg-white-200 w-full h-[70px] rounded-[20px]">
                        <span className="text-2xl text-white">Claim</span>
                    </button>
                </div>
                <img className="absolute z-[0] w-full" src="/clicker/profile/header/shadow.png"/>
                <BackButton href="/clicker" />
            </Header>
            <NFTPremiumSkins />
            <NFTSkins />
            <img className="absolute bottom-0 z-[0] w-full" src="/clicker/boost/bottomShadow.png"/>
        </ClickerLayout>
  );
}