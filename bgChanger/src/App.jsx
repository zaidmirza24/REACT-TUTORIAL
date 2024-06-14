import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="main" style={{backgroundColor: color}}>
      <div className='bar'>
        <div className='bar-inside'>
          
        </div>
          <div className="btn">
          <button
          onClick={()=> setColor("red")}
          >red</button>
          </div>
          <div className="btn">
          <button
          onClick={()=> setColor("blue")}
          >blue</button>
          </div>
          <div className="btn">
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
