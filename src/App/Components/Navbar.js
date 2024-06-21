import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-12'>
            <div className='flex flex-row gap-[34px] w-fit bg-[#151513] rounded-full pl-4 pr-12 py-1 ' style={{ boxShadow: '0 0 13px 7px #242322' }}>
                <img src='./assets/Logo.png' width={45} height={45} />
                <div className='flex flex-row items-center gap-[34px] text-[#A4A4A0]'>
                    <div><button>Home</button></div>
                    <div><button>trade</button></div>
                    <div><button>pool</button></div>
                    <div><button>docs</button></div>
                </div>
            </div>
            <div
                className='flex flex-row gap-[34px] w-fit rounded-full px-6 py-2'
                style={{
                    backgroundImage: 'linear-gradient(to left, rgba(22, 22, 20, 1) 0%, rgba(255, 140, 0, 0.3) 50%, rgba(255, 0, 128, 0.2) 100%)'
                }}
            >
                <button
                    className='text-white text-[16px] font-semibold'
                    style={{
                        backgroundImage: 'linear-gradient(to left, rgba(22, 22, 20) 0%, rgba(255, 140, 0) 0%, rgba(255, 0, 128) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent'
                    }}
                >
                    connect SOL wallet
                </button>            </div>
        </div>
    )
}

export default Navbar
