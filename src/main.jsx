import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './home-page/components/Home'

ReactDOM.render(
  <React.StrictMode>
    <Home />
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