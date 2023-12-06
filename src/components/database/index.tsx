import React from 'react'
import Stats from './stats'
import Panel from './panel'


export default function Database() {
    return (
        <div className='flex justify-center items-center w-[100vw] h-[100%] bg-blue-100 container mx-auto'>
            <Stats />
            <Panel />
        </div>
    )
}