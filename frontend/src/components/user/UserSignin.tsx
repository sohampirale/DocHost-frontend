"use client"

import axios from "axios"
import { useState } from "react"

export default function UserSignin(){
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleUserSignup(){  
    try {
      const {data:response} = await axios.post(`${backendUrl}/user/signin`,{
        username,
        password
      }, {
        withCredentials: true  
      })    
      
    } catch (error) {
      console.log('Failed to signin user : ',error?.response??error);
    }
  }

  return (
    <>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleUserSignup}>Sign In</button>
    </>
  )
}