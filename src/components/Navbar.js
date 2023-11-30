import React from 'react'
import NavMini from './NavMini';

const Navbar = () => {
  return (
    <div className='grid-cols-2 h-[196px]'>
      <div className='col-span-full flex items-center gap-2 pl-[12%] h-16 bg-[#00758F]'>
        <img className='h-[47px]' src="../images/ener-icon.png" alt="icon" />
        <div className='text-white font-openlight text-3xl'>
          World Energy Statistics
        </div>
      </div>
      <div className='flex col-span-full items-center h-[84px] border-b-[1px] justify-center border-[#373D3F] font-openlight'>
        <div className='flex flex-col w-fit items-center'>
          <div className='flex flex-col mt-2 mb-[2px] mx-7 items-center'>
            <img className='h-11' src="../images/totalener-icon.svg" alt="" />
            <div className='text-[17px]'>TOTAL ENERGY</div>
          </div>
          <div className='h-1 w-full bg-orange-600'></div>
        </div>
        <div className='flex flex-col w-fit items-center'>
          <div className='flex flex-col mt-2 mb-[2px] mx-7 items-center'>
            <img className='h-11' src="../images/coal-icon.svg" alt="" />
            <div className='text-[17px]'>COAL, LIGNITE</div>
          </div>
          <div className='h-1 w-full bg-orange-600'></div>
        </div>
        <div className='flex flex-col w-fit items-center'>
          <div className='flex flex-col mt-2 mb-[2px] mx-7 items-center'>
            <img className='h-11' src="../images/crude-icon.svg" alt="" />
            <div className='text-[17px]'>CRUDE OIL</div>
          </div>
          <div className='h-1 w-full bg-orange-600'></div>
        </div>
        <div className='flex flex-col w-fit items-center'>
          <div className='flex flex-col mt-2 mb-[2px] mx-7 items-center'>
            <img className='h-11' src="../images/oil-icon.svg" alt="" />
            <div className='text-[17px]'>OIL PRODUCTS</div>
          </div>
          <div className='h-1 w-full bg-orange-600'></div>
        </div>
        <div className='flex flex-col w-fit items-center'>
          <div className='flex flex-col mt-2 mb-[2px] mx-7 items-center'>
            <img className='h-11' src="../images/gas-icon.svg" alt="" />
            <div className='text-[17px]'>NATURAL GAS</div>
          </div>
          <div className='h-1 w-full bg-orange-600'></div>
        </div>
        <div className='flex flex-col w-fit items-center'>
          <div className='flex flex-col mt-2 mb-[2px] mx-7 items-center'>
            <img className='h-11' src="../images/electricity-icon.svg" alt="" />
            <div className='text-[17px]'>ELECTRICITY</div>
          </div>
          <div className='h-1 w-full bg-orange-600'></div>
        </div>
        <div className='flex flex-col w-fit items-center'>
          <div className='flex flex-col mt-2 mb-[2px] mx-7 items-center'>
            <img className='h-11' src="../images/renewables-icon.svg" alt="" />
            <div className='text-[17px]'>RENEWABLES</div>
          </div>
          <div className='h-1 w-full bg-orange-600'></div>
        </div>
        <div className='flex flex-col w-fit items-center'>
          <div className='flex flex-col mt-2 mb-[2px] mx-7 items-center'>
            <img className='h-11' src="../images/co2-icon.svg" alt="" />
            <div className='text-[17px]'>CO2</div>
          </div>
          <div className='h-1 w-full bg-orange-600'></div>
        </div>
        <div className='flex flex-col w-fit items-center'>
          <div className='flex flex-col mt-2 mb-[2px] mx-7 items-center'>
            <img className='h-11' src="../images/countries-icon.svg" alt="" />
            <div className='text-[17px]'>COUNTRIES</div>
          </div>
          <div className='h-1 w-full bg-orange-600'></div>
        </div>
      </div>
      <div className='col-span-full h-12'>
        <NavMini v1="SAYAL" v2="AYAN" v3="AVASH"/>
      </div>
    </div>
  )
}

export default Navbar;