import { ClipboardList, Calendar, FileText, Users } from 'lucide-react';

const Admissions = () => {
  return (
    <section id="admissions" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-preschool-coral/20 rounded-full text-preschool-coral font-medium text-sm mb-4">
            Join Our Family
          </div>
          <h2 className="section-title">Simple Enrollment Process</h2>
          <p className="section-subtitle">
            We've made our admissions process straightforward so you can focus on making the best decision for your child.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="p-2 rounded-2xl bg-preschool-blue/10 h-14 w-14 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-preschool-blue" size={24} />
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">1. Schedule a Visit</h3>
                  <p className="text-foreground/70">
                    Book a tour to see our facilities, meet our staff, and experience our learning environment firsthand.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-2 rounded-2xl bg-preschool-green/10 h-14 w-14 flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="text-preschool-green" size={24} />
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">2. Complete Application</h3>
                  <p className="text-foreground/70">
                    Fill out our enrollment form with your child's information and your contact details.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-2 rounded-2xl bg-preschool-coral/10 h-14 w-14 flex items-center justify-center flex-shrink-0">
                  <FileText className="text-preschool-coral" size={24} />
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">3. Submit Documents</h3>
                  <p className="text-foreground/70">
                    Provide necessary documentation, including immunization records and emergency contact information.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-2 rounded-2xl bg-preschool-yellow/10 h-14 w-14 flex items-center justify-center flex-shrink-0">
                  <Users className="text-preschool-yellow" size={24} />
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">4. Welcome Orientation</h3>
                  <p className="text-foreground/70">
                    Attend an orientation session to meet teachers, review policies, and prepare for your child's first day.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="btn-primary">Start Enrollment Process</a>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -z-10 -inset-10 bg-preschool-blue/5 rounded-full blur-3xl"></div>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card max-w-md mx-auto">
                <h3 className="font-display font-bold text-2xl mb-6 text-center">Key Enrollment Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="font-medium">Age Requirements</span>
                    <span className="text-sm text-foreground/70">6 months to 5 years</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="font-medium">Program Hours</span>
                    <span className="text-sm text-foreground/70">8:00 AM - 5:00 PM</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="font-medium">Days of Operation</span>
                    <span className="text-sm text-foreground/70">Monday - Friday</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="font-medium">Teacher-Child Ratio</span>
                    <span className="text-sm text-foreground/70">1:4 (Infants) to 1:10 (Preschool)</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="font-medium">Tuition</span>
                    <span className="text-sm text-foreground/70">Starting at $X per week</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Enrollment Fee</span>
                    <span className="text-sm text-foreground/70">$X one-time fee</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-center text-foreground/80">
                    Financial assistance and sibling discounts available for qualifying families
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
