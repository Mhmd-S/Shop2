import React, {useState} from 'react';
import './Styles/App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home.js';
import Shop from './Components/Shop.js';
import Cart from './Components/Cart.js';

function App() {

  // Array housing objects with data related to the item added and quantity
  const [ cart, setCart ] = useState([]);

  const addToCart = (sockData, amount) => {

    if (amount == 0) {
      return;
    } 

    let cartCopy = cart.slice();
    
    if (cartCopy.length === 0) { // If the cart is empty, just pus the item to the cart.
      sockData.quantity= amount;
      cartCopy.push(sockData);
      setCart(cartCopy);
      return; // Exit function so we dont go to the loop and waste resources.
    }

    for (let i = 0; i < cartCopy.length; i++) {
      
      if (cartCopy[i].name == sockData.name) { // If the item is in the cart already just add 1 to the quantity.
        if (cartCopy[i].quantity > 98) { // If the current item quantity is > 98 just exit the function
          return;
        }
        cartCopy[i].quantity = cartCopy[i].quantity + amount;  
        break;
      } else if (i == cartCopy.length - 1) { // loop reaches the end and the first if statement wasnt called then it means the item isnt in the cart, so we just push it.
        sockData.quantity = amount;
        cartCopy.push(sockData);
        break;
      }

    }

    setCart(cartCopy);
  }

  const removeFromCart = (sockData, mode) => {
    let cartCopy = cart.slice();
    for (let i = 0; i < cartCopy.length ; i++){
      if (cartCopy[i].name == sockData.name) {
        sockData.quantity == 1  || mode == 'all' ? cartCopy.splice(i, 1) : cartCopy[i].quantity = cartCopy[i].quantity - 1;
      }
    }
    setCart(cartCopy)
  }

    let itemAmount = 0;
    let cartPrice = 0;

    if (cart[0]) {
      for (let i = 0; i < cart.length; i++) {
        let quantity = cart[i].quantity;
        let totalPrice = cart[i].quantity * cart[i].price;
        itemAmount += quantity;
        cartPrice += totalPrice;
  
        // TODO test this function
      } 
    }

  return (
  <div className="App-Container">
    <header className="App-Header">
      <div className="App-Header-Logo">
        <Link to="/"><img src="/logo1.png" alt="Aterbute Logo" /></Link>
      </div>
      <div className="App-Header-List">
        <Link className="App-Header-Link" to="/Shop">Shop</Link>
        <Link className="App-Header-Link" to="/Cart"><div className="App-Header-Cart-Info"><span>Cart</span><span className='Cart-Info-Span'>{itemAmount}</span><span className='Cart-Info-Span'>{cartPrice.toFixed(2)}</span></div></Link>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop addToCart={addToCart} />}/>
      <Route path="/cart" element={<Cart addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} totalPrice={cartPrice} totalItems={itemAmount}/>}/>
    </Routes>
  </div>
  );
}

export default App;
