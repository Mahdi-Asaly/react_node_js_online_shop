import React, {useEffect} from 'react';
import { listPayments} from '../actions/paymentActions';
import { listRecords} from '../actions/recordActions';
import { useSelector, useDispatch} from 'react-redux';


function StatsScreen(props){

    const dispatch = useDispatch();
    const paymentsList = useSelector(state=> state.paymentList);
    const recordList = useSelector(state=> state.recordList);
    const { payments, loading , error } = paymentsList;
    const { records, loading_ , error_ } = recordList;
    function getTopSold(){
        let items = [];
        records.map(x=>
            items.push(x.item)
        )
        var counts = {};
        items.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
        const myJSON = JSON.stringify(counts);
        console.log("items:",myJSON);
        return myJSON;
    }
    //fetching data from server
    useEffect(()=>{
        dispatch(listPayments());
        return ()=>{
        };
    },[])
    //fetching data from server
    useEffect(()=>{
        getTopSold() 
        dispatch(listRecords());
        return ()=>{
        };
    },[])


    return loading? <div>loading..</div>:error ? <div>{error}</div>:     <div>
            {payments.length<1 ? <div>no payments yet</div> :
            <div className="container">

            <div className="top-sel-payment">

                <h2>Top 5 Sel</h2>
            <div className="gaps"></div>    

                <div className="item-payment-name">
                    {getTopSold()}
                </div>
                <div className="gaps"></div>    

            </div>

            <div className="unique-sel"> 

                <h2>Top 5 unique sel</h2>
                <div className="gaps"></div>    
                <div className="item-payment-name">
                    {getTopSold()}
                </div>
                <div className="gaps"></div>    
            </div>
            <div className="past-days-sel"> 

                <h2>Past 5 days $</h2>
                <div className="gaps"></div>    

                <div className="item-payment-name">
                    {
                        getTopSold()
                    }
                </div>
                <div className="gaps"></div>    

            </div>


            </div>
            
            }

<div className="top-sel-payment">
                <h2>all payments</h2>
                {
               payments.map(item=> 
                <li key={item.product}> 
                        <div className="gaps"></div>                     

                        <div className="item-payment-name">
                            Product: {item.name}
                        </div>
                        <div className="item-payment-price"> 
                            Total Money gained: {item.totalAmount}$
                        </div>
                        <div className="item-payment-price"> 
                            Sold at: {item.date}
                        </div>         
                </li>
                 )} 
            </div>
    </div>
}

export default StatsScreen;