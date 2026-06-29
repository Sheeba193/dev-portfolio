import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Modern Development",
    description:
      "Building responsive, scalable web applications using React, TypeScript, JavaScript, and modern frontend technologies.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description:
      "Creating fast, optimized experiences with clean architecture, reusable components, and attention to detail.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with designers, developers, and stakeholders to transform ideas into successful digital products.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Approaching every project with creativity, critical thinking, and a focus on delivering measurable business value.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building digital experiences
              <span className="text-serif italic font-normal text-black/80">
                {" "}that make an impact.
              </span>
            </h2>

            <div className="space-y-5 text-muted-foreground animate-fade-in animation-delay-200">

              <p>
                I'm <strong>Bathseba Kerubo</strong>, a Frontend Developer and
                Software Engineer passionate about transforming ideas into
                intuitive, high-performing digital experiences. I specialize in
                building modern, responsive web applications that combine clean
                design with scalable code.
              </p>

              <p>
                My background spans software development, UI/UX design, project
                management, and digital marketing, giving me a unique ability to
                understand both technical requirements and business goals. I've
                led development teams, built production-ready applications, and
                collaborated with organizations to create solutions that improve
                efficiency and user engagement.
              </p>

              <p>
                Whether I'm developing a React application, designing a seamless
                user interface, or solving complex technical challenges, my
                focus remains the same—building products that people genuinely
                enjoy using while helping businesses grow.
              </p>

            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg text-center font-medium italic text-foreground">
                "I believe great software isn't just about writing code—it's
                about solving real problems, creating exceptional user
                experiences, and delivering lasting value through technology."
              </p>
            </div>

          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
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
  );
};
