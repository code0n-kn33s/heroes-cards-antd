import React, { useEffect } from 'react'
import { useLocation, useNavigate, Outlet} from 'react-router-dom';
import { Header } from './Header';
import './App.css';

function App() {
  const location  =  useLocation()
  const navigate =  useNavigate()
  useEffect(() => {
    console.log('location', location)
    location.pathname === "/" && navigate('/main')
  })
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
