import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Kerubo consistently delivers high-quality work with professionalism and attention to detail. Her technical expertise and commitment to excellence have made her a valuable part of every project we've worked on together.",
    author: "Franklyne Adede",
    role: "Co-Founder, Dalali Merchants LTD",
    avatar: "FA",
  },
  {
    quote:
      "Working with Kerubo has been an outstanding experience. She transformed our ideas into a beautiful, user-friendly digital presence while maintaining clear communication and meeting every deadline.",
    author: "Mercyline Bosibori",
    role: "Co-Founder, Luxe Fusion Creations",
    avatar: "MB",
  },
  {
    quote:
      "Kerubo is reliable, creative, and highly skilled. From website development to branding, she consistently provides solutions that exceed expectations and help businesses grow.",
    author: "Robert Mong'are",
    role: "Founder, Robie Cleaning Services",
    avatar: "RM",
  },
  {
    quote:
      "Kerubo brings together strong technical skills, creativity, and excellent teamwork. Her ability to solve complex problems and deliver polished solutions makes her someone I would confidently recommend.",
    author: "Steve Kombo",
    role: "Co-Founder, Finetek Labs",
    avatar: "SK",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length); // Loop back to the first testimonial
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); // Loop back to the last testimonial
  }

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Render your testimonials here */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-0.5 -translate-y-0.5"/>
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
          <div className="text-center mx-auto max-w-3xl mb-16"> 
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              What People Say
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
              Kind Words From {" "}
              <span className="font-serif italic font-normal text-black/80"> My Associates</span>
            </h2>
            
          </div>

          {/* Testimonial carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* main testimonial */}
              <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground"/>
                </div>
                <blockquote className="text-2xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">"{testimonials[activeIndex].quote}"</blockquote>

                <div className="flex items-center gap-4">
                  <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" />
                  <div className="flex items-center gap-4">
                    <div className="font-semibold">{testimonials[activeIndex].author}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </div>

              {/* testimonial navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={prevTestimonial}>
                  <ChevronLeft />
                </button>

                <div className="flex gap-2"> 
                  {testimonials.map((_, index) => (
                    <button 
                    onClick={() => setActiveIndex(index)} 
                    className={`w-2 h-2 transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "bg-muted-foreground hover:bg-muted-foreground/50" }`}/>
                  ))}
                </div>

                <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={nextTestimonial}>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
