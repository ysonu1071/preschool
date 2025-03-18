import { useEffect, useState } from 'react';
import { ArrowDownCircle, Heart, Sun, BookOpen } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-32 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden relative bg-gradient-to-br from-background to-blue-50"
    >
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-preschool-blue/5 rounded-bl-[50%]"></div>
      
      <div className={`container mx-auto grid md:grid-cols-2 gap-12 items-center ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
        <div className="max-w-xl order-2 md:order-1">
          <div className="inline-block px-3 py-1 bg-preschool-blue/10 rounded-full text-preschool-blue font-medium text-sm mb-6 animate-fade-in">
            Where Learning Meets Fun
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-preschool-blue">Nurturing</span> Young 
            <span className="relative inline-block mx-2">
              Minds
              <span className="absolute bottom-1 left-0 w-full h-3 bg-preschool-yellow/50 -z-10 rounded-sm"></span>
            </span>
            for a Bright Future
          </h1>
          
          <p className="text-foreground/80 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Our preschool provides a safe, nurturing environment where children can explore, 
            discover and grow. We focus on developing social, emotional, and cognitive skills 
            through play-based learning.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="btn-primary">
              Schedule a Tour
            </a>
            <a href="#programs" className="btn-secondary">
              Explore Programs
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-preschool-coral/10 flex items-center justify-center text-preschool-coral">
                <Heart size={20} />
              </div>
              <span className="text-sm font-medium">Caring Staff</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-preschool-green/10 flex items-center justify-center text-preschool-green">
                <Sun size={20} />
              </div>
              <span className="text-sm font-medium">Playful Learning</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-preschool-blue/10 flex items-center justify-center text-preschool-blue">
                <BookOpen size={20} />
              </div>
              <span className="text-sm font-medium">Quality Education</span>
            </div>
          </div>
        </div>
        
        <div className="relative order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative animate-float">
              <img 
                src="/images/image-one.webp" 
                alt="Happy children playing and learning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-preschool-blue/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl overflow-hidden shadow-lg transform rotate-6 animate-float" style={{ animationDelay: '1s' }}>
              <img 
                src="/images/image-two.webp" 
                alt="Child playing with blocks" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full overflow-hidden shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <img 
                src="/images/image-three.webp" 
                alt="Smiling teacher with children" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle size={36} className="text-preschool-blue opacity-70 hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
