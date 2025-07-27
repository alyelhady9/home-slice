
import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faPhone, faXmark, faTrashCan, faArrowUp, faEnvelope, faFaceSmile, faUser, faLock, faEye, faEyeSlash, faStar, faPlus, faMinus, faCrown, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



const AuthModal = ( {setAuthMode, authMode, handleAuth, showAuthModal, setShowAuthModal, showPassword, setShowPassword}) => {

  return  ( 
        showAuthModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <button onClick={() => setShowAuthModal(false)} className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </button>
          </div>
          
          <form onSubmit={handleAuth} className="space-y-4">
            {authMode === 'signup' && (
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    type="text" 
                    name="name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e51f1f] focus:border-transparent"
                    placeholder="Enter your name"
                    required
                    />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="email" 
                  name="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e51f1f] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                  />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e51f1f] focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                  >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-[#e51f1f] text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          <div className="text-center mt-4">
            <button 
              onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
              className="text-[#e51f1f] hover:underline"
              >
              {authMode === 'login' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    )
  )
} 

export default AuthModal;