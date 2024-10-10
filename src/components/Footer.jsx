import '../styles/footer.css'
import Links from './Links';
const Footer = () => {
    return ( 
    <footer>
        <div className="rights">© {new Date().getFullYear()} All rights reserved by <span>Home Slice</span></div>
       
    </footer> );
}
 
export default Footer;