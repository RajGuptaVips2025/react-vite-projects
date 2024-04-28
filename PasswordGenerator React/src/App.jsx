import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()~`|\\/";
    }
  
    for (let i = 0; i < length; i++) { // Use 'length' here instead of 'array.length'
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
  
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 990);
    window.navigator.clipboard.writeText(password)
  }, [password])  

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  



  return (
    <>
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
          <div className="flex rounded-lg overflow-hidden mb-4 py-2">
            <input type="text" value={password} className='outline-none w-full py-4 px-3 my-2.5' placeholder='Password' readOnly ref={passwordRef} />
            <button className="outline-none bg-blue-700 text-white px-0.5 py-0.5 ml-0.5 rounded-lg text-sm" onClick={copyPasswordToClipboard}>Copy</button>
          </div>
          <div className="flex text-sm gap-x-2 pb-2 space-x-6">
            <div className="flex items-center gap-x-1">
              <input type="range" min={6} max={100} value={length} className='cursor-pointer mb-0.3' onChange={(e) => {setLength(e.target.value)}} />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1"> 
              <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />
              <label>Characters</label>
            </div>
          </div>
        </div>
    </>

  )
}

export default App
