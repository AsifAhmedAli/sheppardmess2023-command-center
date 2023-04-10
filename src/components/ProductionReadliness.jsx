// import React from 'react'
// import {RxCheckbox} from 'react-icons/rx'

// const ProductionReadliness = () => {
// return (
//     <>
//         <div className='w-[611px] h-[201px] bg-[#181A25] rounded-xl p-5'>
//             <h1 className='text-[#E3E3E3] text-[24px] leading-8 font-medium'>Production Readliness</h1>
//             <div className='mx-4 text-[#E3E3E3] text-[16px] font-medium flex justify-between'>
//                 <h1>Approved</h1>
//                 <h1>Not Ready</h1>
//                 <h1>Conditional</h1>
//                 <h1>N/A Risk</h1>
//             </div>
//         </div>
//     </>
// )
// }

// export default ProductionReadliness


// const ProductionReadliness = () => {
//     return (
//       <>
//         <div className='w-[611px] h-[201px] bg-[#181A25] rounded-xl p-5'>
//           <h1 className='text-[#E3E3E3] text-[24px] leading-8 font-medium'>Production Readliness</h1>
//           <div className='mx-4 text-[#E3E3E3] text-[16px] font-medium flex justify-between'>
//             <h1>Approved</h1>
//             <h1>Not Ready</h1>
//             <h1>Conditional</h1>
//             <h1>N/A Risk</h1>
//           </div>
//           <div className='mx-4 text-[#E3E3E3] text-[16px] font-medium flex justify-between'>
//             <h2>Low Risk</h2>
//             <h2>Moderate Risk</h2>
//             <h2>High Risk</h2>
//             <h2>Unknown</h2>
//           </div>
//         </div>
//       </>
//     )
//   }

//   export default ProductionReadliness;

import React from 'react'
import { TiTick } from 'react-icons/ti'
import { RxCross2 } from 'react-icons/rx'
import { BsExclamation } from 'react-icons/bs'

const ProductionReadliness = () => {
    return (
        <>
            <div className='w-[611px] h-[201px] bg-[#181A25] rounded-xl px-4'>
                <h1 className='text-[#E3E3E3] text-[24px] leading-8 font-medium mt-5'>Production Readliness</h1>
                <div className='mx-4 mt-3 text-[#E3E3E3] text-[16px] font-medium flex justify-around leading-[20.83px]'>
                    <h1>Approved</h1>
                    <h1>Not Ready</h1>
                    <h1>Conditional</h1>
                    <h1>N/A Risk</h1>
                </div>
                <div className='mx-4 text-[#E3E3E3] text-[16px] font-medium flex justify-around leading-[20.83px]'>
                    <h2>Low Risk</h2>
                    <h2>
                        Moderate Risk

                    </h2>
                    <h2>
                        High Risk
                    </h2>
                    <h2>
                        Unknown

                    </h2>
                </div>
                <div className='text-[#E3E3E3] text-[18px] font-normal flex items-center justify-center mt-4'>
                    <div className='bg-[#13141B] border-[0.5px] border-[#2C2F41] px-[10px] py-4 w-[141px] h-[56px] flex items-center justify-center gap-[10px]'>
                        <TiTick className='inline-block align-middle text-gray-400 ml-1 w-[18px] h-[18px] bg-[#16E32B] text-black' size={18} />
                        <h1 className='text-lg'>132</h1>

                    </div>
                    <div className='bg-[#13141B] border-[0.5px] border-[#2C2F41] px-[10px] py-4 w-[141px] h-[56px] flex items-center justify-center gap-[10px]'>
                        <RxCross2 className='inline-block align-middle text-gray-400 ml-1 w-[18px] h-[18px] bg-[#FF0000] text-black' size={18} />
                        <h1 className='text-lg'>132</h1>

                    </div>
                    <div className='bg-[#13141B] border-[0.5px] border-[#2C2F41] px-[10px] py-4 w-[141px] h-[56px] flex items-center justify-center gap-[10px]'>
                        <BsExclamation className='inline-block align-middle text-gray-400 ml-1 w-[18px] h-[18px] bg-[#0047FF] text-black' size={18} />
                        <h1 className='text-lg'>65</h1>

                    </div>
                    <div className='bg-[#13141B] border-[0.5px] border-[#2C2F41] px-[10px] py-4 w-[141px] h-[56px] flex items-center justify-center gap-[10px]'>
                        <TiTick className='inline-block align-middle text-gray-400 ml-1 w-[18px] h-[18px] bg-[#E3C216] text-black' size={18} />
                        <h1 className='text-lg'>89</h1>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductionReadliness;

