import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto  md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-preschool-blue rounded-full flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">J</span>
            </div>
            <h1 className="text-xl md:text-2xl font-display font-bold leading-tight">
              <span className="whitespace-nowrap">
                <span className="text-preschool-blue">Junior</span>
                <span className="text-preschool-coral">Millennium</span>
              </span>
              <span className="block text-xs text-gray-500 uppercase tracking-widest text-center">
                PRE-SCHOOL
              </span>
            </h1>
          </a>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#admissions" className="nav-link">Admissions</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <a href="#contact" className="hidden md:inline-block btn-primary">
            Enroll Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-96 py-4" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col gap-2">
          <a href="#home" className="py-3 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="py-3 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#programs" className="py-3 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Programs</a>
          <a href="#admissions" className="py-3 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Admissions</a>
          <a href="#gallery" className="py-3 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#testimonials" className="py-3 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" className="py-3 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#contact" className="btn-primary text-center mt-2" onClick={() => setIsOpen(false)}>Enroll Now</a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
