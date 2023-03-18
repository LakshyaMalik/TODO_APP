import React, { useState } from 'react'
import {FaTrash} from "react-icons/fa";

export default function Items(props) {
    const [done, setDone] = useState(false);
    return (
    <div onClick={() => setDone(!done)} className={'select-none cursor-pointer w-full border-b p-3 flex justify-between items-center'}>
        <div>
            <span className='pr-3 text-[16px] text-slate-500'>
                {props.time}
            </span>
            <span className={`${done === true ? 'line-through text-slate-700 text-[20px]' : 'hover-text-slate-700 text-[20px] text-teal-300'}`}>
                {props.item}
            </span>
        </div>
        <div onClick={() => props.removeHandler(props.id)}>
            <FaTrash className='text-[#5151d9] hover:text-red-500'/>
        </div>
    </div>
    )
}
