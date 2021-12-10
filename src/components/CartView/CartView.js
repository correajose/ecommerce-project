import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartListItem from '../CartListItem/CartListItem';
import './CartView.css';

const CartView = () => {

    const [cartList, setCartList] = useState();
    const { cart, clear, totalPrice, /* setTotalPrice */ } = useContext(CartContext);

    useEffect( () => {
        setCartList(cart.map(item => <CartListItem key={item.id} itemAdded={item}/>));        
    }, [cart]);


    return (
        
        <div className="cartView">
            {cart.length !== 0 && <button onClick={clear}>vaciar carrito</button>}
            {cartList}
            {cart.length !== 0 && <> <p>Total: ${totalPrice}</p> <button onClick={ () => {}}>finalizar compra</button> </>}
            {cart.length === 0 &&
                <div className="emptyCartBanner">
                    <h1>Tu carrito está vacío :'(</h1> <br/>
                    <Link to="/products/all"><button>ir a productos</button></Link>
                </div>}
        </div>
    )
};

export default CartView;