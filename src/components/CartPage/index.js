import { useEffect, useState } from 'react';
import CartItem from '../CartItem';
import './cartPage.css';

const CartPage = () => {
  const [total, setTotal] = useState(0);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart')) ?? []
  );

  const countTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    setTotal(total);
  };

  useEffect(() => {
    countTotal();
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems, total]);

  const changeQuantity = (event, id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, count: event.target.value } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className='cartPage'>
      <div className='cartPage-items'>
        {cartItems.map((cartItem, index) => (
          <CartItem
            key={`item-id:${cartItem.id}index:${index}`}
            cartItemData={cartItem}
            changeQuantity={changeQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>

      <div className='cartPage-total'>{'total: ' + total + '$'}</div>
    </div>
  );
};

export default CartPage;
