import React, { type Dispatch, type SetStateAction } from 'react';

import { useState } from 'react';

import type { ITechnology } from '../../types/technologyTypes'


interface ITechCardProps{
    technology: ITechnology;
    selectedTech: ITechnology[];
    setSelectedTech: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechCard = ({technology, selectedTech, setSelectedTech}: ITechCardProps) => {

    const [isAdded, setIsAdded] = useState(false);

    const handleAdded=()=>{
        setIsAdded(true);
        setSelectedTech([...selectedTech, technology]);
    }

    return (
        <>
            <div className="card bg-base-100 shadow-sm ">
                <div className="card-body items-baseline">
                <figure>
                  <img
                    className='h-[150px]'
                    src={technology.icon}
                    alt={technology.name} />
                </figure>  
                  <h2 className="card-title">
                    { technology.name }
                    <div className="badge badge-secondary">{ technology.badge }</div>
                  </h2>
                  <p>{ technology.description }</p>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">{ technology.category }</div>
                    <div className="badge badge-outline">{ technology.difficulty }</div>
                    <div>{ technology.rating }</div>
                  </div>
                  <div className="card-actions">
                    <button 
                        className='block text-center bg-black p-5 text-[#fff] leading-1 cursor-pointer'
                        disabled={ isAdded ? true : false }
                        onClick={handleAdded}
                    >
                     { isAdded === true ? "Added" : "Add To Stack" }   
                    </button>
                  </div>
                </div>
            </div>        
        </>

    );
};

export default TechCard;