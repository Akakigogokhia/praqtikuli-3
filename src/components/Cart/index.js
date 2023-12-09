import { Link } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  return (
    <Link to='/cart'>
      <div id='cart'>
        <i class='fa fa-shopping-cart'></i>
      </div>
    </Link>
  );
};

export default Cart;
