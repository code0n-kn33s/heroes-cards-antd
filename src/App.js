import React from 'react'
import { Outlet} from 'react-router-dom';
import { Header } from './Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
