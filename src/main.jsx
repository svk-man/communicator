import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './home-page/components/Home';
import { CardSearchPage } from './pages/card-search-page/components/CardSearchPage'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)