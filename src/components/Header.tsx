import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "policies", label: "Policies" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "clients", label: "Clients" },
    { id: "certifications", label: "Certifications" },
    { id: "careers", label: "Careers" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-background border-b transition-all ${
        isScrolled ? "shadow-md border-border" : "border-transparent"
      }`}
    >
      <nav className="container mx-auto max-w-[1100px] px-4">
        <div className="flex items-center gap-6 overflow-x-auto py-2.5">
          <img
            src="https://keplepcinfra.in/Asset3.png"
            alt="KEPL Logo"
            className="h-11 flex-shrink-0"
          />
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="whitespace-nowrap text-sm text-foreground opacity-80 transition-opacity hover:opacity-100 hover:text-accent"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
