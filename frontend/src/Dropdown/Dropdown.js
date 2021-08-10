import React, {useState,useEffect } from 'react';
import {addToCart,removeFromCart} from '../actions/cartActions';
import {useSelector,useDispatch} from 'react-redux';
import {saveRecord} from '../actions/recordActions';
import {
    savePayment,
  } from '../actions/paymentActions';

import {
    Link
  } from "react-router-dom";

function Dropdown(){
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    const [open , setOpen] = useState(false);

    const recordList = useSelector(state=> state.recordList);
    const { records, loading_ , error_ } = recordList;




    const toggle = ()=> {
        if(open){
          document.querySelector(".dd-wrapper").classList.add("open");
            
        }
        else{
            document.querySelector(".dd-wrapper").classList.remove("open");
        }
        setOpen(!open);
    }

    const handleCart= ()=>{
        setOpen(!open);
    }
    const handleClose= ()=>{
        setOpen(!open);
    }
    useEffect(()=>{

    },[]);

    const checkoutHandler = (e) => {
        e.preventDefault();
        const totalAmount= cartItems.reduce((a,c) =>a + c.price* c.qty, 0);
        dispatch(
          savePayment({
              cartItems,
              totalAmount,
              date:new Date(),
          })
        );
        cartItems.map(item=> 
                    addSale(item.name)
        );
       function addSale(item){
        let soldAmount=1;
        const record = records.map(x=>
            x.item === item); 
        if(record===null || records.length===0)
            console.log('records null')
        records.map(x=>
            console.log('its here'+x)
               ); 
        if(record.length>0){
          console.log('record found'+record);
          soldAmount = record.soldAmount+1; 
        }
        console.log('current sold amount'+soldAmount);

        dispatch(saveRecord({
            item,
            soldAmount,
            date:new Date()
        }))

       }


    };
    return <div> {!open?  <div className="cart-title-bar" onClick={handleCart}>Cart-{cartItems.length}</div>
    :
    <div className="dd-wrapper">
                    <div 
            tabIndex={0}
             className="dd-header"
              role="button" 
              onKeyPress={()=>toggle(!open)}
            onClick={()=>toggle(!open)}></div>
                    <div className="dd-header_action">
                <p>{open?<div className="close-title-bar" onClick={handleClose}>X</div>: 'Cart-'+cartItems.length}</p>
            </div>
        <div className="dd-header">
            <ul className="cart-list-container">
                    <h3>
                        Shopping Cart
                    </h3>
                <li>

                    <div>
                    Product
                    </div>
                    <div>
                    Price
                    </div>
                </li>
                {
                    cartItems.length === 0 ?
                    <div>
                        Cart is empty
                    </div>
                    :
                    cartItems.map(item=> 
                        <li key={item.product}> 
                            
                               <div className="cart-image">
                                    <img src={item.urlImg} className="" alt="product"/>
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={"/product/"+ item.product}>
                                        {item.name}
                                        </Link>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className="cart-price"> 
                                    {item.price}$
                                </div>
                        </li>
                        )
                     }
            </ul>
        </div>
        <div className="cart-action-nav">
            <h3>
                Total({cartItems.reduce((a,c)=>a+c.qty,0)} items)
                :
            ${cartItems.reduce((a,c) =>a + c.price* c.qty, 0)}
            </h3>
            <button className= "button primary full-width pay-button"
            id="paymentbtn"
             onClick={checkoutHandler}
              disabled={cartItems.length===0}>
                  {cartItems.length === 0 ? <div>Add Items to Pay :)</div> : <div>Pay</div>}
            </button>
        </div>
    </div> }
    </div>
}

export default Dropdown;