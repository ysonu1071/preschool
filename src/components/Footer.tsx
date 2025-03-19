import { Heart, ArrowUp, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="pt-20 pb-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-preschool-blue rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">J</span>
              </div>
              <h2 className="text-xl font-display font-bold">
                <span className="text-preschool-blue">Junior</span>
                <span className="text-preschool-coral">Millenium</span>
              </h2>
            </a>

            <p className="text-foreground/70 mb-6">
              Nurturing young hearts and minds through play-based learning in a safe, supportive environment.
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-preschool-blue/10 flex items-center justify-center text-preschool-blue hover:bg-preschool-blue hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-preschool-blue/10 flex items-center justify-center text-preschool-blue hover:bg-preschool-blue hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-preschool-blue/10 flex items-center justify-center text-preschool-blue hover:bg-preschool-blue hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-preschool-blue/10 flex items-center justify-center text-preschool-blue hover:bg-preschool-blue hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-foreground/70 hover:text-preschool-blue transition-colors">Home</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-preschool-blue transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-preschool-blue transition-colors">Programs</a></li>
              <li><a href="#admissions" className="text-foreground/70 hover:text-preschool-blue transition-colors">Admissions</a></li>
              <li><a href="#gallery" className="text-foreground/70 hover:text-preschool-blue transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-preschool-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-foreground/70 hover:text-preschool-blue transition-colors">Infant Care (6-18 months)</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-preschool-blue transition-colors">Toddler Program (18-36 months)</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-preschool-blue transition-colors">Preschool (3-5 years)</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-preschool-blue transition-colors">Summer Camp</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-preschool-blue transition-colors">Enrichment Activities</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="text-preschool-blue">Location:</span>
                <span className="text-foreground/70">1st Floor, Above Axis Bank, Near Vardhaman Hospital, Naroli Road, Silvassa-396230</span>
              </li>
              <li className="flex gap-2">
                <span className="text-preschool-blue">Phone:</span>
                <span className="text-foreground/70">9724668433</span>
              </li>
              <li className="flex gap-2">
                <span className="text-preschool-blue">Email:</span>
                <span className="text-foreground/70">juniormillenniumpreschool@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <span className="text-preschool-blue">Hours:</span>
                <span className="text-foreground/70">Mon-Fri: 8:30am - 5:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Junior Millenium Preschool. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
            {/* <a href="#" className="hover:text-preschool-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-preschool-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-preschool-blue transition-colors">Cookie Policy</a> */}
            <a href='https://www.linkedin.com/in/sonu-kumar-40a09315b/' className='cursor-pointer'>
          <span>Developed By Sonu Kumar</span>
        </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-8 -top-6 w-12 h-12 bg-preschool-blue rounded-full text-white flex items-center justify-center shadow-button hover:bg-preschool-blue/90 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="absolute bottom-12 left-6 text-sm text-foreground/40 flex items-center gap-1 opacity-60">
        <span>Made with</span>
        <Heart size={14} className="text-preschool-coral fill-preschool-coral" />
        <span>for children</span>
      </div>

      {/* <div className="absolute bottom-10 right-16 text-foreground/60 text-sm flex underline items-center gap-1 ">
        <a href='https://www.linkedin.com/in/sonu-kumar-40a09315b/' className='cursor-pointer'>
          <span>Developed By Sonu Kumar</span>
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
