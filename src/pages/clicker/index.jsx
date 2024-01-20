import React, { useEffect, useState } from "react";
import { Counter } from "../../features/clicker/main/Counter";
import { Header } from "../../features/clicker/main/Header";
import { Menu } from "../../features/clicker/main/Menu";
import { ClickerLayout } from "../../layouts/ClickerLayout";


export const Clicker = () => {
  const startClickValue = 0
  const [click, setClick] = useState(startClickValue);
  const [energy, setEnergy] = useState(5000);


  useEffect(() => {
    if (click !== startClickValue)
    setEnergy(temp => temp-1);
  }, [click]);

  return (
    <ClickerLayout >     
      <div className="w-full h-full px-5 pt-9 pb-10 flex flex-col justify-between flex-1 space-y-8">
        <Header />
        <div className="flex flex-1 flex-col w-full items-center z-10">
          <Counter setClick={setClick} click={click} />
        </div>
        <Menu energy={energy} />
      </div>
      <img className="absolute top-0 right-0 z-[1] w-full pt-5" src="/clicker/main/stars.svg"/>
      <img className="absolute bottom-0 right-0 z-[0] w-full" src="/clicker/main/bgShadow/whiteShadow.png"/>
    </ClickerLayout>
  );
}