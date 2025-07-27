import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const ScrollToTopButton = ( { showToTop, scrollToTop }) => (
    showToTop && (
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 w-16 h-16 right-8 bg-[#e51f1f] text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 z-30 animate-bounce"
      >
        <FontAwesomeIcon className='text-xl' icon={faArrowUp} />
      </button>
    )
  )


  export default ScrollToTopButton