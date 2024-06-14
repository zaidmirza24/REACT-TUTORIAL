import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name:"zaid",
    age:"19"
  }

  let myarr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Iam Using TailwindCSS</h1>
      <Card name="zaidMirza" btnText="visit Me" />
      <Card name="salmon" btnText="CLick me"/>
      <Card myarr={myarr} />
      <Card />
    </>
  )
}

export default App
