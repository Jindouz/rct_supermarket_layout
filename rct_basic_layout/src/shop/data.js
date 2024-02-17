const products = [
    { id: 1, name: 'Milk', price: 4, category: 'Dairy' },
    { id: 2, name: 'Cheese', price: 5, category: 'Dairy' },
    { id: 3, name: 'Yogurt', price: 3, category: 'Dairy' },
    { id: 4, name: 'Apples', price: 2, category: 'Fruits' },
    { id: 5, name: 'Bananas', price: 1, category: 'Fruits' },
    { id: 6, name: 'Strawberries', price: 3, category: 'Fruits' },
    { id: 7, name: 'Bread', price: 2, category: 'Bakery' },
    { id: 8, name: 'Bagels', price: 3, category: 'Bakery' },
    { id: 9, name: 'Croissants', price: 4, category: 'Bakery' },
    { id: 10, name: 'Buns', price: 5, category: 'Bakery' },
  ];

const getAll=()=>{
    return products 
}
const getSingle=(ind)=>{
    return products[ind]
}

const getSingleById=(id)=>{
    return products.filter(product => product.id === id)[0]
}

export {getAll, getSingle, getSingleById}

