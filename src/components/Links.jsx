import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faFaceSmile, faCartShopping,faPhone           } from '@fortawesome/free-solid-svg-icons'
import {   faXTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/links.css'
const Links = () => {

    return (  
        <div className='links links-side'>
            <a href="https:/facebook.com"><FontAwesomeIcon icon={faFacebook} className='facebook-icon'/></a>
            <a href="https:/x.com"><FontAwesomeIcon icon={faXTwitter} className='x-icon'/></a>
            <div className="phone">
                <FontAwesomeIcon icon={faPhone} className='phone-icon'/>
                <p>0123 456 7891</p>
            </div>
        </div>
    );
}
 
export default Links;