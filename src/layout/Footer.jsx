import { Github, Linkedin, Twitter, Instagram} from "lucide-react"

const socialLinks = [
    {icon: Github, href: "https://github.com/Sheeba193", label: "GitHub"},
    {icon: Linkedin, href: "https://www.linkedin.com/in/kerubo-kengere-865969231/", label: "LinkedIn"},
    {icon: Twitter, href: "https://x.com/KeruboSheeba", label: "Twitter"},
    {icon: Instagram, href: "https://instagram.com", label: "Instagram"},
];

const footerLinks = [
    {label: "Home", href: "#"},
    {label: "About", href: "#about"},
    {label: "Projects", href: "#projects"},
    {label: "Contact", href: "#contact"},
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* logo & copyright */}
                <div className="text-center md:text-left">
                    <a href="#" className="text-xl font-bold tracking-tight">
                        Bathseba Kerubo Kengere<span className="text-primary">.</span>
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                        &copy; {new Date().getFullYear()} Bathseba Kerubo Kengere. All rights reserved.
                    </p>
                </div>

                {/* links */}
                <nav className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-6">
                  {footerLinks.map((link, idx) => (
                    <a 
                      key={idx}  
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}

                </nav>

                {/* social links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, idx) => (
                    <a 
                        key={idx}     
                        href={social.href}
                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        aria-label={social.label}   
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
            </div>
        </div>
    </footer>
  )
}
