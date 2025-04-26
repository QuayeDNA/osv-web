import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ScrollResetter from './components/ui/ScrollResetter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollResetter>
      <App />
    </ScrollResetter>
  </StrictMode>,
)
