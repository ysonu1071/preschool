import { Baby, BookOpen, Clock, Music, Palette, User } from 'lucide-react';

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-preschool-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-preschool-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-preschool-green/20 rounded-full text-preschool-green font-medium text-sm mb-4">
            Our Programs
          </div>
          <h2 className="section-title">Age-Appropriate Learning Programs</h2>
          <p className="section-subtitle">
            Our curriculum is designed to meet the developmental needs of each age group, 
            fostering growth in social, emotional, physical, and cognitive areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card animate-fade-in-up">
            <div className="p-2 mb-6 inline-block rounded-2xl bg-preschool-coral/10">
              <div className="w-12 h-12 rounded-xl bg-preschool-coral flex items-center justify-center">
                <Baby className="text-white" size={24} />
              </div>
            </div>
            
            <h3 className="font-display font-bold text-xl mb-2">Infants (6-18 months)</h3>
            <p className="text-foreground/70 mb-4">
              A nurturing environment focused on sensory experiences, motor development, and building trust.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-preschool-coral/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <BookOpen size={12} className="text-preschool-coral" />
                </div>
                <span className="text-sm">Sensory exploration activities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-preschool-coral/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Clock size={12} className="text-preschool-coral" />
                </div>
                <span className="text-sm">Flexible schedules adapted to each baby</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-preschool-coral/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Music size={12} className="text-preschool-coral" />
                </div>
                <span className="text-sm">Music and movement for development</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Schedule</div>
                <div className="text-sm text-foreground/70">Mon-Fri, 8am-5pm</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm font-medium">Class Size</div>
                <div className="text-sm text-foreground/70">Max 8 children</div>
              </div>
            </div>
          </div>
          
          <div className="feature-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-2 mb-6 inline-block rounded-2xl bg-preschool-blue/10">
              <div className="w-12 h-12 rounded-xl bg-preschool-blue flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
            </div>
            
            <h3 className="font-display font-bold text-xl mb-2">Toddlers (18-36 months)</h3>
            <p className="text-foreground/70 mb-4">
              A program designed to support growing independence, language development, and social skills.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-preschool-blue/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <BookOpen size={12} className="text-preschool-blue" />
                </div>
                <span className="text-sm">Language-rich activities and stories</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-preschool-blue/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Clock size={12} className="text-preschool-blue" />
                </div>
                <span className="text-sm">Structured routines with playtime</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-preschool-blue/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Palette size={12} className="text-preschool-blue" />
                </div>
                <span className="text-sm">Creative art and sensory play</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Schedule</div>
                <div className="text-sm text-foreground/70">Mon-Fri, 8am-5pm</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm font-medium">Class Size</div>
                <div className="text-sm text-foreground/70">Max 12 children</div>
              </div>
            </div>
          </div>
          
          <div className="feature-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-2 mb-6 inline-block rounded-2xl bg-preschool-green/10">
              <div className="w-12 h-12 rounded-xl bg-preschool-green flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
            </div>
            
            <h3 className="font-display font-bold text-xl mb-2">Preschool (3-5 years)</h3>
            <p className="text-foreground/70 mb-4">
              Preparing children for kindergarten through play-based learning and early academics.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-preschool-green/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <BookOpen size={12} className="text-preschool-green" />
                </div>
                <span className="text-sm">Early literacy and numeracy skills</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-preschool-green/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Clock size={12} className="text-preschool-green" />
                </div>
                <span className="text-sm">Project-based learning activities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-preschool-green/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Music size={12} className="text-preschool-green" />
                </div>
                <span className="text-sm">Social skills and collaborative play</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Schedule</div>
                <div className="text-sm text-foreground/70">Mon-Fri, 8am-5pm</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm font-medium">Class Size</div>
                <div className="text-sm text-foreground/70">Max 15 children</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Request Program Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
