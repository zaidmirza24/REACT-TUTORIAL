import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("#0f172a")

  return (
    <>
    <div className="main" style={{backgroundColor: color}}>
      <div className='bar bg-slate-400 rounded-xl '>
        
          <div className="btn text-gray-600 px-5 hover:text-white text-sm">
          <button
          onClick={()=> setColor("red")}
          >red</button>
          </div>
          <div className="btn btn text-gray-600 px-5 hover:text-white text-sm">
          <button
          onClick={()=> setColor("blue")}
          >blue</button>
          </div>
          <div className="btn btn text-gray-600 px-5 hover:text-white text-sm">
          <button
          onClick={()=> setColor("green")}
          >green</button>
          </div>
      </div>
    </div>
     
    </>
  )
}

export default App
