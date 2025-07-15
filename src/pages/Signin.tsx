import { Link, useNavigate } from "react-router-dom"
import { Placeholder } from "../components/Placeholder"
import { Button } from "../components/Button"
import { useState } from "react"
import { z } from "zod";
import { signinInput } from '@bablooverma/common-app';
import axios from "axios";
import { BACKEND_URL } from "../config";

type SigninInput = z.infer<typeof signinInput>;

export const Signin = () => {
     const navigate=useNavigate();
     const [postInput, setPostInput] = useState<SigninInput>({
        email: "",
        password: ""
    });


    async function Sendrequest () {
       
        try{
           const response=await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInput)
           const jwt = response.data.jwt; // ✅ extract the string
          localStorage.setItem("token", jwt); // ✅ saves only the token

           navigate("/blogs")
        }catch(e){

        }
    }


     
    return <div className="flex justify-center mt-40">
        {/* {JSON.stringify(postInput)} */}
    <div className="flex justify-center flex-col">
        <div className="text-3xl font-bold ">
            Create an account
        </div>
        <div className="mt-1 text-slate-500 font-medium">
            Already have an account?
            <Link className="ml-1 underline" to='/signup'>Sign up</Link>
        </div>
        {/* <Placeholder lable="Username" placeholder="Enter your username" onChange={(e)=>{
           setPostInput({
            ...postInput,
            name:e.target.value
           })
        }}/> */}
        <Placeholder lable="Email" placeholder="abc@gmail.com" onChange={(e)=>{
             setPostInput({
            ...postInput,
            email:e.target.value
           })
        }}/>
        <Placeholder lable="Password" type="password" placeholder="" onChange={(e)=>{
             setPostInput({
            ...postInput,
            password:e.target.value
           })
        }}/>
        <Button onClick={Sendrequest} label="Sign In"/>
    </div>
    
    </div>
}