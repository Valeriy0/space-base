import React from "react";
import { CoinMarketCap } from "../../features/mainPage/CoinMarketCap";
import { Features } from "../../features/mainPage/Features";
import { PlatformFeatures } from "../../features/mainPage/PlatformFeatures";
import { ProjectLaunch } from "../../features/mainPage/ProjectLaunch";
import { ProjectList } from "../../features/mainPage/ProjectsList";
import { SliderComp } from "../../features/mainPage/SliderComp";
import { BaseLayout } from "../../layouts/BaseLayout";

export const MainPage = () => {
  return (
    <BaseLayout parentStyle='space-y-[60px] sm:space-y-6 '>
        <SliderComp />
        <ProjectList />
        <Features />
        <ProjectLaunch />
        <CoinMarketCap />
        <PlatformFeatures />
    </BaseLayout>
  )
}