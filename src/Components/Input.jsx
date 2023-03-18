import React, { useRef } from 'react'
import {RiAddFill} from "react-icons/ri";

export default function Input(props) {
    const inputBox = useRef();
return (
    <div className='p-3 flex justify-around'>
        <input type="text" placeholder='Enter data here' className='p-3 rounded focus:outline w-[90%] border-slate-400' ref={inputBox}/>
        <div className='cursor-pointer w-[50px] h-[50px] hover:bg-teal-600 bg-cyan-900 text-white text-3xl rounded-[70%] flex justify-center items-center' onClick={() => {
            props.handler(inputBox.current.value)
            inputBox.current.value = "";
        } }>
            <RiAddFill/>
        </div>
    </div>
    )
}