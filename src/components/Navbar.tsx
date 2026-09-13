import React from 'react';


import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <>
            <nav className='flex pt-[24px] pb-[58px]'>
                <div className="container mx-[105px] flex items-center justify-between container">
                    <img className='w-[136px] h-[32px]' src={logo} alt="logo" />

                    <ul className='flex items-center'>
                        <li className='px-[14px]'><a className='inline-block text-base font-medium text-[14px] text-[#475569]' href="#home">Home</a></li>
                        <li className='px-[14px]'><a className='inline-block text-base font-medium text-[14px] text-[#475569]' href="#about">About</a></li>
                        <li className='px-[14px]'><a className='inline-block text-base font-medium text-[14px] text-[#475569]' href="#technologies">Technologies</a></li>
                        <li className='px-[14px]'><a className='inline-block text-base font-medium text-[14px] text-[#475569]' href="#projects">Projects</a></li>
                        <li className='px-[14px]'><a className='inline-block text-base font-medium text-[14px] text-[#475569]' href="#contact">Contact</a></li>
                    </ul>

                    <div className="flex items-center">
                        <button className='inline-block mx-[10px]'>Sign In</button>
                        <button className='inline-block mx-[10px] px-[20px] py-[10px] text-[14px]/ text-[#fff] bg-[#D91B7E] border-0 rounded-full'>Sign Up</button>
                    </div>
                </div>
            </nav>  
        </>
    );
};

export default Navbar;