import React, {useEffect } from 'react';
import addToCart from '../actions/cartActions';
import {useSelector,useDispatch} from 'react-redux';

function CartScreen(props){
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    useEffect(()=>{
        if(productId)
        {
            dispatch(addToCart(productId,qty));
        }
    },[])

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                    Price:
                </div>
                </li>
                <div>{
                    cartItems.length === 0 ?
                    <div>
                        cart is empty
                    </div>
                    :
                    cartItems.map(item=> 
                        <div>
                            <img src={item.urlImg} alt="product"/>
                            <div className="cart-name">
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    Qty:
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                {item.price}
                            </div>
                        </div>
                        )
                     }
                </div>
                
                
            </ul>
        </div>
        <div className="cart-action">
            
        </div>
    </div>
}

export default CartScreen;