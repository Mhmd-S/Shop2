import React, {useState} from 'react';
import '../Styles/Product.css'

const Product = (props) => {
    const [inputAmount, setInputAmount] = useState(1);
    const [validInput, setValidInput] = useState(true);

    const handleInput = (e) => {
        let input = e.target.value;

        if (input == '') {
            setInputAmount(0);
            return;
        }

        input = input.replace(/[\D]/,0);
        setInputAmount(parseInt(input));
    }

    const handleTuning = (amount) => {
        if ((inputAmount === 1 && amount === -1) || inputAmount > 98) {
            return;
        }
        setInputAmount(inputAmount + amount)
    }

    const checkInput = () =>{
        if (inputAmount === 0) {
            setValidInput(false);
        } else {
            setValidInput(true);
        }
    }

    return(
        <div className="Product-Container">
            <img src={props.sockinfo.img} alt="Socks"></img>
            <div className='Product-Name-Container'>{props.sockinfo.name}</div>
            <div className='Product-Price-Container'>{props.sockinfo.price}</div>
            <div className="Product-Input-Container">
                <input className={validInput ? 'Product-Input' : 'Product-Input Product-Input-Invalid'} onChange={(e)=>{handleInput(e)}} type="text" maxLength={2} value={inputAmount}></input>
                <button onClick={()=>{handleTuning(-1)}}>-</button>
                <button onClick={()=>handleTuning(1)}>+</button>
            </div>
            <button className="Product-Add-Button" onClick={()=>{props.addToCart(props.sockinfo, inputAmount); checkInput()}}>Add To Cart</button>
        </div>
    )
}


export default Product;