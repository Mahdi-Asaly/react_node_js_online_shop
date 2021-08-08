import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { listProducts} from '../actions/productActions';

function HomeScreen (props){
    const productList = useSelector(state=> state.productList);
    const { products, loading , error } = productList;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const dispatch = useDispatch();

    //fetching data from server
    useEffect(()=>{
        dispatch(listProducts());
        return ()=>{

        };
    },[])


    const handleAddToCart = (id,name) => {
        props.history.push("/cart/" + id+"?qty="+ 1)
      };
    
    return loading? <div>loading..</div>:error ? <div>{error}</div>: <div>    

    <ul className="products">
    {
        products.map(product => 
            <li key={product._id}>
            <div className="product">
            <Link to={'/product/' + product._id}>
                 <img className="product-image" src={product.urlImg} alt='' />
            </Link>
            <div className="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">${product.price}</div>
            <button className="pay-button" id={product._id}
             onClick={() => handleAddToCart(product._id,product.name)}>Add To Cart
           </button>
            </div> 
            </li>
        )
    }
  </ul></div>
}

export default HomeScreen;