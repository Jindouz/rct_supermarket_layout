import { useState } from 'react';
import { ShoppingProvider } from './shop/ShoppingContext';
import ShoppingList from './shop/ShoppingList';
import CategoryLinks from './shop/CategoryLinks';
import MyCart from './shop/MyCart';
import { Outlet } from 'react-router';
import DisplayPages from './components/DisplayPages';
import { item_image } from './shop/ShoppingList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Dairy'); // set to null to hide component until selected
  const [showMyCart, setShowMyCart] = useState(false);
  const [selectedPage, setSelectedPage] = useState('page1');
  const [toggledPage, setToggledPage] = useState(false);

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const selectPage = (page) => {
    setSelectedPage(page);
    setToggledPage(true);
  };

  const togglePage = () => {
    setToggledPage(!toggledPage);
  };

  const addedToCart = () => {
    setShowMyCart(true);
  };

  const toggleMyCart = () => {
    setShowMyCart(!showMyCart);
  };

  return (
    <div>
      <ShoppingProvider>
        <CategoryLinks selectCategory={selectCategory} toggleMyCart={toggleMyCart} selectPage={selectPage} />
        <Outlet />
        {showMyCart && <MyCart toggleMyCart={toggleMyCart} itemImage={item_image} />}
        {toggledPage && <DisplayPages selectedPage={selectedPage} togglePage={togglePage} />}
        {selectedCategory && <ShoppingList category={selectedCategory} toggleMyCart={toggleMyCart} addedToCart={addedToCart} />}
      </ShoppingProvider>
    </div>
  );
}

export default App;
