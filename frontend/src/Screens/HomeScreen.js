import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen (props){
    return <div>     
    <ul className="products">
    {
        data.products.map(product => 
            <li className="product">
            <Link to={'/product/' + product._id}>
                 <img className="product-image" src={product.urlImg} alt='' />
            </Link>
            <div className="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">${product.price}</div>
            <button className="pay-button">Buy</button>
            </li> 
        )
    }
  </ul></div>
}

export default HomeScreen;