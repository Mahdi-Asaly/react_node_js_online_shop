import './App.css';
import React from 'react'
import { BrowserRouter, Route , Link } from 'react-router-dom';
import AdminScreen from './screens/AdminScreen'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';

import Dropdown from './Dropdown/Dropdown';
function App() {
  
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }


  // <Dropdown items={items}/>

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
           <div className="brand">
             <button onClick={openMenu}>
               &#9776; 
               </button>
               <Link to="/">Online Shop</Link>
               <Link to="/products"> Admin </Link>
           </div>
           <div className="header-links">
           <Dropdown/>
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
              
              <Route path="/products" exact={true} component={ProductsScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>
              <Route path="/product/:id" component={ProductScreen}/>
              <Route path="/cart/:id" component={CartScreen}/>
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
