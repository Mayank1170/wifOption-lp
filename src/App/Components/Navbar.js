import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Navbar = () => {
    const walletButtonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '9999px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
        backgroundImage: 'linear-gradient(to left, rgba(22, 22, 20) 0%, rgba(255, 140, 0) 0%, rgba(255, 0, 128) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
    };

    const walletButtonHoverStyle = {
        backgroundColor: 'darkorange',
    };

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
                className='flex flex-row gap-[34px] w-fit rounded-full px-6'
                style={{
                    backgroundImage: 'linear-gradient(to left, rgba(22, 22, 20, 1) 0%, rgba(255, 140, 0, 0.3) 50%, rgba(255, 0, 128, 0.2) 100%)'
                }}
            >
                <WalletMultiButton
                    text="Connect SOL Wallet"
                    style={walletButtonStyle}
                />
            </div>
        </div>
    );
}

export default Navbar;
