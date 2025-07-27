import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Cart = ({ cartItems, closeCart, cartOpened, updateQuantity, removeFromCart, proceedToCheckout, pizzaSizes, toppings, getTotalPrice }) => {

    
    return ( 
        <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl transform transition-transform duration-300 z-40 ${
            cartOpened ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Your Order</h2>
        <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faXmark} className="text-xl" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        {cartItems.length === 0 ? (
            <div className="text-center py-12">
            <FontAwesomeIcon icon={faCartShopping} className="text-6xl text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <p className="text-gray-400">Add some delicious pizzas!</p>
          </div>
        ) : (
            <div className="space-y-4">
            {cartItems.map(item => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  <p>Size: {pizzaSizes.find(s => s.id === item.size)?.name}</p>
                  {item.toppings.length > 0 && (
                      <p>Toppings: {item.toppings.map(t => toppings.find(tp => tp.id === t)?.name).join(', ')}</p>
                    )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                      >
                      <FontAwesomeIcon icon={faMinus} className="text-sm" />
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-[#44ce1b] text-white rounded-full flex items-center justify-center hover:bg-green-600"
                      >
                      <FontAwesomeIcon icon={faPlus} className="text-sm" />
                    </button>
                  </div>
                  <span className="font-bold text-[#44ce1b]">${item.finalPrice * item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {cartItems.length > 0 && (
          <div className="border-t p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold text-[#44ce1b]">${getTotalPrice()}</span>
          </div>
          <button 
            onClick={proceedToCheckout}
            className="w-full bg-[#e51f1f] text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
            >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  )
  
}


export default Cart;