import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '/src/app/page'

import '/src/styles/main.scss'
import '/src/styles/tailwind.css'
import '/src/styles/text.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
