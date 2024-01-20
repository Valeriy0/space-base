import React from "react";
import { BaseLayout } from "../../../layouts/BaseLayout";
import { BuyBlock } from "../../../features/presale/clicker/BuyBlock";
import { About } from "../../../features/presale/clicker/About";
import { useWeb3React } from "@web3-react/core";


export const ClickerPresale = () => {
  const { account, chainId } = useWeb3React();

  console.log(account);

  return (
    <BaseLayout parentStyle='space-y-[60px] sm:space-y-6 '>
      <div className="max-w-[1224px] w-full flex items-center justify-start text-left w-full">
        <span className="poppins text-[40px] font-semibold sm:text-[24px]">Daily NFT Presale</span>
      </div>
      <BuyBlock />
      <About />
    </BaseLayout>
  )
}