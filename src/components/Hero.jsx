import '../styles/hero.css'
import original from '../original-background.jpg'
const Hero = (props) => {
    return ( 
        <div className="main-hero">
            <div className="title">
                <p className='hero-paragraph'>Real Italian Pizza With Real Ingredients</p>
                <p className='hero-description'>Indulge in our mouth-watering pizzas, freshly
                    baked with the finest ingredients.
                    delivered hot and fast , straight to your door!
                </p>
                <button onClick={() => {props.scrollToSection(props.toMenu)}}>Visit our menu</button>
            </div>
            <div className="hero-image">
                <img src={original} alt="Main photo 'a photo of a pizza'" />
            </div>
                
            
            
        </div>
    );
}
 
export default Hero;