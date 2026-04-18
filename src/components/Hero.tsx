import heroImage from "@/assets/hero-electrical-grid.jpg";
import { Shield, Award } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative border-b-4 border-accent bg-cover bg-center py-20 text-white md:py-28"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.35)), url(${heroImage})`,
      }}
    >
      <div className="container mx-auto max-w-[1100px] px-4">
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">KEPL EPC INFRA</h1>
        <p className="mb-1 max-w-[800px] text-lg font-semibold tracking-wide text-accent md:text-xl">
          Dedicated Smart Engineers (DSE) – Always Ready.
        </p>
        <p className="mb-4 max-w-[800px] text-base opacity-95 md:text-lg">
          COMPANY PROFILE
        </p>
        <div className="mb-5 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 rounded bg-white/15 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
            <Shield className="h-4 w-4 text-accent" />
            ISO 9001:2015 Certified
          </span>
          <span className="inline-flex items-center gap-1.5 rounded bg-white/15 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
            <Award className="h-4 w-4 text-accent" />
            MEP Turnkey Solutions Company
          </span>
        </div>
        <button
          onClick={scrollToContact}
          className="inline-block rounded bg-accent px-4 py-2.5 font-bold text-accent-foreground transition-transform hover:scale-105"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
