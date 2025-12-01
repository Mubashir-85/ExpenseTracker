import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Input from './Components/Input/Input'
function App() {

  return (
    <>
    <center className='border-blue-400 md:w-[30%] w-[70%] mx-auto mt-10 p-5 rounded shadow-lg bg-white '>

      <Header/>
      <Input/>
    </center>
    </>
  )
}

export default App
