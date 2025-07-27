


import React from 'react';
import location from '../../public/images/location.jpg'
import old from '../../public/images/old.jpg'
import modern from '../../public/images/modern.jpg'


const About = ({aboutRef}) => {

   return (
        <section ref={aboutRef} className="py-20 bg-white">
      {/* <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#e51f1f] mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1970, we've been bringing authentic Italian flavors to your table with passion, tradition, and the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop"
              alt="Traditional pizza making"
              className="rounded-2xl shadow-lg"
              />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#e51f1f] rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Traditional Recipes</h3>
                <p className="text-gray-600">Passed down through generations, our recipes maintain the authentic taste of Italy.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#e51f1f] rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Ingredients</h3>
                <p className="text-gray-600">We source the finest ingredients directly from Italy to ensure exceptional quality.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#e51f1f] rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Wood-Fired Perfection</h3>
                <p className="text-gray-600">Our traditional wood-fired ovens create that perfect crispy crust and smoky flavor.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      




      <div className="w-full max-md:mt-16 py-8 select-none" >
             <div className="text-5xl text-center text-custom-red">About us</div>
             <div className="w-[90%] m-auto text-xl">
                 <p className='mt-4 mb-8 text-[#0d3d56] italic'>
                     Our journey started since 1970 when we opened our first branch in Alexandria
                 </p>
                 <div className="w-full">
                     <div className="w-full flex items-center justify-between mb-6">
                         <p className='w-3/5 flex items-center'>
                             <span className="inline-block w-4 h-4 bg-[#e51f1f] rounded-full mr-2"></span>
                             Our first branch opened in downtown alexandria
                         </p>
                         <div className="w-2/5 text-center text-base">
                             <img 
                                src={location} 
                                alt="first branch location photo" 
                                className="w-full rounded-2xl border-[0.3rem] border-dashed border-[#e51f1f]"
                            />
                            <p className="mt-4">Our first branch location</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between mb-6">
                        <div className="w-2/5 text-center text-base">
                            <img 
                                src={old} 
                                alt="a photo of the branch in 70s" 
                                className="w-full rounded-2xl border-[0.3rem] border-dashed border-[#e51f1f]"
                            />
                            <p className="mt-4">Our first branch in mid 70s</p>
                        </div>
                        <p className='ml-8 w-3/5 flex items-center'>
                            <span className="inline-block w-4 h-4 bg-[#e51f1f] rounded-full mr-2"></span>
                            Starting from the bottom, we later opened more than 5 branches 4 of them in alexandria and one of them in cairo!
                        </p>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <p className='w-3/5 flex items-center'>
                            <span className="inline-block w-4 h-4 bg-[#e51f1f] rounded-full mr-2"></span>
                            Our target is to make you happy with our pizza!
                        </p>
                        <div className="w-2/5 text-center text-base">
                            <img 
                                src={modern} 
                                alt="a modern photo of the branch" 
                                className="w-full rounded-2xl border-[0.3rem] border-dashed border-[#e51f1f]"
                            />
                            <p className="mt-4">One of our modern branches</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
} 

export default About;