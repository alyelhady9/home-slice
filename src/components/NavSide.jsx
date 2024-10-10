import Links from "./Links";
import '../styles/sidenav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
const NavSide = (props) => {
    return ( 
<div className={`nav-side ${props.navOpened}`}>
                <div className="close-side-nav" onClick={props.closeSideNav}>
                    <div className="close-btn">

                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <ul>
                    {/* <li>Home</li> */}
                    <li  className='menu-btn' onClick={
                        () => {
                            props.closeSideNav()
                            props.scrollToSection(props.toMenu)
                        }
                    } >Menu</li>
                    <li onClick={
                        () => {
                            props.closeSideNav()
                            props.scrollToSection(props.toAbout)
                        }
                    }>About us</li>
                  <Links />
                </ul>

           
</div> );
}
 
export default NavSide;