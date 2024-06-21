import React, { useState } from 'react';

const SwapForm = () => {
    const [selectedSellOption, setSelectedSellOption] = useState('SOL');
    const [selectedBuyOption, setSelectedBuyOption] = useState('WIF');
    const [isSellDropdownOpen, setIsSellDropdownOpen] = useState(false);
    const [isBuyDropdownOpen, setIsBuyDropdownOpen] = useState(false);
    const [isBuyDropDown, setIsBuyDropDown] = useState(false)
    const [selectedType, setSelectedType] = useState('CALL');
    const [selectedPosition, setSelectedPosition] = useState('short')

    const handleSellOptionClick = (option) => {
        setSelectedSellOption(option);
        setIsSellDropdownOpen(false);
    };
    const handleBuyOptionClick = (option) => {
        setSelectedBuyOption(option)
        setIsBuyDropdownOpen(false);
    }
    const handlePositionClick = (option) => {
        setSelectedPosition(option)
    }

    const handleTypeClick = (type) => {
        setSelectedType(type);
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
                <div
                    className={`w-full cursor-pointer flex items-center justify-center p-2 rounded-tl-[40px] font-semibold text-[20px] ${selectedType === 'CALL' ? 'text-[#3DB079]' : "text-[#FF5454]"} ${selectedType === 'CALL' ? 'bg-[#292929]' : 'bg-[#151513]'}`}
                    onClick={() => handleTypeClick('CALL')}
                >
                    CALL
                </div>
                <div
                    className={`w-full cursor-pointer flex items-center justify-center p-2 font-semibold text-[20px] ${selectedType === 'PUT' ? 'text-[#3DB079]' : "text-[#FF5454]"} ${selectedType === 'PUT' ? 'bg-[#292929]' : 'bg-[#151513]'} text-[#FF5454]`}
                    onClick={() => handleTypeClick('PUT')}
                >
                    PUT
                </div>
            </div>
            <div className='flex flex-col gap-[5px] px-[20px] py-[10px]'>
                <div className='flex justify-around p-[6px] italic border-[1px] border-[#313131] rounded-[500px]'>
                    <button className={`w-full italic ${selectedPosition === 'long' ? 'text-[#FFFFFF]' : "text-[#454545]"}  `} onClick={() => handlePositionClick('long')}>long</button>
                    <button className={`w-full italic ${selectedPosition === 'short' ? 'text-[#FFFFFF]' : 'text-[#454545]' } `} onClick={() => handlePositionClick('short')}>short</button>
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
                        <div className='w-[50%]'>
                            <input className='text-[22px] font-medium bg-transparent border-none outline-none' placeholder='2' />
                            <h1 className='text-[14px] text-[#7C7C7C]'>~$318.14</h1>
                        </div>
                        <div className='w-[50%] relative flex flex-col gap-3 justify-end items-end'>
                            <div className='w-fit flex gap-2 justify-around items-center  bg-[#545452] text-[16px] font-medium text-white px-2 py-[5px] rounded-full cursor-pointer' onClick={() => setIsSellDropdownOpen(!isSellDropdownOpen)}>
                                <img src='./assets/solLogo.svg' width={20} height={20} alt='Logo' />
                                <span>{selectedSellOption}</span>
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                            {isSellDropdownOpen && (
                                <div className='absolute top-8 bg-[#545452] rounded-[18px] mt-2 w-full'>
                                    <div className='p-2 cursor-pointer flex items-center' onClick={() => handleSellOptionClick('SOL')}>SOL</div>
                                    <div className='p-2 cursor-pointer' onClick={() => handleSellOptionClick('Option 2')}>Option 2</div>
                                    <div className='p-2 cursor-pointer' onClick={() => handleSellOptionClick('Option 3')}>Option 3</div>
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
                        <div className='relative flex flex-col gap-3 justify-end items-end'>
                            <div className='w-[fit] flex gap-4 justify-around items-center  bg-[#545452] text-[16px] font-medium text-white px-2 py-[5px] rounded-full cursor-pointer' onClick={() => setIsBuyDropdownOpen(!isBuyDropdownOpen)}>
                                <img src='./assets/wifLogo.svg' width={20} height={20} alt='Logo' />
                                <span>{selectedBuyOption}</span>
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                            {isBuyDropdownOpen && (
                                <div className='absolute top-8 bg-[#545452] rounded-[18px] mt-2 w-full'>
                                    <div className='p-2 cursor-pointer flex items-center' onClick={() => handleBuyOptionClick('WIF')}>WIF</div>
                                    <div className='p-2 cursor-pointer' onClick={() => handleBuyOptionClick('Option 2')}>Option 2</div>
                                    <div className='p-2 cursor-pointer' onClick={() => handleBuyOptionClick('Option 3')}>Option 3</div>
                                </div>
                            )}
                            <h1 className='text-[14px] text-[#7C7C7C]'>Bal: 14,515.87 WIF</h1>
                        </div>
                    </div>
                </div>
                <div
                    className='w-full my-4 flex flex-row justify-center gap-[34px] rounded-full px-6 py-2'
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
