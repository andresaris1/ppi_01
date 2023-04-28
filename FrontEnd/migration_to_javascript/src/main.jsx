import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "leaflet/dist/leaflet.css";
import { BrowserRouter } from 'react-router-dom'
import { SessionContext } from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionContext>
        <App />
      </SessionContext>
    </BrowserRouter>
  </React.StrictMode>,
)

