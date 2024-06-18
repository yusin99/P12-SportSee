import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import {MyRouter as Routes} from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
