import React, { useContext } from 'react';
import { ShoppingContext } from './ShoppingContext';

function QuantityDisplay() {
  const { shoppingData } = useContext(ShoppingContext);

  // Calculate total items by reducing the shoppingData array
  const totalItems = shoppingData.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <div style={{ position: 'absolute', top: 50, right: 50, width: 325, backgroundColor: "#b3e3ce",
    padding: '5px 10px 5px 10px',
    border: '1px solid black',
    borderRadius: '3px',
}}>
      <h4 style={{textAlign: "center"}}>Quantity Display</h4>
      <h5 style={{textAlign: "center"}}>Total items added to Cart: <b>{totalItems}</b> <i className="fa fa-shopping-cart"></i></h5>
    </div>
  );
}

export default QuantityDisplay;
