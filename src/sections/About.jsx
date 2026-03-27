import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [{
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left column */}
            <div className="space-y-8">
              <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
              </div>
            
              <h2 className="text-4xl md:5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Learning & Building
                <span className="text-serif italic font-normal text-white"> everyday.</span>
              </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  With experience leading cross-functional teams 
                  delivering user-centered solutions, I enjoy turning ideas into practical, impactful systems. 
                  I am passionate about continuous growth, with interests in cybersecurity, responsible AI, 
                  and emerging technologies.
                </p>
                <p>
                  Whether collaborating with teams, building digital products, 
                  or exploring new ideas, I am committed to creating meaningful solutions and pushing boundaries—one step at a time.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg text-center font-medium italic text-foreground">
                  My mission is to leverage technology and innovation to create meaningful, user-centered solutions 
                  that empower individuals and drive positive change in the digital world.
                  
                </p>
              </div>
            </div>

            {/* right column */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
    </section>
  )
}
