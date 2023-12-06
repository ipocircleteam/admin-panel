import React from 'react'

export default function StatsCard() {
    return (
        <div className='w-[300px] h-[200px] border my-2 mx-auto rounded-lg bg-white shadow-lg p-2'>
            <h1>Total Tables: </h1>
            <h2 className='text-[40px] text-green-700 mx-auto w-[100%] text-center'>
                8
            </h2>
            <h1>
                Live Connections:
            </h1>
            <h2 className='text-[40px] text-blue-700 mx-auto w-[100%] text-center'>
                0
            </h2>
        </div>
    )
}