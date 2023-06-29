import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './greeting'
import Container from './container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>First React App</h1>
      <p>jj</p>
      < Greeting/>
      < Container/>
    </div>
  );
    
}

export default App
