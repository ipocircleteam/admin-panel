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
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Add Ipo </h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Delete Ipo</h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Update IPO</h2>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <h2 className='text-[30px] text-primary font-semibold'>IPO Tracker</h2>
                <div className='flex justify-around items-center flex-wrap'>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Add data </h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Delete data</h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Update data</h2>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <h2 className='text-[30px] text-primary font-semibold'>GMP</h2>
                <div className='flex justify-around items-center flex-wrap'>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Add GMP data </h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Delete GMP data</h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Update GMP date</h2>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <h2 className='text-[30px] text-primary font-semibold'>IPO Review</h2>
                <div className='flex justify-around items-center flex-wrap'>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Add Ipo Review </h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Delete Ipo Review</h2>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='w-[250px] h-[70px] rounded-md text-[20px] flex items-center justify-center text-center bg-gray-400'>
                            <h2>Update IPO Review</h2>
                        </div>
                    </a>
                </div>
            </div>


        </div>
    )
}