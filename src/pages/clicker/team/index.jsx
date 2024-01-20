import React from "react";
import { BackButton } from "../../../components";
import { Header } from "../../../features/clicker/components/Header";

import { ReferalLink } from "../../../features/clicker/team/referalLink";
import { YourTeam } from "../../../features/clicker/team/yourTeam";
import { ClickerLayout } from "../../../layouts/ClickerLayout";


export const Team = () => {
  return (
    <ClickerLayout parentStyle='space-y-8'>  
      <Header minHeight="min-h-[200px]">
          <span className="text-sm text-white opacity-60">Your Team</span>
          <div className="flex items-center justify-center space-x-2.5 z-[1]">
            <span className="text-4xl text-white font-semibold">13 Players</span>
            <img src="/clicker/team/header/heart.png"/>
          </div>
          <BackButton href="/clicker" />
      </Header>
      <ReferalLink />
      <YourTeam />
      <img className="absolute bottom-0 z-[0] w-full" src="/clicker/boost/bottomShadow.png"/>  
    </ClickerLayout>  
  );
}