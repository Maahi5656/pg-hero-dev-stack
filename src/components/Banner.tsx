import React from 'react';

import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <>
            <div className="relative flex justify-center items-center px-[100px] bg-[#fff] banner">
                <div className="banner-text">
                    <h1 className='text-[#0F172A] text-[60px] mb-10 font-extrabold leading-[1.0]'>Build Your Ideal <br/><span className='bg-gradient-to-r from-[#FF5722] to-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span> </h1>
                    <p className='text-[#475569] text-[18px] font-medium mb-5'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
                    <div>
                        <a className='text-[#fff] bg-gradient-to-r from-[#FF5722] to-[#D81B7E] mr-2.5 py-[10px] px-[15px] inline-block cursor-pointer rounded'>Explore Technologies</a>
                        <a className='border border-[#E5E7EB] p-5 border-2 mr-2.5 py-[10px] px-[15px] inline-block cursor-pointer rounded'>Learn More...</a>
                    </div>
                </div>
                <div className="banner-image">
                    <img src={banner} alt="" />
                </div>

            </div>  
        </>
    );
};

export default Banner;