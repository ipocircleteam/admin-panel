import React from 'react'
import StatsCard from './stats-card'

export default function Stats() {
    return (
        <div className='w-[100%] lg:w-[30%] border-r border-gray-500 h-[90%] p-2'>
            <h1 className='text-[40px] text-primary font-semibold'>
                Database Statistics
            </h1>

            <div className=''>
                <StatsCard />
            </div>
        </div>
    )
}
