import '../styles/menu.css'
import { menu } from '../constants';
import Card from './Card';
const Menu = (props) => {
    return ( 
        <div className="main-menu" ref={props.toMenu}>
            <div className="title">Menu</div>
            <div className="menu-grid">
                {
                    menu.map((product,i ) => (
                        <Card 
                        i ={product}
                        key={menu[i].id}
                        keyName={menu[i].id}
                        photo = {menu[i].photo}
                        name = {menu[i].name}
                        desc = {menu[i].description}
                        price = {menu[i].price}
                        addItemToCart = {props.addItemToCart}
                        add={props.add}
                        />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Menu;