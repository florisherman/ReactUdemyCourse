import { BaseSyntheticEvent, useState } from "react";
import {v4 as uuidv4} from 'uuid';

function TodoList() {
  const [item, setItem] = useState("");

  const [todoItems, addItems] = useState([] as string[])

  function handelChange(event : BaseSyntheticEvent) {
    const { value } = event.target;
    setItem(value);
  }

  function addToList() {
    addItems(prevItems =>{
        return[...prevItems, item];
    });
  }

  return (

    <div className="formcontainer">
      <div className="heading">
        <h1>To-Do List</h1>
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
            {todoItems.map(todoItem => <li key={uuidv4()}>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}


export default TodoList;
