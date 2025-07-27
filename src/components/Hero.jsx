const Hero = ({scrollToSection, menuRef, aboutRef, heroRef}) =>
{

    
   return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-[#e51f1f] mb-6 animate-fade-in">
            Authentic Italian
            <span className="block text-gray-800">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From our wood-fired ovens to your table. Premium ingredients, traditional recipes, modern twist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
                onClick={() => scrollToSection(menuRef)}
                className="bg-[#e51f1f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                Explore Menu
            </button>
            <button 
                onClick={() => scrollToSection(aboutRef)}
                className="border-2 border-[#e51f1f] text-[#e51f1f] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e51f1f] hover:text-white transition-all duration-300"
                >
                Our Story
            </button>
            </div>
        </div>
        
        {/* Floating pizza decorations */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#e51f1f] rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#44ce1b] rounded-full opacity-20 animate-bounce delay-1000"></div>
    </section>
  )
}

export default Hero;