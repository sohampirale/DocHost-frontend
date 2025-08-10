// // hooks/useSocket.js
// import { useEffect, useRef } from 'react';
// import { io } from 'socket.io-client';

// export function useSocket() {
//   const socketRef = useRef();

//   useEffect(() => {
//     socketRef.current = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
//       query:{
//         role:"client"
//       },
//       withCredentials: true,
//     });
    
//     socketRef.current.on('connect', () => {
//       console.log('Socket connected:', socketRef.current.id);
//     });

//     socketRef.current.on('disconnect', () => {
//       console.log('Socket disconnected');
//     });

//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, []);

//   return socketRef.current;
// }