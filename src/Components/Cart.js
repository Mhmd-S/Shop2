import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Cart.css'

const Cart = (props) => {

    const cartItems = props.cart.map((item, i) => (<li className="Cart-Item-Container" key={i}>
                                            <img src={item.img} alt="Socks"/>
                                            <div className="Cart-Item-Info-Container">
                                                <button className="Cart-Item-Delete-Item" onClick={()=>{props.removeFromCart(item, 'all')}}>x</button>
                                                <h4>{item.name}</h4>
                                                <h5>{item.price}/p</h5> 
                                                <h5>Total: {(item.price * item.quantity).toFixed(2)}</h5>
                                                <div className='Cart-Item-Quantity-Container'>
                                                    <button onClick={()=>{props.removeFromCart(item, 'one')}}>-</button>
                                                        <span>{item.quantity}</span>
                                                    <button onClick={()=>{props.addToCart(item, 1)}}>+</button>
                                                </div>
                                            </div>
                                        </li>))

    const cart = (
        <div className='Cart-Container'>
        <ul className='Cart-List'>
            {cartItems}
        </ul>
        <div className='Cart-Checkout-Info'>
            <h4>Order Summary</h4>
            <div>{props.totalItems} Items</div>   
            <div>Total: {props.totalPrice.toFixed(2)}</div>
            <button>CheckOut</button>
        </div>
    </div>
    );

    return (
        <>{cartItems[0] ? cart :  
                        <div className='Cart-Container'>
                            <div className='Cart-Empty-Container'>
                                <h2>Cart is empty</h2>
                                <Link to="/Shop">Go to Shop</Link>
                            </div>
                        </div>}</>
    );
}

export default Cart;