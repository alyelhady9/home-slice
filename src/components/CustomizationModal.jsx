import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



const CustomizationModal = ({ showCustomizationModal, setShowCustomizationModal, selectedPizza, selectedSize, setSelectedSize, selectedToppings, setSelectedToppings, pizzaSizes, toppings, addCustomizedPizzaToCart }) =>{

    
    
    return (
        showCustomizationModal && selectedPizza && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Customize Your Pizza</h2>
            <button onClick={() => setShowCustomizationModal(false)} className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img 
                src={selectedPizza.image} 
                alt={selectedPizza.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{selectedPizza.name}</h3>
              <p className="text-gray-600 text-sm">{selectedPizza.description}</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Size</h4>
                <div className="space-y-2">
                  {pizzaSizes.map(size => (
                      <label key={size.id} className="flex items-center space-x-3 cursor-pointer">
                      <input 
                        type="radio" 
                        name="size" 
                        value={size.id}
                        checked={selectedSize === size.id}
                        onChange={() => setSelectedSize(size.id)}
                        className="text-[#e51f1f]"
                        />
                      <span className="text-gray-700">{size.name}</span>
                      <span className="text-[#44ce1b] font-semibold">
                        ${Math.round(selectedPizza.price * size.multiplier)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Extra Toppings</h4>
                <div className="grid grid-cols-2 gap-2">
                  {toppings.map(topping => (
                      <label key={topping.id} className="flex items-center space-x-2 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedToppings.includes(topping.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                              setSelectedToppings(prev => [...prev, topping.id])
                            } else {
                                setSelectedToppings(prev => prev.filter(t => t !== topping.id))
                            }
                        }}
                        className="text-[#e51f1f]"
                        />
                      <span className="text-gray-700">{topping.name}</span>
                      <span className="text-[#44ce1b]">+${topping.price}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-[#44ce1b]">
                    ${Math.round(
                        selectedPizza.price * pizzaSizes.find(s => s.id === selectedSize).multiplier +
                        selectedToppings.reduce((sum, toppingId) => 
                        sum + (toppings.find(t => t.id === toppingId)?.price || 0), 0)
                    )}
                  </span>
                </div>
              </div>
              
              <button 
                onClick={addCustomizedPizzaToCart}
                className="w-full bg-[#e51f1f] text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
)
}

export default CustomizationModal