import {io, Socket } from "socket.io-client";

let socket:Socket;

export default function getSocket(){
  if(!socket){
    socket=io(process.env.NEXT_PUBLIC_BACKEND_URL,{
      query:{
        role:"client"
      },
      withCredentials:true
    });
  }

  return socket;
}