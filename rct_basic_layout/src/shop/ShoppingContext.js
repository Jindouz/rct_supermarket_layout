import React, { useEffect, useState } from 'react';

export const ShoppingContext = React.createContext();

export function ShoppingProvider({ children }) {
  const [shoppingData, setShoppingData] = useState(() => {
    const localData = localStorage.getItem('shoppingData');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('shoppingData', JSON.stringify(shoppingData));
  }, [shoppingData]);


  return (
    <ShoppingContext.Provider value={{ shoppingData, setShoppingData }}>
      {children}
    </ShoppingContext.Provider>
  );
}
