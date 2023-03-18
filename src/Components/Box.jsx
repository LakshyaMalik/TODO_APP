import React from 'react'
import Items from './Items'

export default function Box(props) {
    const items = props.data.map(
        (SingleData, key) => {
            return <Items removeHandler={props.removeHandler} key={key} id={key} item={SingleData.item} time={SingleData.time}/>
        }
    )
    return (
    <div className='p-3 m-3 '>
        {items}
        { }
   </div>
    )
}
