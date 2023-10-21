//import React from "react";
import React,{ useState } from "react";


const SignUp =()=>{
const[name,setname]=useState("");
const[password,setpassword]=useState("");
const[email,setemail]=useState("");

const collectData=()=>{
    console.warn(name,email,password);
}
    
return(
    <div className="Register">
<h3 className="head" > Register</h3>
<input className="inputBox" type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Name"/>
<input className="inputBox" type="text" value={email} onChange={(e)=>setemail(e.target.value)}  placeholder="Enter E-mail"/>
<input className="inputBox" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Password"/>
<button className="btn" type="button " onClick={collectData}>Sign Up</button>
    </div>
)
};

export default SignUp;