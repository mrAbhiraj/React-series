import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black") ;



  return (
    <>
     <div className='w-full h-screen flex justify-center items-center   bg-red-500 ' style={{backgroundColor : color}}>
         <div className= 'w-1/2 absolute left-50  flex justify-between flex-wrap p-5 rounded-md my-5 bg-white' id="nav">
             <button  onClick={()=> setColor("red")} className='text-white bg-red-700 px-4 py-2 rounded-md'>Red</button>
             <button  onClick={()=> setColor("blue")} className='text-white bg-blue-700 px-4 py-2 rounded-md'>Blue</button>

             <button  onClick={()=> setColor("green")} className='text-white bg-green-700 px-4 py-2 rounded-md'>Green</button>

             <button  onClick={()=> setColor("gray")} className='text-white bg-gray-400 px-4 py-2 rounded-md'>Gray</button>

             <button  onClick={()=> setColor("violet")} className='text-white bg-violet-700 px-4 py-2 rounded-md'>violet</button>

         </div>
     </div>
    </>
  )
}

export default App
