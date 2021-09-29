import React from "react";
import { FirstName } from "./context_parent";


const ContextChild1 = () => {
    return (
        <>
            <FirstName.Consumer>{(value)=>{
                return <h1>my name is {value}</h1>
            }}</FirstName.Consumer>
        </>
    )
}
export default ContextChild1;
