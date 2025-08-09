"use client"

import { useSocket } from "@/lib/useSocket"

export default function Home(){
  const socket = useSocket();
  return (<>
    {
      socket ? (<p>Socket connected</p>)
      : (<p>Socket not connected</p>)
    }
  </>)
}