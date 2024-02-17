import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from './ShoppingContext';
import { getAll, getSingleById } from './data';
import './ShoppingList.css'




const ShoppingList = ({ category, toggleMyCart, addedToCart }) => {
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
        addedToCart();
    };

    // Filter products based on the selected category
    const filteredProducts = products.filter(product => product.category === category);

    useEffect(() => {
        const cartButtons = document.querySelectorAll('.cart-button');

        cartButtons.forEach(button => {
            button.addEventListener('click', cartClick);
        });

        return () => {
            cartButtons.forEach(button => {
                button.removeEventListener('click', cartClick);
            });
        };
    }, []);

    function cartClick(event) {
        let button = event.target;
        button.classList.add('clicked');
    }

    return (
        <div className="wrapper">
            <div>
                <h2 style={{ textAlign: "center" }}>{category} Products</h2>
                <div className="container">
                <div className="row g-1">
                    {filteredProducts.map(item => (
                        <div key={item.id} className="col-md-3">
                            <div className="card p-3">
                                <div className="text-center">
                                    <img src={item_image(item.name)} width="200" alt={item.name} />
                                </div>
                                <div className="product-details">
                                    <span className="font-weight-bold d-block">$ {item.price}.00</span>
                                    <span>{item.name}</span>
                                    <div className="buttons d-flex flex-row">
                                        <div className="cart" onClick={() => toggleMyCart()}><i className="fa fa-shopping-cart"></i></div>
                                        <button onClick={() => Buy(item.id)} className='btn btn-success cart-button btn-block'><span className="dot">1</span>Add to cart</button>
                                    </div>
                                    <div className="weight"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>

    )
}

const item_image = (item_name) => {
    if (item_name === 'Milk') {
        return "https://i.imgur.com/iFVa0HS.jpeg";
    }
    else if (item_name === 'Cheese') {
        return "https://i.imgur.com/PUTXUd0.jpeg";
    }
    else if (item_name === 'Yogurt') {
        return "https://i.imgur.com/giJVe11.jpeg";
    }
    else if (item_name === 'Apples') {
        return "https://i.imgur.com/GEyEJDF.jpeg";
    }
    else if (item_name === 'Bananas') {
        return "https://i.imgur.com/hYMvijd.jpeg";
    }
    else if (item_name === 'Strawberries') {
        return "https://i.imgur.com/BsCea9A.jpeg";
    }
    else if (item_name === 'Bread') {
        return "https://i.imgur.com/sMrMmuF.jpeg";
    }
    else if (item_name === 'Bagels') {
        return "https://i.imgur.com/E9AQnpe.jpeg";
    }
    else if (item_name === 'Croissants') {
        return "https://i.imgur.com/lQn7oXA.jpeg";
    }
    else if (item_name === 'Buns') {
        return "https://i.imgur.com/eRprIob.jpeg";
    }
    else {
        return "https://i.imgur.com/5LSZKOc.jpeg"
    }
}



export default ShoppingList
export { item_image }