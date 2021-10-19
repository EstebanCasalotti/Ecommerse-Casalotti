import React, { useState } from 'react'
export const Counter = () => {
    const [count, setCount] = useState(0);

    const onAdd = () => {
            setCount(count + 1);
    
    };
    const onRemove = () => {
            setCount(count - 1);
    
    };
    return (
        <>
    
        <label> {count} </label>
        <button onClick = {onAdd} > + </button>
        <button onClick = {onRemove} > - </button>
    
        </>
);

}
