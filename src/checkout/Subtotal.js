import React from 'react'
import "./Subtotal.css";
//import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider/StateProvider';
import {useState, useEffect} from 'react';
import {getBasketTotal} from '../StateProvider/Reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

    //first attempt without CurrencyFormat API
    const [price, setPrice] = useState(0);

    const addPrice = (num) => {
        console.log("hello")
        basket.map(item => (
            setPrice(preValue => preValue + item.price)
        ))
    }

    useEffect(() => {
        addPrice()
    }, [])

    return (
        <div className='subtotal'>
            {/* <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> 
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}
                /> */}

                <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
