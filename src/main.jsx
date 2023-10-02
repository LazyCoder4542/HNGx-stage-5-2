import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AssistantProvider } from './components/assistantContext.jsx'
import Assistant from './components/assistant.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AssistantProvider>
      <Assistant />
      < App />
    </AssistantProvider>
  </React.StrictMode>,
)
