import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const up = () => {
    setCount(count+1);
  }

    const down = () => {
    setCount(count-1);
  }

  return (
    <>
      <div className='main h-screen flex items-center justify-center w-full bg-blue-800'>
        <div className='flex h-96 items-center flex-col gap-7 min-w-auto rounded-4xl bg-yellow-400 p-6 w-3xl shadow-lg'>
          <h4 className='font-bold text-8xl text-shadow-lg'>counter</h4>
          <h2 className='font-bold text-5xl text-shadow-lg bg-amber-50 p-4 rounded-3xl'>{count}</h2>
          <div className='buttons flex items-center justify-evenly w-full'>
            <button className='font-bold text-6xl text-shadow-lg rounded-4xl text-green-500' onClick={up}>+</button>
            <button className='font-bold text-6xl text-shadow-lg text-red-500'  onClick={down}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
