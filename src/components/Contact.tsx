import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your server
    alert('Thanks for contacting us! We will be in touch soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-preschool-blue/20 rounded-full text-preschool-blue font-medium text-sm mb-4">
            Get In Touch
          </div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or ready to enroll? Reach out to our friendly team for more information.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white rounded-2xl shadow-card p-8">
              <h3 className="font-display font-bold text-2xl mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-preschool-blue focus:ring-2 focus:ring-preschool-blue/20 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-preschool-blue focus:ring-2 focus:ring-preschool-blue/20 outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-preschool-blue focus:ring-2 focus:ring-preschool-blue/20 outline-none transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-foreground/80 mb-2">
                      Child's Name
                    </label>
                    <input 
                      type="text" 
                      id="childName" 
                      name="childName" 
                      value={formData.childName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-preschool-blue focus:ring-2 focus:ring-preschool-blue/20 outline-none transition-all"
                      placeholder="Jane Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-foreground/80 mb-2">
                      Child's Age
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-preschool-blue focus:ring-2 focus:ring-preschool-blue/20 outline-none transition-all"
                    >
                      <option value="">Select Age</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="2-3 years">2-3 years</option>
                      <option value="3-4 years">3-4 years</option>
                      <option value="4-5 years">4-5 years</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-preschool-blue focus:ring-2 focus:ring-preschool-blue/20 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
              <h3 className="font-display font-bold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-preschool-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-preschool-blue" size={20} />
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-foreground/70">
                      123 Sunshine Avenue<br />
                      Anytown, ST 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-preschool-coral/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-preschool-coral" size={20} />
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">Phone Number</h4>
                    <p className="text-foreground/70">
                      (123) 456-7890<br />
                      Mon-Fri, 7:30am - 6:00pm
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-preschool-green/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-preschool-green" size={20} />
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">Email Address</h4>
                    <p className="text-foreground/70">
                      info@kiddoscorner.com<br />
                      admissions@kiddoscorner.com
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-preschool-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-preschool-yellow" size={20} />
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">Hours of Operation</h4>
                    <p className="text-foreground/70">
                      Monday - Friday: 7:30am - 6:00pm<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card overflow-hidden h-64">
              {/* This would be where you'd embed a Google Map */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-foreground/50 font-medium">Google Maps Embed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
