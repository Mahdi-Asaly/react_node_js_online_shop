import React, {useState} from 'react';
import '../index.css';
function Dropdown({  multiSelect= false}){
    const [open , setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const [Qnty, setQnty] = useState(0);
    const [items, setItem] = useState('no items');
    const toggle = ()=> {
        if(open){
          document.querySelector(".dd-wrapper").classList.add("open");
            
        }
        else{
            document.querySelector(".dd-wrapper").classList.remove("open");
        }
        setOpen(!open);
    }
    function handleOnClick(item){
        
    }

    return (
        <div className="dd-wrapper">
            <div 
            tabIndex={0}
             className="dd-header"
              role="button" 
              onKeyPress={()=>toggle(!open)}
            onClick={()=>toggle(!open)}>

            <div className="dd-header_title">
                <p className="dd-header_title--bold">  </p>
            </div>
            <div className="dd-header_action">
                <p>{open?'Close': 'Cart-'+Qnty}</p>
            </div>
            {open && (
                <ul className="dd-list">
                    {
                     items? 'no items':
                     items.map(item=>(
                        <li className="dd-list-item" key={item.product}>
                            <span>{item.name}</span>
                            
                            <span>{item.price}</span>
                        </li>
                    )
                    )
                    }
                    <button className="pay-button" onClick={()=>handleOnClick({})}>Pay</button>
                </ul>
            )}
        </div>
        </div>
    )
}
export default Dropdown;