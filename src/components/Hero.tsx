import heroImage from "@/assets/hero-bg.jpg";

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
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroImage})`,
      }}
    >
      <div className="container mx-auto max-w-[1100px] px-4">
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">KEPL</h1>
        <p className="mb-3.5 max-w-[800px] text-base opacity-95 md:text-lg">
          COMPANY PROFILE
        </p>
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
