import { Users, Heart, BookOpen, Sun } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-preschool-yellow/20 rounded-full text-preschool-yellow font-medium text-sm mb-4">
            About Our Preschool
          </div>
          <h2 className="section-title">Growing Curious Minds With Love and Care</h2>
          <p className="section-subtitle">
            At Kiddos Corner, we believe every child is unique and deserves a personalized approach to learning 
            that nurtures their natural curiosity and creativity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-preschool-coral/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 aspect-video rounded-2xl overflow-hidden shadow-card">
              <img 
                src="/placeholder.svg" 
                alt="Our preschool facilities" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-preschool-blue rounded-full flex items-center justify-center">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">Our Story</h3>
                    <p className="text-sm text-foreground/70">Founded in 2010 with a mission to reimagine early education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl mb-3">Our Mission</h3>
              <p className="text-foreground/80">
                We strive to provide a nurturing and stimulating environment where children can develop 
                a love for learning, strong social skills, and the confidence to explore their world.
              </p>
            </div>
            
            <div>
              <h3 className="font-display font-bold text-2xl mb-3">Our Philosophy</h3>
              <p className="text-foreground/80">
                We believe in a play-based approach to learning that encourages children to discover, 
                create, and problem-solve in ways that are meaningful to them.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="feature-card">
                <div className="icon-container bg-preschool-coral/10">
                  <Heart className="text-preschool-coral" size={24} />
                </div>
                <h4 className="font-display font-bold mb-2">Nurturing Care</h4>
                <p className="text-sm text-foreground/70">Creating a warm and supportive environment</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-container bg-preschool-blue/10">
                  <BookOpen className="text-preschool-blue" size={24} />
                </div>
                <h4 className="font-display font-bold mb-2">Quality Education</h4>
                <p className="text-sm text-foreground/70">Age-appropriate curriculum designed by experts</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-container bg-preschool-green/10">
                  <Sun className="text-preschool-green" size={24} />
                </div>
                <h4 className="font-display font-bold mb-2">Playful Learning</h4>
                <p className="text-sm text-foreground/70">Fun activities that develop essential skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
