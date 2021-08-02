import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import "../index.css";
import {useSelector, useDispatch} from 'react-redux';
import {detailsProduct} from '../actions/productActions';
export default function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state=>state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return ()=>{
            
        };
    },[]);
    const handleAddToCart= ()=>{
        props.history.push("/cart/" + props.match.params.id+"?qty="+ qty)
    }
    console.log(product);
    return (
        <div > 
            <div className="back-to-home">
                <Link to="/">Back To Results</Link>
            </div>
            {loading? <div>loading..</div>:
            error? <div>{error}</div>:
            (
                <div className="details">
                <div className="details-image">
                    <img src={product.urlImg} alt="product">
                    </img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            <h4>{product.description}</h4> 
                        </li>
                        <li>
                            <b>{product.price}$</b>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.price}$
                        </li>
                        <li>
                            Qty: <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                                {[...Array(product.countInStock).keys()].map(x=>
                                    <option key={x+1} value={x+1}>{x+1}</option>)}
                            </select>
                        </li>
                        <li>
                            {product.countInStock>0 ?
                             <button onClick={handleAddToCart} className="add-cart-btn">Add to cart</button>
                            :<div className="out-of-stock">Not Available</div>}
                        </li>
                        </ul>
                </div>

            </div>
            )    
        }

        </div>
    )
}
