import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Working with Sheeba was an absolute pleasure. Her attention to detail and ability to deliver on time exceeded our expectations.",
    author: "Brian Mwangi",
    role: "Product Manager, Finetek Labs",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "She transformed our website into a modern, user-friendly platform. Our customer engagement has significantly improved.",
    author: "Lydia Njeri",
    role: "Founder, Luxe Fusion Creations",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "A highly skilled developer with a great eye for UI/UX design. She brought our ideas to life effortlessly.",
    author: "David Otieno",
    role: "CTO, Startup Hub Nairobi",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    quote:
      "Her leadership and communication skills made the entire project smooth and efficient. I’d definitely work with her again.",
    author: "Mercy Wambui",
    role: "Project Coordinator, Egerton University",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "Professional, creative, and reliable. She consistently delivers high-quality work even under tight deadlines.",
    author: "Kevin Kiptoo",
    role: "Marketing Lead, Dalali Merchants LTD",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
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
              <span className="font-serif italic font-normal text-white"> My Associates</span>
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
                    <button className={`w-2 h-2 transition-all duration-300 ${index === 0 ? "w-8 bg-primary" : "bg-muted-foreground hover:bg-muted-foreground/50" }`}/>
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
