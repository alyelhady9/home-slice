import '../styles/about.css'
import location from '../../public/images/location.jpg'
import old from '../../public/images/old.jpg'
import modern from '../../public/images/modern.jpg'
const About = (props) => {
    return ( <div className="about" ref={props.toAbout}>
        <div className="title">About us</div>
        <div className="about-content">
            <p className='introduction'>Our journey started since 1970 when we opened our first branch in Alexanderia</p>
            <div className="album">
                <div className="row">
                    <p className='cab'><span> </span>Our first branch opened in downtown alexandria </p>
                    <div className="photo"><img src={location} alt="first branch location photo" /><p className="caption">Our first branch location</p></div>
                </div>
                <div className="row">
                    <div className="photo "><img src={old} alt="a photo of the branch in 70s" /><p className="caption">Our first branch in mid 70s</p></div>
                    <p className='right cab'> <span> </span>Starting from the bottom, we later opened more than 5 branches 4 of them in alexandria and one of them in cairo!</p>
                </div>
                <div className="row">
                    <p className='cab'> <span> </span>Our target is to make you happy with our pizza!</p>
                    <div className="photo"><img src={modern} alt="a modern photo of the branch " /><p className="caption">One of our modern branches</p></div>
                </div>
            </div>
        </div>

    </div> );
}
 
export default About;