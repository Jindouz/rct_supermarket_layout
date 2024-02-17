import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from './ShoppingContext';



const Total = () => {
    const { shoppingData, setShoppingData } = useContext(ShoppingContext);
    const [total, settotal] = useState(0)

    useEffect(() => {
        // middle variable
        let newTotal = 0;
        shoppingData.forEach(item => {
            newTotal += item.price * item.amount;
        });
        settotal(newTotal);
    }, [shoppingData])

    return (
        <div style={{ position: 'absolute', top: 140, right: 50, width: 325, backgroundColor: "#aae0c8",
        padding: '5px 20px 5px 20px',
        border: '1px solid black',
        borderRadius: '3px',
    }}>
            <h5 style={{textAlign: "center"}}>Total to Pay: <b>${total}.00 USD</b></h5>
            </div>
    )
}

export default Total