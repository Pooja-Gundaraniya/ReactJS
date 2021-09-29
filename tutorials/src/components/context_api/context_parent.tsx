import React, { createContext } from "react";
import ContextChild from "./context_child";
import ContextChild1 from "./context_child1";

const FirstName = createContext("");

const ContextParent = ()=>{
    return(
        <>
        <FirstName.Provider value={"pooja"}>

        <ContextChild1/>
        </FirstName.Provider>
        </>
    )
}
export default ContextParent;
export {FirstName};