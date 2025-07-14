import { useState, type ChangeEvent } from "react"
import { Appbar } from "../components/Appbar"
import { Button } from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const navigate =useNavigate();
    return <div>
        <Appbar/>
        <div className="mb-6 ml-40 mr-40 ">
    {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Default input</label> */}
    <input onChange={(e)=>{
        setTitle(e.target.value)
    }}
     type="text"  className=" mt-10 focus:outline-none bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg  block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-500 dark:text-gray  " placeholder="Title..."/>
</div>
 <Texteditor onChange={(e)=>{
    setContent(e.target.value)
 }}/>
  <div className="flex justify-col ml-20">
  <Button label={"Publish"} 
onClick={async () => {
  const rawToken = localStorage.getItem("token");
  let jwt = "";

  try {
    jwt = rawToken?.startsWith("{")
      ? JSON.parse(rawToken).jwt
      : rawToken;
  } catch (e) {
    console.error("Failed to parse token:", e);
    return;
  }

  if (!jwt) {
    console.error("Token not found. Please log in.");
    return;
  }

  try {
    const response = await axios.post("http://127.0.0.1:8787/api/v1/blog", {
      title,
      content
    }, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });

    console.log("Blog published:", response.data);
     navigate(`/blog/${response.data.id}`)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Publish failed:", error.response?.status, error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
  }
  
}}



    
  />
</div>
    </div>
}



function Texteditor ({onChange}: {onChange: (e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return <div className="mr-20 ml-20">
        
<label  className="font-bold text-lg   ">Your Content</label>
<textarea onChange={onChange} rows={8} className=" focus:outline-none p-2.5 w-full border border-gray-300 text-sm  rounded-lg  " placeholder="Write your contents here..."></textarea>

    </div>
}