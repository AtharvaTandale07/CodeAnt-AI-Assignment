import React from 'react'
import svgIconUrl from '../assets/CodeAntAIIcon.svg';
import { RiPieChart2Fill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
const HeroComponent = () => {
    return (
        <div className='w-full h-[85%] flex justify-center items-center'>
            <div className="w-[447px] h-[170px] bg-white rounded-3xl drop-shadow-lg relative border border-gray-100">
                <div className='flex justify-start items-center gap-2 py-6 pl-6'>
                    <img src={svgIconUrl} />
                    <p className='font-semibold text-xl'>AI to Detect & Autofix Bad Code</p>
                </div>
                <div className='w-full h-[0.3px] bg-[#ECECED]'></div>
                <div className='h-1/2 flex justify-evenly items-center'>
                    <div className='flex flex-col items-center'><span className='font-bold'>30k+</span><span className='text-sm text-[#171717]'>Language Support</span></div>
                    <div className='flex flex-col items-center'><span className='font-bold'>10k+</span><span className='text-sm text-[#171717]'>Developers</span></div>
                    <div className='flex flex-col items-center'><span className='font-bold'>100k+</span><span className='text-sm text-[#171717]'>Hours Saved</span></div>
                </div>
                <div className='h-[164px] w-[265px] bg-white absolute -right-7 -bottom-[148px] rounded-3xl drop-shadow-lg border border-gray-100'>
                    <div className='h-full px-7'>
                        <div className='h-1/2 flex justify-between items-center'>
                            <div className='bg-[#E6E3FD] h-14 w-14 rounded-full flex justify-center items-center'>
                                <RiPieChart2Fill size={28} color='#9D90FA'/>
                            </div>
                            <div>
                                <div className='flex items-center gap-1 text-sm font-bold text-[#0049C6]'>
                                <FaArrowUp size={15}/>
                                    14%
                                </div>
                                <p className='text-sm font-medium'>This week</p>
                            </div>
                        </div>
                        <div className='h-1/2'>
                            <p className='text-sm font-bold'>Issues Fixed</p>
                            <p className='text-3xl font-bold mt-2'>500K+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponent;



