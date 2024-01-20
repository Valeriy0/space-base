import React from "react";
import { BackButton } from "../../../components";
import { Header } from "../../../features/clicker/components/Header";
import { InviteBonus } from "../../../features/clicker/earn/inviteBonus";
import { Onboarding } from "../../../features/clicker/earn/onboarding";
import { ClickerLayout } from "../../../layouts/ClickerLayout";




export const Earn = () => {
  return (
    <ClickerLayout parentStyle='space-y-6'>
      <div className="flex flex-col space-y-7">
        <Header minHeight="min-h-[200px]">
            <span className="text-4xl text-white font-semibold z-[1] ">Earn more coin</span>
            <img className="absolute bottom-0 left-2 z-[1] w-[84px]" src="/clicker/earn/header/botPinkFrgx.png"/>
            <img className="absolute top-0 right-0 z-[1] w-[106px]" src="/clicker/earn/header/topPinkFrgx.png"/>
            <BackButton href="/clicker" />
        </Header>
        <button>
          <span className="text-[#4383FF]">Full guide</span>
        </button>
      </div>
      <InviteBonus />
      <Onboarding />
      <img className="absolute bottom-0 z-[0] w-full" src="/clicker/boost/bottomShadow.png"/>
    </ClickerLayout>
  );
}