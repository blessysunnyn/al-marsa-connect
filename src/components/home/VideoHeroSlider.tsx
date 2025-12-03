import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    title: "Building Qatar's Future",
    highlight: "Excellence",
    description: "One of Qatar's most reliable and diversified service providers, delivering excellence across trading, contracting, and project support since 2015."
  },
  {
    video: "https://videos.pexels.com/video-files/2675513/2675513-uhd_2560_1440_30fps.mp4",
    title: "Comprehensive Trading",
    highlight: "Solutions",
    description: "High-quality products from building materials to industrial equipment. Our strong supplier network delivers reliable products at competitive prices."
  },
  {
    video: "https://videos.pexels.com/video-files/5532765/5532765-uhd_2560_1440_24fps.mp4",
    title: "Professional Contracting",
    highlight: "Services",
    description: "Expert civil, mechanical, and general construction works with skilled engineering teams and modern equipment."
  }
];

const VideoHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        </div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              {index === currentSlide && (
                <>
                  <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
                    Established in 2015 • Doha, Qatar
                  </span>
                  
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                    {slide.title} with{" "}
                    <span className="text-gold">{slide.highlight}</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                </>
              )}
            </div>
          ))}
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 text-primary-foreground/90">
            {["10+ Years Experience", "End-to-End Solutions", "Quality Assured"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoHeroSlider;
