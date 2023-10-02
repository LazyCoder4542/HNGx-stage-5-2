import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAssistant } from './components/assistantContext'

function App() {
  const [count, setCount] = useState(0)
  const {triggerPopup, clearAssistant} = useAssistant()
  const ref = useRef(null)
  const handleMouseOver = (e) => {
    let rect = e.target.getBoundingClientRect()
    console.log(rect);
    triggerPopup(e.target.getAttribute("aria-label"), {x: rect.x + rect.width, y: rect.y + rect.height})
  }
  const handleMouseOut = (e) => {
    console.log(e);
    clearAssistant()
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        aria-label='Click this button to increase count'
        onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        aria-label='Click this button to reset count'
        onClick={() => setCount(0)}>
          Reset count
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
