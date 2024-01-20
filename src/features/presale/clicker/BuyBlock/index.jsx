import React, { useState } from "react";
import { cardList } from "../../../../helpers/cards";
import { useModal } from "../../../../helpers/hooks/useModal";
import { ActivateModal } from "../../../../components/modals/ActivateModal";

export const BuyBlock = () => {
  const [currentNumCard, setCurrentNumCard] = useState(0);
  const { openedModal, onOpen, onClose } = useModal();

  const paramItem = (item) => {
    console.log(item)
      switch (item?.type) {
        case 'clix': 
          return <div className="flex items-center space-x-1.5"> <span>+ {item?.value}</span> <img className="w-5 h-5" src="/clicker/clix.png" alt="" /></div>;
        case 'multitap':
        case 'energy restore':
        case 'energy limit':
          return `level ${item?.value}`;
        case 'price':
          return `${item?.value} BNB`;
        case 'skin':
          return <span className="uppercase">{item?.value}</span>;
        default:
          return item?.value;
      }
  }

  const convernImgUrl = (name) => {
    return `/presale/cards/${name.replaceAll(' ', '')}.png`;
  }

  return (
    <div className="bg-[#121314] border border-white-50 px-5 flex justify-between rounded-[40px] max-h-[567px] sm:px-0 sm:bg-transparent sm:border-none sm:flex-col sm:justify-start sm:max-h-fit sm:space-y-6 max-w-[1224px] w-full">
      <div className="py-5 flex items-center justify-center sm:py-0">
        <img className="w-[392px] sm:w-auto" src={convernImgUrl(cardList[currentNumCard].name)} alt="" />
      </div>
      <div className="w-[392px] flex flex-col py-5 sm:py-0">
        <div className="flex items-center justify-start space-x-2 mb-10 sm:mb-6 sm:pl-5">
          <img className="w-[32px]" src="/clicker/icon.svg" alt="" />
          <span className="text-xl font-semibold sm:text-base">CLIX Game</span>
          <img className="w-4 h-4" src="/main/verif.svg" alt="" />
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-5 sm:mb-6">
          {cardList[currentNumCard]?.attributes.map((item, itemIndex) => {
            return (
              <div className="flex flex-col bg-[#1C1D1E] p-6 space-y-3 rounded-[20px] sm:p-4 sm:space-y-2" key={itemIndex}>
                <span className="text-white-400 capitalize">{item?.type}</span>
                <div className="font-semibold text-xl leading-[20px]">
                  {paramItem(item)}
                </div>
              </div>
            )
          })}
        </div>
        <div className="space-y-5 flex flex-col sm:space-y-6">
          <button onClick={() => onOpen()} className="bg-[#1F86FF] rounded-[16px] p-5 font-bold sm:text-sm">Buy Now for 0.05 BNB</button>
          <div className="flex items-center justify-center space-x-1.5 sm:text-xs">
            <span>Sale ends in</span>
            <span>timer</span>
          </div>
        </div>
      </div>
      <div className="w-[300px] flex flex-col overflow-auto space-y-2.5 pt-5 sm:w-full sm:max-h-[380px] sm:pt- sm:border sm:border-white-100 sm:p-4 sm:rounded-[24px]">
        {cardList.map((item,itemIndex) => {
          return (
            <div onClick={() => setCurrentNumCard(itemIndex)} className="cursor-pointer flex items-center bg-[#1C1D1E] rounded-[20px] space-x-10 p-2.5" key={itemIndex}>
             <img className="h-[120px] sm:h-[88px]" src={convernImgUrl(item?.name)} alt="" />
              <div className="flex flex-col space-y-3 sm:space-y-1">
                <span className="text-sm text-white-300 sm:text-xs">Date Sale</span>
                <span className="text-xl font-semibold text-white-300 sm:text-base">23 January</span>
              </div>
            </div>
          )
        })}
      </div>
      <ActivateModal openedModal={openedModal} handleCloseModal={onClose} />
    </div>
  )
}