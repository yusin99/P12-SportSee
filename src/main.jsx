import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import {MyRouter as Routes} from './Router.jsx'

ReactDOM.createRoot(document.getElementById('ss-root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
