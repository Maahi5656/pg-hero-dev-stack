import { type Dispatch, type SetStateAction } from 'react';

import type { ITechnology } from '../../types/technologyTypes'

import { MdDeleteForever } from "react-icons/md";

interface ISelectedtechnology{
    selectedTech: ITechnology[];
    setSelectedTech: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechStack = ({selectedTech, setSelectedTech}:ISelectedtechnology) => {

    console.log(selectedTech)

    const handleRemoveTech=(tech: ITechnology)=>{
        const remainingTech = selectedTech.filter(techs => techs.id !== tech.id);
        
        setSelectedTech(remainingTech);
    }

    return (
        <div className='w-full rounded-[12px] border border-slate-200 bg-white p-4 shadow-sm'>
            <h2 className='text-[16px] font-bold text-[#)F172A]'>Your Stack</h2>
            <p className='m-1 text-[10px] font-medium text-[#94A3B*]'>{ selectedTech.length } Technology Selected</p>
            {
                selectedTech.map((tech, index)=>{
                    return (
                        <div key={index} className="tech-icon mt-4 roundded-[8px] border border-slate-200 bg-white px-3 py-2.5">
                            <div className='flex items-center justify-between'>

                                <div className="flex items-center gap-2.5">
                                    <div className="flex h-7 w-7 items-center justify-center">
                                        <img className='h-6 w-6' src={tech.icon} alt="" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <b className='text-[12px] font-bold'>{ tech.name }</b>
                                        <small className='text-[9px] font-medium'>{ tech.category }</small>
                                    </div>
                                </div>



                                <div className="delete-icon cursor-pointer" onClick={()=>handleRemoveTech(tech)}>
                                    <MdDeleteForever />
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    );
};

export default TechStack;