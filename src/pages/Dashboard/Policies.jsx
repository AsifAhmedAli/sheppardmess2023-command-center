import React from 'react'
import Header from '../../components/Header'
import DefaultLayout from '../../layout/DefaultLayout'



const Policies = () => {


    return (
        <>
            <DefaultLayout>
                {/* Header start */}
                <div className='flex flex-col'>
                <div className='w-[1528px] flex items-center justify-between pt-5'>
                        <div>
                            <h1 className='text-[#FFFFFF] text-[40px] font-bold leading-[48px]'>Policies</h1>
                            <p className='text-[#C3C3C3] text-[20px] font-medium leading-[30px] capitalize'>Here’s your burnout assessment overview</p>
                        </div>

                        <div className="flex items-center">
                            <Header />
                        </div>
                    </div>
                </div>

            </DefaultLayout>
        </>
    )
}

export default Policies

