import React, { useState } from "react";
import { Navigation } from "./Navigation";
import { useModal } from "../../../helpers/hooks/useModal";
import { LoginModal } from "../../../components/modals";
import { Burger } from "../../../components/Burger";
import { useWeb3React } from "@web3-react/core";

export const Header = () => {
  const { openedModal, onOpen, onClose } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const { account } = useWeb3React();

  const navList = [
    {
      title: 'Projects',
      href: '',
    },
    {
      title: 'Roadmap',
      href: '',
    },
    {
      title: 'About',
      href: '',
    },
    {
      title: 'FAQ',
      href: '',
    }
  ];

  return (
    <header className="fixed top-0 bg-[#0D0E0F] flex items-center justify-center w-full py-7 sm:py-4 px-4 z-[111]">
      <div className="w-full max-w-[1224px]  flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start">
          <a href="/">
            <img className="max-h-[38px] h-full sm:max-h-[32px]" src="/main/space-logo.svg" alt="" />
          </a>
        </div>
        <Navigation menuList={navList} />
        <div className="flex-1 flex items-center justify-end sm:hidden">
          <button onClick={() => onOpen()} className="text-black bg-white py-2.5 px-10 rounded-3xl">Login {account}</button>
        </div>
        <button className="hidden sm:flex" onClick={() => setIsOpen(true)}>
          <img src="/icons/menu_burger.svg" alt="" />
        </button>
        <Burger menuList={navList} isOpen={isOpen} setIsOpen={setIsOpen} /> 
      </div>
      <LoginModal onClose={onClose} openedModal={openedModal} />
    </header>
  )
}