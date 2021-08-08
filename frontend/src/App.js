import './App.css';
import React from 'react'
import { BrowserRouter, Route , Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import StatsScreen from './screens/StatsScreen';
import Dropdown from './Dropdown/Dropdown';
import store from './store';
import { Provider } from 'react-redux';



function App() {
  
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  const state = store.getState();
  // <Dropdown items={items}/>

  return (
    <Provider store={store}>

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
           <Dropdown _items={store.cart}/>
            </div>
        </header>
        <aside className="sidebar">
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul className="bar-link">
            <li>
              <Link className="link-products" to="/products">Admin</Link>
            </li>
            <li>
              <Link className="link-home"  to="/">Home</Link>
            </li>
            <li>
            <Link className="link-stats"  to="/stats">Stats</Link>

            </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
              
              <Route path="/products" exact={true} component={ProductsScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>
              <Route path="/product/:id" component={ProductScreen}/>
              <Route path="/cart/:id" component={CartScreen}/>
              <Route path="/stats" component={StatsScreen}/>

        </div>
        
        </main>
        <footer className="footer">
            All Rights Reserved.
        </footer>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
