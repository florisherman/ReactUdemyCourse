import { BaseSyntheticEvent, useState } from "react";

import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    const [item, setItem] = useState("");

    const [todoItems, addItems] = useState([] as string[])

    function handelChange(event: BaseSyntheticEvent) {
        const { value } = event.target;
        setItem(value);
    }

    function addToList() {
        addItems(prevItems => {
            return [...prevItems, item];
        });
        setItem("");
    }

    return (
        <div className="formcontainer">
            <div className="heading">
                <h3>Todo items List</h3>
            </div>
            <div className="form">
                <input
                    name="todoItem"
                    value={item}
                    onChange={handelChange}
                    type="text"
                    placeholder="enter item here"
                />
                <button onClick={addToList}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                 {todoItems.map(todoItem => <TodoItem keyitem={uuidv4()} text={todoItem}/>)}
                </ul>
            </div>
        </div>
    )
}




export default TodoList;