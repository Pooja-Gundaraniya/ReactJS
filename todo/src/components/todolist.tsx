import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,deleteTodo } from "./actions";
import { RootState } from "./reducers";


const TodoList = () =>{

    const list = useSelector((state:RootState)=>state.TodoReducer.list)
    const [input,setInput]=useState("")
    const dispatch=useDispatch();

    return(
        <>
        <label>add a item</label><br/>
        <input type="text" placeholder="write a task" value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={()=>{
            dispatch(addTodo(input))
            setInput("")
            }}>+</button>
        {list.map((elem:{id: string,data:string})=>{
            return(
            <div key={elem.id}>
                <div>{elem.data}</div>
                <button onClick={()=>dispatch(deleteTodo(elem.id))}>-</button>

            </div>

            )

        })}


        </>
    )
}
export default TodoList;