import { useEffect, useState } from 'react';
import Item from '../Item';
import './itemlist.css';

const ItemList = ({ data }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart')) ?? []
  );

  const addToCart = (id, count) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      const items = cartItems.map((item, index) =>
        index === itemIndex ? { ...item, count: item.count + count } : item
      );
      setCartItems(items);
    } else {
      const item = data.find((item) => item.id === id);
      item.count = count;
      setCartItems([...cartItems, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div id='itemlist'>
      {data.map((item, index) => (
        <Item
          key={`key-${item.id}-${index}`}
          itemData={item}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ItemList;
