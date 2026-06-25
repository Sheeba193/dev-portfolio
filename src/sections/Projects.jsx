
import { ArrowRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Nike E-commerce Platform",
    description:
      "A full-stack e-commerce platform for a shoe brand, featuring product listings, shopping cart functionality, and a seamless checkout experience.",
    image: "/nikestore.png",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://nikesshoesstore.netlify.app/",
    github: "https://github.com/Sheeba193/nikestore",
  },
  {
    title: "Finetech Dashboard",
    description:
      "A data visualization dashboard for a financial technology company, providing real-time insights and analytics for business decision-making.",
    image: "/adminpage.png",
    tags: ["React", "Node.js", "MySQL", "Bootstrap"],
    link: "https://admindashboardfinetek.netlify.app/",
    github: "https://github.com/Sheeba193/ADMIN-DASHBOARD-W-REACT",
  },
  {
    title: "Ben & Fay Wedding Invitation 2026",
    description:
      "A modern and elegant wedding invitation website featuring event details, countdown timer, RSVP functionality, photo gallery, and a fully responsive design.",
    image: "/benandfay.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    link: "https://benandfayweddinginvitation2026.netlify.app/",
    github: "https://github.com/Sheeba193/wedding-reveal",
  },
  {
    title: "Araka Haraka Enterprise",
    description:
      "A corporate website for an import, export, and tourism company showcasing business services, tourism offerings, company profile, and contact information.",
    image: "/arakaharaka.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "Business Website"],
    link: "https://arakaharakaenterprise.com/",
    github: "https://github.com/Sheeba193/arakaharaka",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects{" "}
            <span className="font-serif italic font-normal text-black/80">
              I've Worked On
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mt-4 animate-fade-in animation-delay-200">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowRight className="text-white w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/Sheeba193"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

