import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* background */}
      <div>
       <img src="/bgg.jpeg" 
       alt="hero image"
       className="w-full h-full object-cover opacity-40" />

       <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80  to-background" />

      </div>
      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i )=> (
          <div 
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={
              {
                backgroundColor: "#20b2a6",
                left:`${Math.random() * 100}%`,
                top:`${Math.random() * 100}%`,
                animation:`slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay:`${Math.random() * 5}s`
              }
            }
          />
        ))}

        {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12  items-center">
          {/* left-column-text content */}
          <div className="animate-fade-in" >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Software Engineer * React Specialist 
            </span>
            
          </div>

          {/* headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:7xl font-bold leading-tight animate-fade-in animation-delay-100"> 
              Crafting <span className="text-primary glow-text">Digital </span>
              <br />
              experiences with 
              <br />
              <span className="font-serif italic font-normal text-white">
                React.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              I'm a passionate software engineer specializing in React, 
              dedicated to crafting seamless and engaging web experiences. 
              With a strong foundation in JavaScript and a keen eye for design, 
              I bring ideas to life through clean, efficient code. Let's build something amazing together!
            </p>
          </div>

            {/* call-to-action buttons */}
            <div>
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <button>
                {/* animated svg border */}
                <svg className="">
                  <path />
                </svg>
              </button>
            </div>
      </div>

          
          {/* right-column-image content */}

        </div>
      </div>
    </section>

  )
}
