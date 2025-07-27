

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = ({scrollToSection, aboutRef, menuRef, heroRef}) => {
  return (

    <footer className="bg-[#e51f1f] text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold italic mb-4">Home Slice</h3>
          <p className="text-red-100">
            Authentic Italian pizza delivered fresh to your door since 1970.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-red-100">
            <li><button onClick={() => scrollToSection(menuRef)} className="hover:text-white transition-colors">Menu</button></li>
            <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-white transition-colors">About Us</button></li>
            
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-red-100">
            <p><FontAwesomeIcon icon={faPhone} className="mr-2" />0123 456 7891</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />info@homeslice.com</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-red-100 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
            <a href="#" className="text-red-100 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
            </a>
            <a href="#" className="text-red-100 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-red-400 mt-8 pt-8 text-center text-red-100">
        <p>&copy; {new Date().getFullYear()} Home Slice. All rights reserved.</p>
      </div>
    </div>
  </footer>
)
}

export default Footer;