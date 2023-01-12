import React from 'react'
import { TechStack } from '../data/TechStack'

const Skill = () => {
  return (
    <div className='flex flex-col items-center my-12'>
        <span className='font-Panchang-Semibold text-3xl font-semibold'>SKILLS I GOT</span>
    <div className='md:flex w-screen grid-cols-2 grid justify-center space-x-8 items-center mx-auto my-6'>
        {TechStack.map((item) => {
            return (
                 <div className='bg-[#b1dd40] flex text-[#111606] rounded-2xl flex-col items-center  px-9 py-3.5 '>
                <div className='rounded-full  text-3xl '>{item.image}</div>
                <span className='font-Panchang-Semibold text-[9px] items-center flex w-full'>{item.name}</span>
                </div>
            )
        })}
    </div>
    <span className='text-sm font-Panchang-Semibold'>This aint all i got some more, just email me</span>
    </div>
  )
}

export default Skill