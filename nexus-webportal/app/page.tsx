import Image from 'next/image'
import React from 'react'
import Register from './register/page'
import Login from './login/page'


export default function Home() {
  return (
    <main>
      <div>
      <Register/>
      <Login/>
      </div>
    </main>
  )
}
