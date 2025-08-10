"use client"

import axios from "axios"
import { useState } from "react"

export default function InstanceSignin(){
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleInstanceSignin(){  
    try {
      const {data:response} = await axios.post(`${backendUrl}/instance/signin`,{
        username,
        password
      })    
      console.log('DOCKHOST_API_KEY : ',response?.data?.DOCKHOST_API_KEY);
      
    } catch (error) {
      console.log('Failed to signin user : ',error?.response??error);
    }
  }

  return (
    <>
      <p>Instance Signin</p>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleInstanceSignin}>Sign In</button>
    </>
  )
}