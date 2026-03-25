import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "../components/button";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
});

const handleSubmit = async (e) =>{
  e.preventDefault();
}
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300"> 
            <form action="" className="space-y-6">

              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Your name..."
                  value={FormData.name}
                  onChange={(e) => 
                    setFormData({...formData, name: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder="your@email.com"
                  value={FormData.email}
                  onChange={(e) => 
                    setFormData({...formData, email: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required
                  placeholder="Your message..."
                  value={FormData.message}
                  onChange={(e) => 
                    setFormData({...formData, message: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <Button className="w-full" type="submit" size="lg">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      
    </section>
  );
};
