import './App.css';
import data from './data'
import React from 'react'
import { BrowserRouter, Route , Link } from 'react-router-dom';
import AdminScreen from './Screens/AdminScreen'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {
  
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
           <div className="brand">
             <button onClick={openMenu}>
               &#9776; 
               </button>
               <Link to="/">Online Shop</Link>
           </div>
           <div className="header-links">
               <a href="cart.html">My Cart </a>
               
            </div>
        </header>
        <aside className="sidebar">
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <h3>Pages</h3>
          <ul>
            <li>
              Admin
            </li>
            <li>
              Home
            </li>
            <li>
              Stats
            </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
              

              <Route path="/" exact={true} component={HomeScreen}/>
              <Route path="/product/:id" component={ProductScreen}/>
              <Route path="/AdminScreen" exact={true} component={AdminScreen}/>

        </div>
        
        </main>
        <footer className="footer">
            All Rights Reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
