import React from 'react'

export default function Panel() {
    return (
        <div className='w-[100%] lg:w-[70%] h-[100%] p-4'>
            <h3 className='text-[20px]'>
                What do you wanna do?
            </h3>

            <div>
                <h2 className='text-[30px] text-primary font-semibold'>IPO Database</h2>
                <div className='flex justify-around items-center flex-wrap'>
                    <a href='/database/ipo/add'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center border shadow-md'>
                            <h2>Add Ipo </h2>
                        </div>
                    </a>
                    <a href='/database/ipo/update_delete'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center border shadow-md'>
                            <h2>Delete Ipo</h2>
                        </div>
                    </a>
                    <a href='/database/ipo/update_delete'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center border shadow-md'>
                            <h2>Update IPO</h2>
                        </div>
                    </a>
                </div>
            </div>



            <div className='mt-[20px]'>
                <h2 className='text-[30px] text-primary font-semibold'>IPO Tracker</h2>
                <div className='flex justify-around items-center flex-wrap'>
                    <a href='/database/tracker'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center border shadow-md'>
                            <h2>Update Tracker Data </h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center border shadow-md'>
                            <h2></h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center border shadow-md'>
                            <h2></h2>
                        </div>
                    </a>
                </div>
            </div>


            <div className='mt-[20px]'>
                <h2 className='text-[30px] text-primary font-semibold'>IPO Reviews</h2>
                <div className='flex justify-around items-center flex-wrap'>
                    <a href='/database/reviews'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center border shadow-md'>
                            <h2>Update Reviews</h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center border shadow-md'>
                            <h2></h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center border shadow-md'>
                            <h2></h2>
                        </div>
                    </a>
                </div>
            </div>


        </div>
    )
}