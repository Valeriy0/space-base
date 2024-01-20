import React from "react";

export const Footer = () => {

  const footerNavs = {
    'Website': [
      {
        title: 'frgx.finance',
        href: '/',
      },
      {
        title: 'frgx.space',
        href: '/',
      },
    ],
    'Help': [
      {
        title: 'Support Center',
        href: '/',
      },
      {
        title: 'GitBook',
        href: '/',
      },
    ],
    'Telegram': [
      {
        title: 'FRGX Bot',
        href: '/',
      },
      {
        title: 'FRGX Finance',
        href: '/',
      },
    ],
  }

  const colItem = (col, array) => {
    return array[col].map((item, itemIndex) => {
      return (
        <a className="" key={itemIndex}>{item?.title}</a>
      )
    })
  }

  return (
    <footer className="flex flex-col max-w-[1224px] w-full pb-10 pt-[165px] px-4 sm:pt-[70px]">
      <div className="flex justify-between w-full sm:flex-col sm:space-y-6">
        <div className="flex flex-col space-y-7 max-w-[360px] w-full sm:max-w-full sm:space-y-6">
          <span className="poppins font-semibold text-2xl sm:text-xl">Subscribe News</span>
          <input className="h-[48px] bg-[#171819] border border-white-10 px-5 py-1 rounded-[16px]" type="email" placeholder="Email" />
        </div>
        {Object.keys(footerNavs).map((col, colIndex) => {
          return (
            <div className="flex flex-col space-y-7 sm:space-y-5" key={colIndex}>
              <span className="poppins text-2xl font-semibold sm:text-xl">{col}</span>
              <div className="flex flex-col space-y-2.5 text-white-600">
                {colItem(col, footerNavs)}
              </div>
            </div>
          )
        })}
      </div>
      <hr className="border-t border-[#272829] my-10" />
      <div className="flex justify-between w-full sm:flex-col sm:justify-center">
        <img className="max-h-[38px] h-full sm:max-h-[32px] sm:order-2 sm:mt-6" src="/main/space-logo.svg" alt="" />
        <div className="sm:order-1 flex flex-col justify-center items-center">
          <span className="hidden sm:block poppins text-xl font-semibold">Join us</span>
        </div>
      </div>
    </footer>
  )
}