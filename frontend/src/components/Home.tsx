"use client"

import getSocket from "@/lib/getSocket";
import { useState } from "react";

export default function Home(){
  const [allInstances,setAllInstances]=useState([])
  const [allMyInstances,setAllMyInstances] =useState([])
  const [command,setCommand]=useState("")

  const socket = getSocket();
  if(socket){
    socket.on('client-notification',(notification)=>{
      console.log("notification received : "+notification)
    })

    socket.on('client-output',(output)=>{
      console.log("output received : "+output)
    })

    socket.on("all-instances",(allInstances)=>{
      console.log('allInstances : ',allInstances);
      setAllInstances(allInstances)
    })

    socket.on('all-my-instances',(allMyInstances)=>{
      console.log('allMyInstances : ',allMyInstances);
      setAllMyInstances(allMyInstances)
    })
  }
  console.log('socket : ',socket);

  async function helperStartInstance(instanceId:string){
    socket.emit("start-container",{
      instanceId
    })
  }

  async function helperResumeInstance(instanceId:string){
    socket.emit("resume-container",{
      instanceId
    })
  }

  async function helperExecuteCommand(){
    socket.emit('exec-cmd',{
      command
    })
  }

  return (<>
    {
      socket ? (<p>Socket connected</p>)
      : (<p>Socket not connected</p>)
    }
    <input type="text" value={command} onChange={(e)=>setCommand(e.target.value)}/>
    <button onClick={helperExecuteCommand}>Execute Command</button>
    {allInstances.length!=0 && (
      allInstances.map((instance)=>(
        <div key={instance._id}>
          <p>Instance username : {instance.username}</p>
          <button onClick={()=>helperStartInstance(instance._id)}>
            Start Instance</button>
        </div>
      ))
    )}

    {allMyInstances.length!=0 && (

      allMyInstances.map((instance)=>(
        <div key={instance._id}>
          <p>Instance username : {instance.username}</p>
          <button onClick={()=>helperResumeInstance(instance._id)}>
            Resume Instance</button>
        </div>
      ))
    )}
  </>)
}