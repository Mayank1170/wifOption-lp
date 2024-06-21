import React from 'react'
import SwapForm from './SwapForm'

const Hero = () => {
    return (
        <div className='flex flex-col mt-6 items-center text-white justify-center'>
            <div className='relative'>
                <h1 className='font-semibold text-[30px]'>trade <span className='relative font-normal italic'> wif</span> memecoin derivatives</h1>
                <div className='w-[140px] h-[2px] top-11 left-[32%] absolute rotate-[-4deg] bg-white' />
            </div>
            <div className='relative flex justify-center w-full mt-[4vh]'>
                <SwapForm />
            </div>

        </div>
    )
}

export default Hero
