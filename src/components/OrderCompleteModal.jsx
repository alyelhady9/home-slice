import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



const OrderCompleteModal = ({ orderComplete, estimatedTime, confirmOrder }) =>
{

    return(
        orderComplete && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-[#44ce1b] rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faFaceSmile} className="text-3xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600">Thank you for your order!</p>
          </div>
          
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=300&h=200&fit=crop"
              alt="Delivery"
              className="w-full h-32 object-cover rounded-lg mb-4"
              />
            <p className="text-lg text-gray-800">
              Your delicious pizza will be delivered in <span className="font-bold text-[#e51f1f]">{estimatedTime} minutes</span>
            </p>
          </div>
          
          <button 
            onClick={confirmOrder}
            className="w-full bg-[#e51f1f] text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
)
}

export default OrderCompleteModal