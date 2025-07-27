import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Menu = ( { menuData, addToCart, menuRef } ) => 
{

    return(
        <section ref={menuRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#e51f1f] mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with passion, served with love. Each pizza tells a story of authentic Italian tradition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map(pizza => (
              <div key={pizza.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {pizza.isPopular && (
                    <div className="absolute top-4 left-4 bg-[#e51f1f] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <FontAwesomeIcon icon={faFire} className="mr-1" />
                    Popular
                  </div>
                )}
                {pizza.isVegetarian && (
                    <div className="absolute top-4 right-4 bg-[#44ce1b] text-white p-2 rounded-full">
                    <FontAwesomeIcon icon={faLeaf} />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{pizza.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    <FontAwesomeIcon icon={faStar} className="text-sm" />
                    <span className="ml-1 text-sm text-gray-600">{pizza.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pizza.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-[#44ce1b]">
                    ${pizza.price}
                  </div>
                  <button 
                    onClick={() => addToCart(pizza)}
                    className="bg-[#e51f1f] text-white px-6 py-2 rounded-full hover:bg-red-600 transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Customize & Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
  
}
  
  export default Menu;