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
  // {
  //   title: "Counselling App",
  //   description:
  //     "A mobile mental health application that connects users with counselors, offering chat support, booking sessions, and mental wellness resources.",
  //   image: "/images/counselling-app.jpg",
  //   tags: ["Kotlin", "Java", "Firebase"],
  //   link: "https://play.google.com/store",
  //   github: "https://github.com/yourusername/counselling-app",
  // },
  // {
  //   title: "Agro Science Park Prototype",
  //   description:
  //     "A human-centered design prototype providing interactive information about the Agro Science Park, improving visitor engagement and awareness.",
  //   image: "/images/agro-park.jpg",
  //   tags: ["Figma", "UI/UX", "Prototyping"],
  //   link: "https://agropark-prototype.netlify.app",
  //   github: "https://github.com/yourusername/agro-park",
  // },
  // {
  //   title: "Dalali Wholesalers System",
  //   description:
  //     "A business management solution for inventory tracking, sales monitoring, and digital marketing integration for a wholesale distribution company.",
  //   image: "/images/dalali-system.jpg",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   link: "https://dalali-wholesalers.com",
  //   github: "https://github.com/yourusername/dalali-system",
  // },
];

export const Projects = () => {
  return ( 
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* background glows */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-hightlight/5 rounded-full filter blur-xl opacity-30 animate-pulse"></div>
        </div>
          <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-auto max-w-3xl mb-16"> 
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                Featured Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
                Projects 
                <span className="font-serif italic font-normal text-white">I've Worked On</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-4 animate-fade-in animation-delay-200">
                Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
              </p>
            </div>

            {/* projects grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group glass rounded-2xl overflow-hidden animate-fade-in mg:row-span-1"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
  >
                  {/* image */}
                  <div className="relative overflow-hidden aspect-video ">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700  group-hover:scale-110"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>
                  </div>
                  
                </div>

              ))}
            </div>
          </div> 
        
    </section>
   )
}
