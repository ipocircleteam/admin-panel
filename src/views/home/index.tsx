import React from 'react'

export default function Home() {
    return (
        <div className='mt-[50px] flex justify-center items-center h-[80%] w-[100%]'>
            <a href='/database/'>
                <div className='border p-2 text-center hover:scale-105 shadow-bg-blue-200 text-primary
            font-bold rounded-lg shadow-lg w-[200px] h-[200px] flex justify-center items-center'>
                <h1>GO TO DATABASE PANEL</h1>
            </div>
            </a>
        </div>
    )
}