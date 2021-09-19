// Imports
// ========================================================
import React from 'react'
import ReactDOM from 'react-dom'
import RootProvider from './providers'
import App from './App'

// Main Render
// ========================================================
ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
