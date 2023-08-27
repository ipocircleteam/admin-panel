import React from 'react'

export default function Input(props: {
    value: string | number
    function: (e: React.ChangeEvent<HTMLInputElement>) => void
    text: string
    name: string
}) {
    return (
        <div className="border flex justify-start items-center rounded-md w-[auto] h-[40px] border-gray-400 overflow-hidden">
            <label className="mx-1">{props.text}</label>
        <input
          name={props.name}
          type="text"
          placeholder={props.text}
          className="mx-1 px-1"
          value={props.value}
          onChange={props.function}
        />
      </div> 
    )
}