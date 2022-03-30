import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
)

function Welcome() {
  return (
    <div>
      Hello, world!
    </div>
  )
}