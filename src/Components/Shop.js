import React from 'react';
import Product from './Product';
import '../Styles/Shop.css'

const Shop = (props) => {

    const socksData = require('../Assets/socks.json');

    const socks = socksData.socks.map((sock, i) => <Product key={i} sockinfo={sock} addToCart={props.addToCart}/>)
    
    return(
        <div className="Shop-Container">
            {socks}
        </div>
    )
}

export default Shop;