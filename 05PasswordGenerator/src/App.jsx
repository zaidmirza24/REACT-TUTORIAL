import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*()_+{}:?><`"

    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(ch)
    }
    setPassword(pass)

  }, [length, number, char, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])
  
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password]);


  return (
    <>

  <div className="w-full max-w-md mx-auto shadow-md shadow-blue-50 rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-500">
    <h1 className='flex justify-center items-start py-2'>passwordGenerator</h1>
    <div className='flex'>
      <input type="text" value={password}
        placeholder='Password'
        ref={passwordRef}
        className='outline-none w-full py-1 px-3' />
      <button  
      onClick={copyPasswordToClipboard}
      className='outline-none bg-orange-500 text-white px-3 py-0.5'>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
        <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {
            setLength(e.target.value)
          }}
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
          defaultChecked={number}
          id='numberInput'
          onChange={() => {
            setNumber((prev) => !prev)
          }}
        />
      </div>
      <label htmlFor="numberInput">Number</label>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
          defaultChecked={number}
          id='numberInput'
          onChange={() => {
            setChar((prev) => !prev)
          }}
        />
      </div>
      <label htmlFor="numberInput">Character</label>



    </div>
  </div>


    </>
  )
}

export default App
