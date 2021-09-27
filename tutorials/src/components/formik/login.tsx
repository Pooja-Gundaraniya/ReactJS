import axios from 'axios';
import React, { useState } from 'react';
import "./formik.css"
const Login = () => {
    const [userName,setUserName]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const [allEntry,setAllEntry]=useState([{}]);

    const submitForm = (e: any)=>{
        e.preventDefault();
        // const newEntry = {userName:userName, password:password};
        // console.log(newEntry,"newEntry");
        // setAllEntry([...allEntry, newEntry]);

        axios.post('http://localhost:3000/data',{
            "username":`${userName}`,
            "password":`${password}`
        })
        .then(function(response){
            console.log(response);
            alert(`successfull login ${userName}`)
        })

    }


    return (
        <>
            <form className='loginbg' action="" onSubmit={submitForm}>
                <header>Login form</header>
                <main>
                    <div>
                        <label htmlFor="username">username</label>
                        <input type="username" name="username" id="iptusername" autoComplete="off" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    </div>
                    <div>
                        <br /><label htmlFor="password">password</label>
                        <input type="password" name="password" id="iptpassword"autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <br/><button type="submit">Login</button>
                    </div>
                    <div>
                        {
                            allEntry.map((currelem:any)=>{
                                return(
                                    <div>
                                    {currelem.userName}<br/>
                                    {currelem.password}
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
            </form>
        </>
    )
}
export default Login;