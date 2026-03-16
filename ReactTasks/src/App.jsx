import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Application from './components/Application'
import Counter from './components/Counter'
import Buttons from './components/Buttons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
   <Application />
   <Counter />
   <Buttons />
    </>
  )
}

export default App
