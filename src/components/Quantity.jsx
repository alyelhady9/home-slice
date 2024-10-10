import { useState } from'react';

const Quantity = (props) => {


    
    const [quantity, setQuantity] = useState (1)



 const increment = () => { 
        setQuantity(quantity + 1)
        
    }
    const decrement = () => { 
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }else {
            props.removeItemFromCart(props.item)
        }
        
    }
    
   
    return ( 
        <div className='quantity'>
            <button className='plus-btn quantity-btn' onClick={increment }>+</button> 
            <p>{quantity}</p>
            <button className='minus-btn quantity-btn' onClick={decrement}>-</button>
        </div>
     );
}
export default Quantity;