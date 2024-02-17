import React from 'react';
import Cat1 from './Cat1';
import Cat2 from './Cat2';
import Cat3 from './Cat3';
import ShoppingList from './ShoppingList';

const DisplayCategory = ({ selectedCategory }) => {
    let ComponentToRender;

    switch (selectedCategory) {
        case 'page1':
          ComponentToRender = <Cat1/>;
          break;
        case 'page2':
          ComponentToRender = <Cat2/>;
          break;
        case 'page3':
          ComponentToRender = <Cat3/>;
          break;
        case 'Dairy':
          ComponentToRender = <ShoppingList category="Dairy" />;
          break;
        case 'Fruits':
          ComponentToRender = <ShoppingList category="Fruits" />;
          break;
        case 'Bakery':
          ComponentToRender = <ShoppingList category="Bakery" />;
          break;
        default:
          ComponentToRender = null;
      }

  return (
    <div style={{
        position: 'absolute', bottom: 25, left: 25, width: 325, backgroundColor: "#53d99f",
        padding: '20px 20px 20px 20px',
        border: '1px solid black',
        borderRadius: '3px',
    }}>
      <h4 style={{textAlign: "center"}}>Display Category Comp</h4>
      {ComponentToRender}
      
    </div>
  );
};

export default DisplayCategory;
