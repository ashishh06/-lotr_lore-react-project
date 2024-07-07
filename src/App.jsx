import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import bgimage from './assets/bg-img.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <main>
       <img src={bgimage} alt="" className='bg-image'/>
        <Dashboard/>
      </main>     
    </div>
  )
}

export default App
