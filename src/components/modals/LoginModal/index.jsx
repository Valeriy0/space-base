import React from 'react';
import { Modal } from '../../Modal';


export const LoginModal = ({ onClose, openedModal }) => {

  const styleBg = {
    backgroundImage: 'url(/main/loginModal/bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }

  return (
    <Modal isOpened={openedModal} onClose={onClose} isDisableOnClose>
      <div style={styleBg} className="relative flex items-end p-6 pb-[48px] bg-[#0D0E0F] rounded-[30px] w-[428px] h-[473px]">
        <button onClick={() => onClose()} className='absolute top-6 right-6 bg-black-300 flex items-center justify-center h-[48px] w-[48px] rounded-[16px] border border-white-50'>
          <img src="/icons/close.svg" alt="" />
        </button>
        <div className="flex flex-col">
          <span className='poppins text-2xl font-semibold text-white mb-10'>Login to FRGX Space</span>
          <div className="flex items-center space-x-2.5 mb-6">
            <input className='py-1 px-5 flex-1 h-[56px] rounded-[16px] bg-[#1C1D1E] border border-white-50' type="text" placeholder='Email' />
            <button className='flex items-center justify-center p-3 rounded-[16px] bg-[#1F86FF]'>
              <img src="/icons/arrow_long_right.svg" alt="" />
            </button>
          </div>
          <span className='text-xs text-white-600 font-light leading-[17px]'>
            By continuing you agree to our Terms & Privacy&nbsp;Policy and Privy's&nbsp;Terms.
          </span>
        </div>
      </div>
    </Modal>
  );
};
