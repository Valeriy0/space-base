import React from "react";
import { BackButton } from "../../../components";
import { Boosters } from "../../../features/clicker/boost/boosters";

import { NftSkins } from "../../../features/clicker/boost/nftSkins";
import { Header } from "../../../features/clicker/components/Header";

import { ClickerLayout } from "../../../layouts/ClickerLayout";
export const Boost = () => {
  return (
    <ClickerLayout parentStyle='space-y-8'> 
      <Header minHeight="min-h-[200px]">
          <img className="z-[1]" src="/clicker/boost/header/rockets.png"/>
          <BackButton href="/clicker" />
      </Header >
      <Boosters />
      <NftSkins />
      <img className="absolute bottom-0 z-[0] w-full" src="/clicker/boost/bottomShadow.png"/>
    </ClickerLayout>
  );
}