import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const MobileNav = ({ navOpened, toggleNav, heroRef, menuRef, aboutRef, scrollToSection }) => {

    return(
        <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 z-30 md:hidden ${
            navOpened ? 'translate-x-0' : '-translate-x-full'
        }`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold text-[#e51f1f]">Menu</span>
          <button onClick={toggleNav} className="text-gray-500">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        
        <nav className="space-y-4">
          <button 
            onClick={() => { scrollToSection(heroRef); toggleNav(); }}
            className="block w-full text-left py-2 text-gray-700 hover:text-[#e51f1f] transition-colors"
            >
            Home
          </button>
          <button 
            onClick={() => { scrollToSection(menuRef); toggleNav(); }}
            className="block w-full text-left py-2 text-gray-700 hover:text-[#e51f1f] transition-colors"
            >
            Menu
          </button>
          <button 
            onClick={() => { scrollToSection(aboutRef); toggleNav(); }}
            className="block w-full text-left py-2 text-gray-700 hover:text-[#e51f1f] transition-colors"
            >
            About
          </button>
        </nav>
        
        <div className="mt-8 pt-8 border-t">
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900">
              <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            0123 456 7891
          </div>
        </div>
      </div>
    </div>
  )
} 

export default MobileNav;