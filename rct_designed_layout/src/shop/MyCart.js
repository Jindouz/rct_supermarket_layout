import React, { useContext, useEffect } from 'react';
import { ShoppingContext } from './ShoppingContext';
import { Link } from 'react-router-dom';

function MyCart( { toggleMyCart, itemImage } ) {
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

    //if clicked outside of the component, close the cart
    const ClickOutside = (event) => {
        if (!event.target.closest('.container')) {
            toggleMyCart();
        }
    }

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener('click', ClickOutside);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('click', ClickOutside);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    

    return (
        <div className='container' style={{position: 'absolute', top: 110, right: 15, width: 500,
        padding: '5px 20px 15px 20px'
    }}>
        <div className="row g-5 " style={{backgroundColor: "white", padding: '5px 5px 15px 5px',}}>
            <div >
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart <i className="fa fa-shopping-cart"></i></span>
                    <span className="badge bg-primary rounded-pill">{shoppingData.length}</span>
                </h4>
                <ul className="list-group mb-3">
                {shoppingData.length === 0 && <p style={{textAlign: "center"}}>Cart is empty</p>}
                    {shoppingData.map(item => (
                        <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                            <img src={itemImage(item.name)} alt={item.name} style={{ width: '50px', height: '50px', marginLeft: '10px' }} />
                            <div>
                                <h6 className="my-0">{item.name}</h6>
                                <small className="text-body-secondary">Quantity: {item.amount}</small>
                                <small className="text-body-secondary"> (${item.price}.00 each)</small>
                     
                            </div>
                            <span className="text-body-secondary">${item.price * item.amount}.00</span>
                            <button onClick={() => Remove(item.id)} className='btn btn-outline-danger rounded-pill px-2'>Remove</button>
                        </li>
                    ))}
                    {shoppingData.length > 0 && (
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${shoppingData.reduce((acc, curr) => acc + curr.price * curr.amount, 0)}.00</strong>
                        </li>
                    )}
                </ul>
                {shoppingData.length > 0 && <button onClick={clearCart} className='btn btn-danger'>Clear Cart</button>}
                {shoppingData.length > 0 && <Link className="btn btn-primary" style={{position: 'absolute', right: 15}} onClick={toggleMyCart} to="/checkout">Checkout</Link>}
            </div>
        </div>
        </div>
    );
}

export default MyCart;
