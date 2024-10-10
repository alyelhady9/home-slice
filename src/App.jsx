import { useState } from "react"
import About from "./components/About"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Nav from "./components/Nav"
import Overlay from "./components/OverLay"
import { useRef } from "react"
import ToTopBtn from "./components/ToTopBtn"
import NavSide from "./components/NavSide"
import { menu } from "./constants"
function App() {
  const [opened, setOpened] = useState("")
  const openCart = () => {
    if (opened=== "")  {
      setOpened("opened")
    }else {
      
      setOpened("")
    }
  }
  const closeCart = () => {
    if (opened=== "opened")  {
      setOpened("")
    }else {
      
      setOpened("opened")
    }
  }
  const [navOpened, setNavOpened] = useState('')

  const openSideNav = () => {
    if (navOpened === '') {
      setNavOpened("nav-opened") 
    }else {
      
      setNavOpened("") 
    }
  }
  const closeSideNav = () => {
    if (navOpened === 'nav-opened') {
      setNavOpened("") 
    }else {
      
      setNavOpened("nav-opened") 
    }
  }

  const toMenu = useRef(null)
  const toAbout = useRef(null)

  const scrollToSection = (elementRef) =>{
    window.scrollTo(
      {
        top:elementRef.current.offsetTop,
        behavior:'smooth'
      }
    )
  }


// const [totalPrice, setTotalPrice] = useState(0)




const [cartItems, setCartItems] = useState([])

const addItemToCart = (item) => {
  if (
    !cartItems.includes(item)
  ){
    
    setCartItems([...cartItems,item])
  }
  
}

const totalPrice = cartItems.reduce((acc, item) => acc + item.price , 0)
console.log(totalPrice)
// item.price * quan




  const removeItemFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

//  #e51f1f red
// #44ce1b green
  return (
   <div className="App">

      <ToTopBtn />
      {
        opened  && 
        <Overlay closeCart = {closeCart}/>
      }


      <NavSide 
      toMenu={toMenu} 
      scrollToSection={scrollToSection}
      openCart={openCart} 
      toAbout = {toAbout}
      navOpened = {navOpened}
      closeSideNav ={closeSideNav}
      />


      <Cart opened= {opened} setOpened={setOpened} close={closeCart} cartItems={cartItems} setCartItems={setCartItems}
        removeItemFromCart={removeItemFromCart}
        totalPrice={totalPrice}
 
        />


        <div className="main-page" >
          <Nav 
          cartItems={cartItems}
          toMenu={toMenu} 
          scrollToSection={scrollToSection}
          openCart={openCart} 
          toAbout = {toAbout}
          openSideNav ={openSideNav}
          />


          <Hero toMenu ={toMenu}
          scrollToSection={scrollToSection}/>

          <Menu toMenu ={toMenu} addItemToCart={addItemToCart} />

          <About toAbout = {toAbout} />

          <Footer />
        </div>
      
   </div>
  )
}

export default App
