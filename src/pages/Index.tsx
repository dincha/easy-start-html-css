import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import aboutBanner from "@/assets/about-banner.jpg";
import servicesBanner from "@/assets/services-banner.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <Section id="about" title="About Us" banner={aboutBanner}>
        <h3 className="text-lg font-semibold">COMPANY PROFILE</h3>
        <p>
          KEPL EPC INFRA, a Professional Electrical Contracting Company, has
          executed several E.H.V and M.V / L.V installations for a wide spectrum
          of industries for more than two decades. We are super "A" Grade licensed
          Electrical contractor (ESA 542) issued by the Electrical Licensing Board
          of the Government of Tamilnadu.
        </p>
        
        <h3 className="mt-6 text-lg font-semibold">OUR VISION, MISSION AND VALUES</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>To become premier EPC Contractor company globally</li>
          <li>Highest integrity</li>
          <li>Quality</li>
          <li>Employee welfare, Safety</li>
          <li>Social awareness and responsibility</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">ORGANIZATION STRUCTURE</h3>
        <p>
          The organizational structure of KEPL EPC INFRA is led by the CEO
          overseeing key functional departments. Each department is supported by a
          hierarchical team of managers, engineers, supervisors, and assistants
          ensuring streamlined project execution and operational efficiency.
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Operation Head</li>
          <li>Design Engineers</li>
          <li>Manager</li>
          <li>Safety & QC Engineer</li>
          <li>HR & Finance Manager</li>
          <li>Purchase Manager</li>
        </ul>
      </Section>

      <Section id="capabilities" title="Capabilities">
        <h3 className="text-lg font-semibold">Expertise</h3>
        <p>
          With over two decades of experience, KEPL EPC INFRA brings unmatched
          expertise in electrical contracting services. Our team of dedicated
          professionals delivers innovative solutions across various industrial
          sectors.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>E.H.V and M.V / L.V installations</li>
          <li>Turnkey electrical contracting projects</li>
          <li>Manufacturing of low-tension switchgear panels</li>
          <li>Energy saving systems</li>
          <li>Total plant electrical systems maintenance</li>
        </ul>
      </Section>

      <Section id="services" title="Services" banner={servicesBanner}>
        <h3 className="text-lg font-semibold">Electronics Manufacturing Services</h3>
        <p>
          We have a well-equipped manufacturing unit in Chennai with a team having
          two decades of field and R&D experience in LV Switchgear panel and
          Busduct manufacturing. We deliver products with best quality and
          professionalism that clients aspire.
        </p>
        <p>
          We ensure that a perfectly designed budget-friendly product is delivered
          on time, meeting the highest industry standards and client expectations.
        </p>
      </Section>

      <Section id="projects" title="Projects">
        <p>
          KEPL EPC INFRA was established in 2006 as a Private Limited company
          based at Chennai being headed by our directors Mr. Dharmalingam C, an
          electrical engineer by profession. He has done his B.E (Hons) at a
          premier institution in South India.
        </p>
        <p>
          We have more than 20+ years of excellent performance in the field and
          executed end-to-end electrical projects across South India in Tamilnadu,
          Andhra, Telangana and Karnataka. We have managed to spread our corporate
          wings into various fields like turnkey electrical contracting projects,
          manufacturing of low-tension switchgear panels, energy saving system,
          maintenance of total plant electrical systems etc., and keep us soaring
          high.
        </p>
        
        <h3 className="mt-6 text-lg font-semibold">SELECTED PROJECTS</h3>
        <p>
          Our portfolio includes successful project implementations across diverse
          industries, demonstrating our capability to handle complex electrical
          infrastructure requirements.
        </p>
      </Section>

      <Section id="clients" title="Clients">
        <p>
          An excellent highly professional and dedicated team of senior managers,
          project engineers and other technical staff is our strongest asset,
          which delivers best results to our esteemed clients. In short, KEPL
          stands for dedicated smart engineers - ready to serve the industries in
          respect to all of their electrical solutions.
        </p>
        
        <h3 className="mt-6 text-lg font-semibold">Customer Satisfaction</h3>
        <p>
          We plan and design solutions with a focus on complete customer
          satisfaction, guided by strict quality standards. Our commitment to
          excellence ensures that every project meets and exceeds client
          expectations.
        </p>
        
        <h3 className="mt-6 text-lg font-semibold">CLIENT PORTFOLIO</h3>
        <p>
          We have served a wide range of clients across various industries in
          South India, building long-term relationships based on trust, quality,
          and reliability.
        </p>
      </Section>

      <Section id="certifications" title="Certifications">
        <p>
          KEPL EPC INFRA holds multiple certifications demonstrating our
          commitment to safety, quality, and professional excellence in electrical
          contracting services.
        </p>
        
        <h3 className="mt-6 text-lg font-semibold">SAFETY CERTIFICATES</h3>
        <p>
          Our comprehensive safety certifications ensure that all projects are
          executed with the highest standards of workplace safety and regulatory
          compliance.
        </p>
        
        <h3 className="mt-6 text-lg font-semibold">PERFORMANCE CERTIFICATES</h3>
        <p>
          We maintain certifications that validate our technical capabilities and
          project performance, including our Super "A" Grade Electrical Contractor
          license (ESA 542) from the Electrical Licensing Board of the Government
          of Tamilnadu.
        </p>
      </Section>

      <Section id="contact" title="Contact Us">
        <p className="text-lg">
          <strong>Email:</strong>{" "}
          <a href="mailto:factory@keplepcinfra.in" className="text-accent hover:underline">
            factory@keplepcinfra.in
          </a>
        </p>
        <p className="mt-4">
          Get in touch with us to discuss your electrical contracting needs. Our
          team of experts is ready to provide you with comprehensive solutions
          tailored to your requirements.
        </p>
      </Section>

      <footer className="mt-6 bg-header py-6 text-header-foreground">
        <div className="container mx-auto max-w-[1100px] px-4">
          <small className="opacity-85">
            &copy; {new Date().getFullYear()} KEPL EPC INFRA. All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Index;
