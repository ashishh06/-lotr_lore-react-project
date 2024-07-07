import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <main>
       <img src="https://rare-gallery.com/uploads/posts/571439-the-lord-of.jpg" alt="" className='bg-image'/>
        <Dashboard/>
      </main>     
    </div>
  )
}

export default App
