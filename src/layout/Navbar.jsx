import { Button } from "@/components/button"

const navLinks = [
  {href: "#about", label: "About"},
  {href: "#experience", label: "Experience"},
  {href: "#projects", label: "Projects"},
  {href: "#testimonials", label: "Testimonials"},
  {href: "#contact", label: "Contact"},
]

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 bg-transparent py-5 w-full">
       
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary">
          B K Kerubo <span className="text-primary">.</span>
        </a>

        {/* desktop nav  */}
        <div className="flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div>
          <Button size="sm">Contact Me</Button>
        </div>
        
      </nav> 
         
    </header>
  )
}

