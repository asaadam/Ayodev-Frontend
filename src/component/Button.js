import React, { useState,useEffect } from 'react';

export default function Button(props) {
    let [type, setType] = useState('+');
    useEffect(()=>{
        if (props.type){
            setType('-')
        }
    },[props.type]);
    function operation(value){
        if (props.type){
            return props.onClick(-value);    
        }
        return props.onClick(value);
    }
    return (
        <div>
            <button onClick={() => {
                operation(1)
            }}>{type}1</button>
            <button onClick={() => {
                operation(2)
            }}>{type}2</button>
        </div>
    )
}
