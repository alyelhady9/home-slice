
import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Menu from "./components/Menu"
import About from "./components/About"
import Cart from "./components/Cart"
import ScrollToTopButton from "./components/ScrollToTopButton"
import MobileNav from "./components/MobileNav"
import AuthModal from "./components/AuthModal"
import OrderCompleteModal from "./components/OrderCompleteModal"
import CheckoutModal from "./components/CheckoutModal"
import CustomizationModal from "./components/CustomizationModal"
// Mock data for menu items with realistic prices and descriptions
import { menuData, toppings,pizzaSizes } from "./constants"


// Pizza sizes with pricing multipliers

// Additional toppings

function App() {
  // Auth states
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('login') // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState(null)

  // Cart and UI states
  const [cartOpened, setCartOpened] = useState(false)
  const [navOpened, setNavOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [showToTop, setShowToTop] = useState(false)
  
  // Customization modal
  const [showCustomizationModal, setShowCustomizationModal] = useState(false)
  const [selectedPizza, setSelectedPizza] = useState(null)
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedToppings, setSelectedToppings] = useState([])
  
  // Checkout states
  const [showCheckout, setShowCheckout] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [estimatedTime, setEstimatedTime] = useState(0)

  // Refs for smooth scrolling
  const heroRef = useRef(null)
  const menuRef = useRef(null)
  const aboutRef = useRef(null)

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Auth functions
  const handleAuth = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')
    const name = formData.get('name')
    
    // Mock authentication
    setUser({ name: name || email.split('@')[0], email })
    setIsAuthenticated(true)
    setShowAuthModal(false)
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setCartItems([])
  }

  // Cart functions
  const openCart = () => setCartOpened(true)
  const closeCart = () => setCartOpened(false)
  const toggleNav = () => setNavOpened(!navOpened)

  const addToCart = (pizza) => {
    if (!isAuthenticated) {
      setShowAuthModal(true)
      return
    }
    setSelectedPizza(pizza)
    setShowCustomizationModal(true)
  }

  const addCustomizedPizzaToCart = () => {
    const basePrice = selectedPizza.price * pizzaSizes.find(s => s.id === selectedSize).multiplier
    const toppingsPrice = selectedToppings.reduce((sum, toppingId) => 
      sum + (toppings.find(t => t.id === toppingId)?.price || 0), 0)
    
    const customizedPizza = {
      ...selectedPizza,
      id: `${selectedPizza.id}-${Date.now()}`,
      size: selectedSize,
      toppings: selectedToppings,
      finalPrice: Math.round(basePrice + toppingsPrice),
      quantity: 1
    }

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => 
        item.id === selectedPizza.id && 
        item.size === selectedSize && 
        JSON.stringify(item.toppings) === JSON.stringify(selectedToppings)
      )
      
      if (existingIndex >= 0) {
        return prev.map((item, index) => 
          index === existingIndex 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, customizedPizza]
    })

    setShowCustomizationModal(false)
    setSelectedSize('medium')
    setSelectedToppings([])
    setCartOpened(true)
  }

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId)
      return
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0)
  }

  const proceedToCheckout = () => {
    setShowCheckout(true)
  }

  const completeOrder = () => {
    setEstimatedTime(Math.floor(Math.random() * 30) + 20)
    setOrderComplete(true)
    setShowCheckout(false)
  }

  const confirmOrder = () => {
    setOrderComplete(false)
    setCartItems([])
    setCartOpened(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrollToSection = {scrollToSection} heroRef = {heroRef} menuRef = {menuRef} aboutRef = {aboutRef} user = {user}  
      isAuthenticated = {isAuthenticated} setAuthMode = {setAuthMode}  logout = {logout} cartItems = {cartItems} 
      openCart = {openCart} toggleNav = {toggleNav} setShowAuthModal={setShowAuthModal}
      />



      <Hero  scrollToSection = {scrollToSection} heroRef = {heroRef}  menuRef = {menuRef} aboutRef = {aboutRef}  />



      <Menu menuData={menuData} addToCart={addToCart} menuRef={menuRef}/>



      <About  aboutRef = {aboutRef} />



      <Footer aboutRef = {aboutRef} menuRef = {menuRef} heroRef = {heroRef} scrollToSection = {scrollToSection}/>
      


      <Cart cartItems = {cartItems} cartOpened = {cartOpened} closeCart = {closeCart} updateQuantity = {updateQuantity} 
      removeFromCart = {removeFromCart} getTotalPrice = {getTotalPrice} proceedToCheckout = {proceedToCheckout} pizzaSizes = {pizzaSizes} toppings = {toppings}
      />



      <MobileNav  navOpened = {navOpened} toggleNav = {toggleNav}  heroRef={heroRef} menuRef={menuRef} aboutRef={aboutRef} scrollToSection={scrollToSection}/>



      <AuthModal  showAuthModal = {showAuthModal} setShowAuthModal={setShowAuthModal} setAuthMode = {setAuthMode} handleAuth = {handleAuth} 
      authMode={authMode} showPassword={showPassword} setShowPassword={setShowPassword}  />



      <CustomizationModal
        showCustomizationModal={showCustomizationModal} setShowCustomizationModal={setShowCustomizationModal}
        selectedPizza={selectedPizza} setSelectedPizza={setSelectedPizza}
        selectedSize={selectedSize} setSelectedSize={setSelectedSize}
        selectedToppings={selectedToppings} setSelectedToppings={setSelectedToppings}
        pizzaSizes={pizzaSizes} toppings={toppings}
        addCustomizedPizzaToCart={addCustomizedPizzaToCart}
      
      />



      <CheckoutModal showCheckout={showCheckout} completeOrder={completeOrder} setShowCheckout = {setShowCheckout} getTotalPrice = {getTotalPrice} />



      <OrderCompleteModal
      orderComplete={orderComplete} estimatedTime={estimatedTime} confirmOrder={confirmOrder}
      />



      <ScrollToTopButton showToTop={showToTop} scrollToTop={scrollToTop} />
      
      
      {navOpened && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleNav}
        />
      )}
      

      {cartOpened && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={closeCart}
        />
      )}
      
     
    </div>
  )
}

export default App