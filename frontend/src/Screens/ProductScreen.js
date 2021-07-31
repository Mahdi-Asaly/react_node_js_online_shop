import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data'
import "../index.css";
export default function ProductScreen(props) {
    console.log(props.match.params.id)
    const product = data.products.find(x=>x._id === props.match.params.id);         
    return (
        <div > 
            <div className="back-to-home">
                <Link to="/">Back To Results</Link>
            </div>
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
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </li>
                        <li>
                             <button className="add-cart-btn">Add to cart</button>
                        </li>
                        </ul>
                </div>

            </div>
        </div>
    )
}
