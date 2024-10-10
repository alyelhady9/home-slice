import { useState } from 'react';
import '../styles/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faFaceSmile, faCartShopping,faPhone ,faXmark,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import delivery from '../../public/images/delivery.jpg'
import Quantity from './Quantity';

const Cart = (props) => {
  const[paid,setPaid] = useState(false)
const onPaid = () => {
    
        setPaid(true)
    
}
const confirm = () => {
    setPaid(false)
    props.setCartItems([])
      props.setOpened(false)
    
}
const increment = (quan) => {
    props.totalPrice * quan
}

return (
    <div className= {`cart ${props.opened}`}>
        
            <header>
                <div className="exit" onClick={props.close}><FontAwesomeIcon icon={faXmark} /></div>

            </header>
            
                <div className="main-cart">
                    
                    {
                        props.cartItems.length === 0? (
                            <div className='empty-cart'>Your Cart Is Empthy!</div>
                        ) : (

                        
                        
                        <>
                        <div className="cart-items">
                            

                            
                            {props.cartItems.map (
                                item => (
                                    <div className='cart-item' key={item.id}>
                                        <div className="item-photo"><img src={item.photo} /></div>
                                            <div className="item-data">
                                                <div className="item-name">{item.name}</div>
                                                <div className="item-price">${item.price}.00</div>
                                                <Quantity removeItemFromCart= {props.removeItemFromCart} item={item.id} itemPrice={item.price}  quantity = {props.quantity}
                                                       increment={props.increment}
                                                       decrement={props.decrement}
                                                       totalPrice={props.totalPrice}

                                                />
                                        </div>
                                        <div className="remove-item" onClick={() => {props.removeItemFromCart(item.id)}}><FontAwesomeIcon icon={faTrashCan} /></div>
                                        
                                    </div>
                                
                                
                            )
                            
                        )}
                        </div>
                        {/* <div className="total-price">
                            
                            <p>Total Price:</p>
                            {
                                `$${props.totalPrice}.00`
                            }
                        </div> */}
                            <div className="confirm-btn" onClick={onPaid}>Check Out!</div>
                        </>
                    )}
                </div>
                {
                    paid && 
                    <div className='confirmation'>
                        <p className='p1'>Payment Successful!</p>
                        <div className="img"><img src={delivery} alt="dilvering pizza"  /></div>
                        <p className='p2'>your order will be delivered to your address within 50 minutes.</p>
                        <div className="confirm-btn" onClick={confirm}>Confirm</div>
                    </div>
                }
                
        </div>
     );
}
 
export default Cart; 