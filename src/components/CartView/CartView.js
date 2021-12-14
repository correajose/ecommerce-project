import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartListItem from '../CartListItem/CartListItem';
import './CartView.css';

const CartView = ( ) => {

    const [cartList, setCartList] = useState();
    const { cart, clear, totalPrice, computeTotalPrice } = useContext(CartContext);

    useEffect( () => {
        setCartList(cart.map(item => <CartListItem key={item.id} itemAdded={item}/>));
        computeTotalPrice();
    }, [cart, computeTotalPrice]);


    return (
        
        <div className="cartView">
            {cart.length !== 0 ?
                <div>
                    <button onClick={clear} className="clearCart">vaciar carrito</button>
                    <div className="cartList">
                        {cartList}
                    </div>
                    <span className="endPurchase">
                        <Link to="/checkout"><button onClick={ () => {} }>finalizar compra</button></Link>
                        <p id="totalPrice">Total: ${totalPrice}</p>
                    </span>
                </div>
                :   <div className="emptyCartBanner">
                        <h1>Tu carrito está vacío :'(</h1> <br/>
                        <Link to="/products/all"><button>ir a productos</button></Link>
                    </div>}
        </div>
    )
};

export default CartView;