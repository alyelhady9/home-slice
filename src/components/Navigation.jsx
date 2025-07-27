import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Navigation = ({scrollToSection , heroRef, menuRef, aboutRef, isAuthenticated, user, logout, setShowAuthModal, cartItems, openCart, toggleNav}) => {
    return (
        
        <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-lg border-b border-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <div onClick={() => scrollToSection(heroRef)} className="cursor-pointer text-2xl font-bold text-[#e51f1f] italic">
                  Home Slice
                </div>
                <div className="hidden md:flex space-x-6 ">
                  <button onClick={() => scrollToSection(heroRef)} className="text-gray-700 hover:text-[#e51f1f] transition-colors">
                    Home
                  </button>
                  <button onClick={() => scrollToSection(menuRef)} className="text-gray-700 hover:text-[#e51f1f] transition-colors">
                    Menu
                  </button>
                  <button onClick={() => scrollToSection(aboutRef)} className="text-gray-700 hover:text-[#e51f1f] transition-colors">
                    About
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4  ">
                {isAuthenticated ? (
                  <div className="flex items-center  space-x-4">
                    <span className="text-gray-700 max-md:hidden">Hi, {user?.name}!</span>
                    <button onClick={logout} className="text-gray-500 hover:text-[#e51f1f] transition-colors">
                      Logout
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowAuthModal(true)}
                    className="bg-[#e51f1f] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Login
                  </button>
                )}
                
                <button 
                  onClick={openCart}
                  className="relative p-2 text-[#e51f1f] hover:bg-red-50 rounded-lg transition-colors"
                >
                  <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#44ce1b] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
                
                <button onClick={toggleNav} className="md:hidden p-2 text-[#e51f1f]">
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      
    )
}


export default Navigation;