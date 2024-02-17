import { Outlet } from "react-router-dom";
import { ShoppingProvider } from "./shop/ShoppingContext";
import MyCart from "./shop/MyCart";
import QuantityDisplay from "./shop/QuantityDisplay";
import Total from "./shop/Total";
import CategoryLinks from "./shop/CategoryLinks";
import DisplayCategory from "./shop/DisplayCategory";
import { useState } from "react";


const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('Dairy'); // set to null to hide component until selected

    const selectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div >
            <ShoppingProvider>
                <Outlet></Outlet>
                <CategoryLinks selectCategory={selectCategory} />
                {selectedCategory && <DisplayCategory selectedCategory={selectedCategory} />}
                <QuantityDisplay />
                <Total />
                <MyCart />
            </ShoppingProvider>
        </div>
    );
}

export default App;


