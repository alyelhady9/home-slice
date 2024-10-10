import { useState } from 'react';
import '../styles/card.css'
const Card = (props) => {
  
    return ( 
    
    <div className="card" key={props.keyName}>
        <div className="photo"><img src={props.photo} alt={props.name} /></div>
        <div className="content">
            <div className="pizza-name">{props.name}</div>
            <div className="pizza-disc">{props.desc}</div>
            <div className="pizza-price">${props.price}.00</div>
            <div className="order-btn" onClick={() => {props.addItemToCart(props.i)}}>Order Now!</div>
        </div>
    </div>  );
}
 
export default Card;