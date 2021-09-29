import React from "react";
import { ErrorMessage } from "formik";

// interface KErr {
//     name?:string
// }

const KError = ({name}:{name:any})=>{
    return(
        <div style={{color:"red"}}>
            <br/>
        <ErrorMessage name={name}/>
        </div>
    )
}
export default KError;