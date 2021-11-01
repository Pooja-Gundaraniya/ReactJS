import { v1 as uuid } from 'uuid';
import { useState } from "react";


const Todo = () => {
    const [item, setItem] = useState([])
    const [newItem, setNewItem] = useState("")

    const addItem = () => {
        let list = item;
        list.push({
            id: uuid(),
            name: newItem
        })
        setItem(list)
        setNewItem("")
    }

    const removeItem = (value) => {
        const filters = item.filter((currentElement) => {
            return currentElement.id !== value
        })
        setItem(filters)
    }

    return (
        <div>
            <label>Todo List</label><br /><br />
            <input type="text" placeholder="add a item" onChange={(e) => setNewItem(e.target.value)} value={newItem} />
            <button onClick={addItem}>add a item</button>
            <ul>
                {item.map((currentElement) => {
                    return (
                        <div>
                            <li key={currentElement} id={currentElement.id} >{currentElement.name}</li>
                            <button onClick={()=>{removeItem(currentElement.id)}}>delete item</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default Todo