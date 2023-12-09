import './cartItem.css';
const CartItem = ({ cartItemData, changeQuantity, removeItem }) => {
  return (
    <div className='cartItem'>
      <div className='cartItem-image'>
        <img src={cartItemData.imgUrl} className='resp-img' />
      </div>
      <p>
        <b>Name:</b>
        {cartItemData.name}
      </p>
      <div>
        <b>Description:</b>
        <p>{cartItemData.description}</p>
      </div>
      <p>
        <b>Price:</b>
        {cartItemData.price}$
      </p>
      <p>
        <input
          type='number'
          className='cartItem-count'
          defaultValue={cartItemData.count}
          onChange={(e) => changeQuantity(e, cartItemData.id)}
          min={1}
        />
      </p>
      <p>
        <button onClick={() => removeItem(cartItemData.id)}>remove</button>
      </p>
    </div>
  );
};

export default CartItem;
