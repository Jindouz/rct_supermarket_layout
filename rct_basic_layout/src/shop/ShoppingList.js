import React, { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from './ShoppingContext';
import { getAll, getSingleById } from './data';

function ShoppingList({ category }) { // Accept category prop
    const { shoppingData, setShoppingData } = useContext(ShoppingContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getAll());
    }, []);

    const Buy = (id) => {
        const newShoppingData = getSingleById(id);

        const test = shoppingData.filter(item => item.id === id);

        if (test.length > 0) {
            console.log("existing item");
            shoppingData.filter(item => item.id === id)[0].amount += 1;
            setShoppingData([...shoppingData]);
            console.log(newShoppingData);
        } else {
            console.log("new item");
            console.log(newShoppingData);
            newShoppingData.amount = 1;
            setShoppingData([...shoppingData, newShoppingData]);
        }
    };

    // Filter products based on the selected category
    const filteredProducts = products.filter(product => product.category === category);

    return (
        <div>
            
            <div>
                <h2 style={{ textAlign: "center" }}>{category} Products</h2>
                <ul style={{ padding: 0, listStyle: 'none' }}>
                    {filteredProducts.map(item => (
                        <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', paddingBottom: '5px', borderBottom: '1px solid #38cd8c' }}>
                            <span>
                                <i className="fa fa-tag"></i> {item.name}{" "} - {'$' + item.price}.00{" "}
                            </span>
                            <button onClick={() => Buy(item.id)} className='btn btn-primary' style={{ "--bs-btn-padding-y": ".25rem", "--bs-btn-padding-x": ".5rem", "--bs-btn-font-size": ".75rem" }}>Buy</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ShoppingList;
