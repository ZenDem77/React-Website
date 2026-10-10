import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Watchlist from './Watchlist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Watchlist />
  </StrictMode>,
)
