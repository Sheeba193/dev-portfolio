import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bethkerubo193@gmail.com",
    href: "mailto:bethkerubo193@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 759 157727",
    href: "tel:+254759157727",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "https://maps.google.com/?q=Nairobi,Kenya",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://www.linkedin.com/in/kerubo-kengere-865969231/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/Sheeba193",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-hightlight/5 rounded-full filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16"> 
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build {" "} 
            <span className="font-serif italic font-normal text-white">
              something amazing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 animate-fade-in animation-delay-200">
            I'm currently available for freelance work and open to new opportunities. Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
      </div>
      
    </section>
  );
};
