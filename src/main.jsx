import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { setupPerformanceLogging } from './utils/perf.js'

if (import.meta.env.DEV) {
  setupPerformanceLogging()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
