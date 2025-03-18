import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emily, Age 4",
      image: "/placeholder.svg",
      text: "Kiddos Corner has been a blessing for our family. The teachers are attentive and caring, and my daughter has flourished both socially and academically. I'm amazed at how much she's learned in just a few months!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Parent of Twins, Age 3",
      image: "/placeholder.svg",
      text: "Finding a preschool that could handle our energetic twins was challenging until we discovered Kiddos Corner. The staff is incredible, and the curriculum is the perfect balance of fun and learning. Our boys love going to school every day!",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      role: "Parent of Noah, Age 2",
      image: "/placeholder.svg",
      text: "As a first-time parent, I was nervous about sending my son to preschool. The transition was seamless thanks to the supportive teachers. They regularly communicate his progress, and I appreciate the photo updates throughout the day.",
      rating: 5
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -top-40 left-20 w-80 h-80 bg-preschool-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 right-20 w-80 h-80 bg-preschool-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-preschool-teal/20 rounded-full text-preschool-teal font-medium text-sm mb-4">
            Parent Testimonials
          </div>
          <h2 className="section-title">What Families Say About Us</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from the parents who trust us with their children every day.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-8 w-20 h-20 -z-10">
              <MessageSquare size={80} className="text-preschool-blue/10" />
            </div>
            
            <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-10 items-center">
                <div className="mx-auto md:mx-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mt-4 text-center md:text-left">
                    <div className="flex justify-center md:justify-start">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-preschool-yellow fill-preschool-yellow" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-lg italic text-foreground/80 mb-6">
                    "{testimonials[activeIndex].text}"
                  </p>
                  
                  <div>
                    <h4 className="font-display font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-foreground/70">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-3">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-preschool-blue" />
              </button>
              
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-preschool-blue scale-125' : 'bg-preschool-blue/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-preschool-blue" />
              </button>
            </div>
          </div>
          
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-2xl mb-4">Ready to Join Our Community?</h3>
            <p className="mb-6 text-foreground/80 max-w-2xl mx-auto">
              Experience the difference a nurturing, educational environment can make in your child's early years.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-primary">Schedule a Tour</a>
              <a href="#programs" className="btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
