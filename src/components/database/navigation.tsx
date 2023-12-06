import React from 'react'

export default function DatabaseNavigation() {
    return (
        <div className='flex justify-center items-center w-[auto] mx-4'>
            <a href='/database' className='mx-2 hover:text-primary font-semibold text-secondary'>
                GO BACK
            </a>
            {/* <a href='/database/tracker' className='mx-2 hover:text-primary font-semibold text-secondary'>
                IPO Tracker
            </a>
            <a href='/database/gmp' className='mx-2 hover:text-primary font-semibold text-secondary'>
                GMP
            </a>
            <a href='/database/reviews' className='mx-2 hover:text-primary font-semibold text-secondary'>
                Reviews
            </a> */}
        </div>
    )
}