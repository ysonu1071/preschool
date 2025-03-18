import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const images = [
    { 
      src: '/placeholder.svg', 
      alt: 'Classroom activities', 
      category: 'classroom' 
    },
    { 
      src: '/placeholder.svg', 
      alt: 'Outdoor play area', 
      category: 'outdoor' 
    },
    { 
      src: '/placeholder.svg', 
      alt: 'Art activities', 
      category: 'activities' 
    },
    { 
      src: '/placeholder.svg', 
      alt: 'Story time', 
      category: 'activities' 
    },
    { 
      src: '/placeholder.svg', 
      alt: 'STEM learning', 
      category: 'classroom' 
    },
    { 
      src: '/placeholder.svg', 
      alt: 'Music class', 
      category: 'activities' 
    },
    { 
      src: '/placeholder.svg', 
      alt: 'Playground fun', 
      category: 'outdoor' 
    },
    { 
      src: '/placeholder.svg', 
      alt: 'Group activities', 
      category: 'activities' 
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-preschool-purple/20 rounded-full text-preschool-purple font-medium text-sm mb-4">
            Our Gallery
          </div>
          <h2 className="section-title">Capturing Moments of Joy and Learning</h2>
          <p className="section-subtitle">
            Take a peek inside our vibrant preschool environment where children explore, create, and grow together.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all' ? 'bg-preschool-blue text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Photos
          </button>
          
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'classroom' ? 'bg-preschool-blue text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('classroom')}
          >
            Classrooms
          </button>
          
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'outdoor' ? 'bg-preschool-blue text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('outdoor')}
          >
            Outdoor Areas
          </button>
          
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'activities' ? 'bg-preschool-blue text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('activities')}
          >
            Activities
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-xl hover:shadow-card cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setActiveImage(image.src)}
            >
              <div className="relative h-full group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white text-sm font-medium">{image.alt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="btn-secondary flex items-center gap-2 mx-auto">
            <Camera size={18} />
            <span>View Full Gallery</span>
          </button>
        </div>
      </div>
      
      {/* Lightbox */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setActiveImage(null)}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-white/10"
            onClick={() => {
              const currentIndex = images.findIndex(img => img.src === activeImage);
              const prevIndex = (currentIndex - 1 + images.length) % images.length;
              setActiveImage(images[prevIndex].src);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="max-w-4xl max-h-[80vh]">
            <img 
              src={activeImage} 
              alt="Gallery preview" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-white/10"
            onClick={() => {
              const currentIndex = images.findIndex(img => img.src === activeImage);
              const nextIndex = (currentIndex + 1) % images.length;
              setActiveImage(images[nextIndex].src);
            }}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
