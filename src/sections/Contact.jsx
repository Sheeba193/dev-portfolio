import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
    value: "kerubo-kengere",
    href: "https://www.linkedin.com/in/kerubo-kengere-865969231/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Sheeba193",
    href: "https://github.com/Sheeba193",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
});

const [isLoading, setIsLoading] = useState(false); // to indicate form submission in progress
const [submitStatus, setSubmitStatus] = useState({ // to track form submission result
  type: null,
  message: "",
}); // null, "success", "error"

const handleSubmit = async (e) =>{
  e.preventDefault();
  setIsLoading(true);
  setSubmitStatus({ type: null, message: "" });

  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("EmailJS configuration is missing. Please check your environment variables.");
    }

    await emailjs.send(serviceId, templateId, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }, publicKey);
    setSubmitStatus({ 
      type: "success",
      message: "Message sent successfully!"
    });
    setFormData({ name: "", email: "", message: "" });

  }catch(error){
    console.error("Error sending email:", error);
    setSubmitStatus({
      type: "error",
      message: 
        error.text ||"Failed to send message. Please try again later."
    });
  }finally{
    setIsLoading(false);
  }


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
            <form action="" className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
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
                  value={formData.email}
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
                  value={formData.message}
                  onChange={(e) => 
                    setFormData({...formData, message: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div 
                  className= {`flex items-center gap-3 p-4 rounded-xl
                  ${
                    submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-100"
                    : "bg-red-500/10 border border-red-500/20 text-red-100"
                  }`}>
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}

                    <p className="text-sm">
                      {submitStatus.message}
                    </p>

                </div>
              )}
                
                
            </form>
 
          </div>
          
          {/* contact info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div>
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* availability card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
              I'm currently open to new opportunities and exciting projects. 
              Whether you need a full-time engineer or a freelance consultant, let's talk!
            </p>
            </div>
            
          </div>

        </div>
      </div>
      
    </section>
  );
};
