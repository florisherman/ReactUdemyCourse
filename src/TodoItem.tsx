import { useState } from 'react';

function TodoItem(props : any) {
    const [done, setDone] = useState(false);

    const handleClick = ()=>{
        setDone(prevValue =>{
            console.log(prevValue);
           return !prevValue;
        });
    };
    return  (
        <li 
        style={{textDecoration : done ? "line-through" : ""  }} 
        value={props.text} 
        onClick={handleClick} 
        key={props.keyitem}>
            {props.text}
        </li>);
}
export default TodoItem;