import { useState } from 'react'
import logo from './assets/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav className="navbar">
        <img src={logo} className="logo-img" />
        <span>Home</span>
        <span>Work</span>
      </nav>
      <div className="container">
        <img src={logo} className="logo-img" />
        <h1>Abes Engineering College</h1>
      </div>
    </>
  )
}

export default App
