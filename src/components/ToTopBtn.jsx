import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faFaceSmile, faCartShopping,faPhone,faArrowUp           } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


const ToTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false)
    useEffect (() => {
        window.addEventListener('scroll', () => {
                if(window.screenY < 200) {
                    setShowBtn(true)
                }else {
                    
                    setShowBtn(false)
                }
                
            })
        
        },[])

    const scrollToTop = () =>{
        window.scrollTo(
          {
            top:0,
            behavior:'smooth'
          }
        )
      }
    return ( <>
    {
        showBtn &&(

            <div className="to-top" onClick={scrollToTop}>
        
            <FontAwesomeIcon icon={faArrowUp} />
        </div> 
        )
    }
    </>
    );
}
 
export default ToTopBtn;