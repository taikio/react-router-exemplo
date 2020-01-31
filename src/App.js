import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import Routes from './routes';

import Menu from './components/Menu';

import './index.css';

function App() {
  return (
    <div id='app'>     
      <Router>
        <aside>
          <Menu />
        </aside>
        <main>
          <div className="main-container">
            <Routes />
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
