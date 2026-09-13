import React from 'react';


import logo from '../assets/logo-text.png'
import hamburgermenu from '../assets/hamburger.png'
import './Navbar.css'

const Navbar = () => {

    function openNav(){
        const nav = document.getElementById("myNav")
        
        if(nav){
            nav.style.width = "100%";
        }
    }

    function closeNav(){
        const nav = document.getElementById("myNav")
        
        if(nav){
            nav.style.width = "0";
        }
    }

    return (
        <>
            <nav className='navbar flex pt-[24px] pb-[58px]'>
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

                <div className="mobile-menu">
                    <span className='cursor-pointer' onClick={openNav}>
                        <img src={hamburgermenu} alt="" />
                    </span>
                    <div className="overlay" id="myNav">
                        <a href="javascript:void(0)" onClick={closeNav} className="closebtn">&times;</a>
                        <div className="overlay-content">
                            <a onClick={closeNav} href="index.html">Home</a>
                            <a onClick={closeNav} href="about.html">About</a>
                            <a onClick={closeNav} href="contact.html">Technologies</a>
                            <a onClick={closeNav} href="products.html">Projects</a>
                            <a onClick={closeNav} href="#">Contacts</a>
                        </div>
                    </div>
                </div>
            </nav>  
        </>
    );
};

export default Navbar;