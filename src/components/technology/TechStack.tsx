import React from 'react';

import { MdDeleteForever } from "react-icons/md";

const TechStack = () => {
    return (
        <div className='w-full rounded-[12px] border border-slate-200 bg-white p-4 shadow-sm'>
            <h2 className='text-[16px] font-bold text-[#)F172A]'>Your Stack</h2>
            <p className='m-1 text-[10px] font-medium text-[#94A3B*]'>2 Technology Selected</p>
            <div className="tech-icon mt-4 roundded-[8px] border border-slate-200 bg-white px-3 py-2.5">
                <div className='flex items-center justify-between'>
                    
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center">
                            <img className='h-6 w-6' src="" alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <b className='text-[12px] font-bold'>Svelte</b>
                            <small className='text-[9px] font-medium'>Front-End</small>
                        </div>
                    </div>
                    
                    

                    <div className="delete-icon cursor-pointer">
                        <MdDeleteForever />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default TechStack;