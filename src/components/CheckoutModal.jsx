const CheckoutModal = ({showCheckout, setShowCheckout, getTotalPrice, completeOrder}) => {

    return (
        showCheckout && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Delivery Address</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e51f1f] focus:border-transparent"
                rows="3"
                placeholder="Enter your full address"
                required
                />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e51f1f] focus:border-transparent"
                placeholder="Enter your phone number"
                required
                />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e51f1f] focus:border-transparent">
                <option>Cash on Delivery</option>
                <option>Credit Card</option>
                <option>PayPal</option>
              </select>
            </div>
          </div>
          
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total Amount:</span>
              <span className="text-[#44ce1b]">${getTotalPrice()}</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => setShowCheckout(false)}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
              Cancel
            </button>
            <button 
              onClick={completeOrder}
              className="flex-1 bg-[#e51f1f] text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
              Place Order
            </button>
          </div>
        </div>
      </div>
    )
)

}

export default CheckoutModal;