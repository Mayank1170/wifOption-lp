import React, { useState } from 'react';

const SwapForm = () => {
    const [selectedOption, setSelectedOption] = useState('SOL');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className='relative w-[30%] flex flex-col bg-[#151513] rounded-[40px]'>
            <img className='absolute top-[-60px] right-[-55px]' src='./assets/WIFhatImage.svg' width={"140px"} height={"140px"} />
            <img className='absolute top-[50px] left-[-250px]' src='./assets/dogWifHatImg.svg' width={"140px"} height={"140px"} />
            <img className='absolute bottom-[-30px] left-[-250px]' src='./assets/CatImg.svg' width={"140px"} height={"140px"} />
            <img className='absolute top-[20px] right-[-370px]' src='./assets/popcatImg.svg' width={"140px"} height={"140px"} />
            <img className='absolute bottom-[80px] right-[-370px]' src='./assets/iggyImg.svg' width={"140px"} height={"140px"} />
            <img className='absolute bottom-[-70px] right-[-170px]' src='./assets/bodenImg.svg' width={"140px"} height={"140px"} />

            <div className='flex justify-between'>
                <div className='w-full flex items-center justify-center p-2 rounded-tl-[40px] font-semibold text-[20px] text-[#A7A7A7] bg-[#292929]'>CALL</div>
                <div className='w-full flex items-center justify-center p-2 text-[#FF5454] font-semibold text-[20px]'>PUT</div>
            </div>
            <div className='flex flex-col gap-[5px] px-[20px] py-[10px]'>
                <div className='flex justify-around p-[6px] italic border-[1px] border-[#313131] rounded-[500px]'>
                    <button className='italic text-[#454545]'>long</button>
                    <button className='italic'>short</button>
                </div>
                <div>
                    <div className='flex justify-between p-2'>
                        <div className='px-2'>
                            <h1 className='text-[16px] text-[#7C7C7C]'>Sell</h1>
                        </div>
                        <div className='flex flex-row gap-5 px-2'>
                            <h1 className='text-[16px] text-[#7C7C7C]'>half</h1>
                            <h1 className='text-[16px] text-[#7C7C7C]'>max</h1>
                        </div>
                    </div>
                    <div className='flex justify-between bg-[#313131] p-3 rounded-[18px]'>
                        <div>
                            <input className='text-[22px] font-medium bg-transparent border-none outline-none' placeholder='2' />
                            <h1 className='text-[14px] text-[#7C7C7C]'>~$318.14</h1>
                        </div>
                        <div className='relative flex flex-col gap-3 justify-end items-end'>
                            <div className='w-[fit] flex gap-2 justify-around items-center  bg-[#545452] text-[16px] font-medium text-white px-2 py-[5px] rounded-full cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img src='./assets/solLogo.svg' width={20} height={20} alt='Logo' />
                                <span>{selectedOption}</span>
                                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                            {isDropdownOpen && (
                                <div className='absolute top-8 bg-[#545452] rounded-[18px] mt-2 w-full'>
                                    <div className='p-2 cursor-pointer flex items-center' onClick={() => handleOptionClick('SOL')}>SOL</div>
                                    <div className='p-2 cursor-pointer' onClick={() => handleOptionClick('Option 2')}>Option 2</div>
                                    <div className='p-2 cursor-pointer' onClick={() => handleOptionClick('Option 3')}>Option 3</div>
                                </div>
                            )}
                            <h1 className='text-[14px] text-[#7C7C7C]'>Bal: 5.87 SOL</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between p-2'>
                        <div className='px-2'>
                            <h1 className='text-[16px] text-[#7C7C7C]'>Buy</h1>
                        </div>
                    </div>
                    <div className='flex justify-between bg-[#313131] p-3 rounded-[18px]'>
                        <div className='w-[50%]'>
                            <input className='text-[22px] font-medium bg-transparent outline-none' placeholder='115.155922' />
                            <h1 className='text-[14px] text-[#7C7C7C]'>~$318.02</h1>
                        </div>
                        <div className='flex flex-col gap-3 justify-end items-end'>
                            <div className='w-[fit] flex gap-4 justify-around items-center  bg-[#545452] text-[16px] font-medium text-white px-2 py-[5px] rounded-full cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img src='./assets/wifLogo.svg' width={20} height={20} alt='Logo' />
                                <span>WIF</span>
                            </div>
                            <h1 className='text-[14px] text-[#7C7C7C]'>Bal: 14,515.87 WIF</h1>
                        </div>
                    </div>
                </div>
                <div
                    className='w-full flex flex-row justify-center gap-[34px] rounded-full px-6 py-2'
                    style={{
                        backgroundImage: 'linear-gradient(to left, rgba(64, 224, 208)  0%, rgba(255, 140, 0) 50%, rgba(255, 0, 128) 100%)'
                    }}
                >
                    <button
                        className='text-black text-[16px] font-semibold italic'
                    >
                        buy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SwapForm;
