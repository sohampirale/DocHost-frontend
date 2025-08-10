"use client"

import axios from "axios"
import { useState } from "react"

export default function InstanceSignup(){
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleInstanceSignup(){  
    try {
      const {data:response} = await axios.post(`${backendUrl}/instance/signup`,{
        username,
        password
      }, {
        withCredentials: true  
      })          
      console.log('DOCKHOST_API_KEY : ',response.data.DOCKHOST_API_KEY);
      
    } catch (error) {
      console.log('Failed to signup instance : ',error?.response??error);
    }
  }

  return (
    <>
      <p>Instance Signup</p>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleInstanceSignup}>Signup</button>
    </>
  )
}