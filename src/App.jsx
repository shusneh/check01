import { useState } from 'react'
import './App.css'

function App({name}) {
  const [color, setColor] = useState("maroon")
  const [nam, setName] = useState("Ram")
  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color, color:'blue'}}>
      <h1>Hi {nam}</h1>
      <div className='fixed flex-wrap flex  justify-center bottom-12 bg-white'>
        <div>
          <button className='bg-red-700 flex flex-wrap  justify-center' style={{backgroundColor:'purple',color:'blueviolet'}} onClick={()=>{setColor("black");setName('shyam')}}>Shyam</button>
          <button className='bg-red-700 flex flex-wrap  justify-center' style={{backgroundColor:'purple',color:'darkgreen'}} onClick={()=>{setColor("darkgreen");setName('Ram')}}>click me</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
