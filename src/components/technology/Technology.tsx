import { useState } from 'react';

import { use } from 'react'
// import { useState } from 'react';

import type { ITechnology } from '../../types/technologyTypes'

import TechCard from './TechCard';
import TechStack from './TechStack';

interface TechProps {
    dataPromise: Promise<ITechnology[]>;
}

const Technology = ({dataPromise}:TechProps) => {

    const [selectedTech, setSelectedTech] = useState<ITechnology[]>([]);

    const technologyList = use(dataPromise);



    console.log(technologyList);

    return (
        <>
            <div className='relative px-[100px] py-[50px]'>
                <h2 className='text-[36px] font-extrabold leading-[1.0] text-[#0F172A] mb-[10px]'>Explore the <span className='bg-gradient-to-r to-[#EC4899] to-[#8B5CF6] bg-clip-text text-[#EC4899]'>Technologies</span></h2>
                <p className='text-[16px] font-medium text-[#64748B] mb-[25px]'>Pick one technology per category to build your ideal stack</p>
                 <div className="flex lg:flex-row md:flex-col w-full gap-5">
                    <div className="min-w-0 flex-[3]">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-4">
                            {
                                technologyList.map((technology: ITechnology, index: number)=>{
                                    return (
                                        <TechCard key={index} technology={technology} selectedTech={selectedTech} setSelectedTech={setSelectedTech}  />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="min-w-0 flex-[1]">
                        <TechStack selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
                    </div>
                </div>   

            </div>  
        </>
    );
};

export default Technology;