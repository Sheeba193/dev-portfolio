import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete web applications with React for frontend and Spring Boot for backend.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Creating fast, scalable, and maintainable digital experiences across frontend and backend.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with teams to deliver user-focused, end-to-end solutions.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Turning complex challenges into simple, effective solutions at every layer.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Building digital experiences
              <span className="text-serif italic font-normal text-black/80">
                {" "}that matter.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm <strong>Bathseba Kerubo</strong>, a Full-Stack Developer passionate
                about building modern, responsive, and user-friendly web
                applications.
              </p>

              <p>
                I specialize in crafting complete solutions using <strong>ReactJS</strong> for dynamic, 
                intuitive frontends and <strong>Spring Boot</strong> for robust, scalable backends. 
                I combine TypeScript, JavaScript, thoughtful UI/UX design, and clean architecture 
                to create meaningful digital products.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg text-center font-medium italic text-foreground">
                Building technology that solves real problems and creates lasting value.
              </p>
            </div>

          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
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
