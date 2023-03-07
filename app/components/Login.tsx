'use client'

import { signIn } from "next-auth/react"


function Login() {
  return (
    <div className=" bg-white h-screen flex flex-col items-center justify-center">
      <img 
      src="https://mblogthumb-phinf.pstatic.net/20131111_299/jmslovingyou_1384160423386cJK9D_JPEG/%C2%F7%C0%CE%C7%A5_%BA%D0%B3%EB_%283%29.jpg?type=w2"
      />
      <button onClick={(e)=>{e.preventDefault();signIn('google');}} className=" font-bold text-3xl animate-pulse">sign in to use chatGPT</button>
    </div>
  )
}

export default Login