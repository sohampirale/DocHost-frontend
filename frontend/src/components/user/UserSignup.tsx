"use client"

import axios from "axios"
import { useState } from "react"

export default function UserSignup(){
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleUserSignup(){  
    try {
      const {data:response} = await axios.post(`${backendUrl}/user/signup`,{
        username,
        email,
        password
      }, {
        withCredentials: true  
      })    
      
    } catch (error) {
      console.log('Failed to signup user ; ',error?.response??error);
    }
  }

  return (
    <>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleUserSignup}>Signup</button>
    </>
  )
}