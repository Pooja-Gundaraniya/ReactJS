import { v1 as uuid } from 'uuid';
import { useState } from "react";

interface Itodo{
    id:string;
    name:string
}
const Todos = () => {
    const [item, setItem] = useState<Itodo[]>([])
    const [newItem, setNewItem] = useState<string>("")

    const addItem = () => {
        let list:Itodo[] = item;
        list.push({
            id: uuid(),
            name: newItem
        })
        setItem(list)
        setNewItem("")
    }

    const removeItem = (value:string) => {
        const filters = item.filter(currentElement => {
            return currentElement.id !== value
        })
        setItem(filters)
    }

    return (
        <>
            <label>Todo List</label><br /><br />
            <input type="text" placeholder="add a item" onChange={(e) => setNewItem(e.target.value)} value={newItem} />
            <button onClick={addItem}>add a item</button>
            <ul>
                {item.map(currentElement => {
                    return (
                        <div key={currentElement.id}>
                            <li id={currentElement.id} >{currentElement.name}</li>
                            <button onClick={()=>{removeItem(currentElement.id)}}>delete item</button>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}
export default Todos