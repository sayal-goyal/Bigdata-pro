import React from 'react'

const NavMini = ({v1,v2,v3}) => {
  return (
    <div className='flex flex-col w-full h-full font-openlight text-lg items-center'>
        <div className='flex h-11 bg-transparent items-center'>
            <div className='px-5'>
              {v1}
            </div>
            <div className='w-[0.5px] h-5 bg-black'></div>
            <div className='px-5'>
              {v2}
            </div>
            <div className='w-[1px] h-5 bg-black'></div>
            <div className='px-5'>
              {v3}
            </div>
        </div>
        <div className='h-1 w-full bg-navgrad'>

        </div>
    </div>
  )
}

export default NavMini;
