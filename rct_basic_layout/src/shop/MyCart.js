import React, { useContext, useState } from 'react';
import { ShoppingContext } from './ShoppingContext';
import { Link } from 'react-router-dom';

function MyCart() {
    const { shoppingData, setShoppingData } = useContext(ShoppingContext);


    const Remove = (id) => {
        setShoppingData(prevData => prevData.map(item => {
            if (item.id === id) {
                // If quantity is greater than 1, decrement it
                if (item.amount > 1) {
                    return { ...item, amount: item.amount - 1 };
                } else {
                    // If quantity is 1, return null to remove the item from the cart
                    return null;
                }
            }
            return item;
        }).filter(Boolean)); // Remove null items from the array
    };

    const clearCart = () => {
        setShoppingData([]);
        console.log("Cart cleared");
    }


    return (
        <div style={{position: 'absolute', top: 190, right: 50, width: 325, backgroundColor: '#38cd8c',
            padding: '5px 20px 15px 20px',
            border: '1px solid black',
            borderRadius: '3px',
        }}>
            <h2 style={{textAlign: "center"}}>My Cart</h2>

            {shoppingData.length === 0 && <p style={{textAlign: "center"}}>Cart is empty</p>}

            <ul style={{ padding: 0, listStyle: 'none' }}>
                {shoppingData.map(item => (
                    <li key={crypto.randomUUID()} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px',paddingBottom: '5px',borderBottom: '1px solid #53d99f' }}>
                       <span>
                       <i className="fa fa-tag"></i> {item.name} - ${item.price}.00 ({item.amount}) 
                        </span>
                        <button onClick={() => Remove(item.id)} className='btn btn-danger rounded-pill px-2' style={{ "--bs-btn-padding-y": ".25rem", "--bs-btn-padding-x": ".5rem", "--bs-btn-font-size": ".75rem" , marginLeft: "5px"}}>Remove</button>
                    </li>
                ))}
            </ul>
            {shoppingData.length > 0 &&<button onClick={clearCart} className='btn btn-danger' style={{ "--bs-btn-padding-y": ".25rem", "--bs-btn-padding-x": ".5rem", "--bs-btn-font-size": ".75rem" , marginBottom: "10px", marginLeft: "50px"}}>Clear Cart</button>}
            {shoppingData.length > 0 && <Link className="btn btn-primary" to="/checkout" style={{ "--bs-btn-padding-y": ".25rem", "--bs-btn-padding-x": ".5rem", "--bs-btn-font-size": ".75rem" , marginBottom: "10px", marginLeft: "50px"}}>Checkout</Link>}

        </div>
    );
}

export default MyCart;

