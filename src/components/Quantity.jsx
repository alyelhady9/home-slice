import { useState } from'react';

const Quantity = ({ item, updateQuantity }) => {


    
    // const [quantity, setQuantity] = useState (1)



 const increment = () => { 
    updateQuantity(item.id, item.quantity + 1)
    
    
    
}
const decrement = () => { 
    
            updateQuantity(item.id, item.quantity - 1)
          
        
    }
    
   
    return ( 
        <div className='quantity'>
            <button className='plus-btn quantity-btn' onClick={increment }>+</button> 
            <p>{item.quantity}</p>
            <button className='minus-btn quantity-btn' onClick={decrement}>-</button>
        </div>
     );
}
export default Quantity;