import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Phone, Mail, Globe, MapPin, Building2 } from "lucide-react";
import electricalPanelBanner from "@/assets/electrical-panel-banner.jpg";
import servicesBanner from "@/assets/services-banner.jpg";
import phoenixMall from "@/assets/projects/phoenix-mall.jpg";
import sapLabs from "@/assets/projects/sap-labs.jpg";
import jpMorgan from "@/assets/projects/jp-morgan.jpg";
import cognizant from "@/assets/projects/cognizant.jpg";
import medicalCollege from "@/assets/projects/medical-college-new.jpg";
import substation765kv from "@/assets/projects/765kv-substation-new.jpg";
import gis400kv from "@/assets/projects/400kv-gis.jpg";
import medwayHospital from "@/assets/projects/medway-hospital-new.jpg";
import madrasFoodWalk from "@/assets/projects/madras-food-walk.jpg";
import smileElectronics from "@/assets/projects/smile-electronics-new.jpg";
import deltaElectronics from "@/assets/projects/delta-electronics-new.jpg";
import natcoPharma from "@/assets/projects/natco-pharma-new.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <Section id="about" title="About Us" banner={electricalPanelBanner}>
        <h3 className="text-lg font-semibold">COMPANY PROFILE</h3>
        <p>
          KEPL EPC INFRA, a Professional Electrical Contracting Company, has executed several E.H.V and M.V / L.V installations for a wide spectrum of industries for more than two decades. We are super "A" Grade licensed Electrical contractor (ESA 542) issued by the Electrical Licensing Board of the Government of Tamilnadu.
        </p>
        <p>
          KEPL EPC INFRA was established in 2006 as a Private Limited company based at Chennai. Led by experienced electrical engineering professionals with degrees from premier institutions in South India, we have more than 20+ years of excellent performance in the field and executed end-to-end electrical projects across South India in Tamilnadu, Andhra, Telangana and Karnataka. We have managed to spread our corporate wings into various fields like turnkey electrical contracting projects, manufacturing of low-tension switchgear panels, energy saving system, maintenance of total plant electrical systems etc., and keep us soaring high.
        </p>
        <p>
          An excellent highly professional and dedicated team of senior managers, project engineers and other technical staff is our strongest asset, which delivers best result to our esteemed clients. In short, KEPL stands for Keen Engineering and Professional Leadership - ready to serve the industries in respect to all of their electrical solutions.
        </p>
        
        <h3 className="mt-8 text-lg font-semibold">MISSION</h3>
        <p className="font-medium">
          To become premier EPC Contractor company globally
        </p>
        
        <h3 className="mt-6 text-lg font-semibold">VISION</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Highest integrity</li>
          <li>Expertise</li>
          <li>Quality</li>
          <li>Customer Satisfaction</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">VALUES</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Employee welfare, Safety</li>
          <li>Social awareness and responsibility</li>
        </ul>

        <h3 className="mt-8 text-lg font-semibold">ORGANIZATION STRUCTURE</h3>
        <p>
          The organizational structure of KEPL EPC INFRA is led by the CEO overseeing key functional departments. Each department is supported by a hierarchical team of managers, engineers, supervisors, and assistants ensuring streamlined project execution and operational efficiency.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-sm mb-2">Executive Leadership</h4>
            <ul className="list-disc space-y-1 pl-6 text-sm">
              <li>CEO</li>
              <li>GM</li>
              <li>Factory Manager</li>
              <li>Accounts Manager</li>
              <li>Operation Head</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Management Team</h4>
            <ul className="list-disc space-y-1 pl-6 text-sm">
              <li>Projects Manager</li>
              <li>Purchase Manager</li>
              <li>HR & Finance Manager</li>
              <li>Design Engineers</li>
              <li>Safety & QC Engineer</li>
            </ul>
          </div>
        </div>
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

      <Section id="policies" title="Health, Safety & Quality">
        <h3 className="text-lg font-semibold">HEALTH, SAFETY AND ENVIRONMENTAL POLICY</h3>
        <p>
          KEPL EPC INFRA is firmly committed to maintaining a safe and healthy work environment for its employees and surrounding communities. This commitment is driven by leadership and upheld by every individual within the organization. Through the implementation of a comprehensive Safety and Health Management System, we aim to achieve continuous improvement, ensure compliance with all relevant regulations, and foster a strong safety culture by providing ongoing education and training across all levels of the company.
        </p>

        <h3 className="mt-8 text-lg font-semibold">PLANNING, DESIGN AND QUALITY POLICY</h3>
        <p>
          We plan and design solutions with a focus on complete customer satisfaction, guided by strict quality standards. KEPL EPC INFRA is committed to consistently delivering services that meet or exceed customer expectations. We strive for continuous improvement through quality programs that empower every employee to perform with excellence — right the first time, every time.
        </p>
        <div className="mt-4 grid gap-3 grid-cols-2 md:grid-cols-3 text-sm">
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">Scalable Design</p>
          </div>
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">Safety First</p>
          </div>
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">Customer Satisfaction</p>
          </div>
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">World Class Quality</p>
          </div>
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">On-time Delivery</p>
          </div>
        </div>
      </Section>

      <Section id="services" title="Services" banner={servicesBanner}>
        <h3 className="text-lg font-semibold">CPRI APPROVED PANEL MANUFACTURER</h3>
        <p>
          We have a well-equipped manufacturing unit in Chennai with a team having two decades of field and R&D experience in LV Switchgear panel and Busduct manufacturing. We deliver product with best quality and professionalism that client aspires. We ensure that a perfectly designed budget friendly product is delivered on time.
        </p>
        
        <h3 className="mt-6 text-lg font-semibold">LV SWITCHGEAR PRODUCTS</h3>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <ul className="list-disc space-y-1 pl-6">
            <li>MCC Panels</li>
            <li>PCC Panels</li>
            <li>MV Panels</li>
            <li>APFC Panels</li>
          </ul>
          <ul className="list-disc space-y-1 pl-6">
            <li>Auto Synchronizing Panels</li>
            <li>VFD Panels</li>
            <li>Starter Panels</li>
            <li>Busduct</li>
          </ul>
        </div>

        <h3 className="mt-6 text-lg font-semibold">CPRI APPROVED MACHINERY</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>6000A, 70KA 1 Sec Short Circuit Withstand Testing</li>
          <li>6000A Temperature Rise Testing Clearance & Creepage Testing</li>
          <li>IP65 Testing</li>
          <li>IS/IEC 61439, Part 1 & 2</li>
        </ul>
      </Section>

      <Section id="projects" title="Selected Projects">
        <p className="mb-6">
          Our portfolio includes successful project implementations across diverse industries, demonstrating our capability to handle complex electrical infrastructure requirements. We have executed end-to-end electrical projects across South India in Tamilnadu, Andhra, Telangana and Karnataka.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-border rounded-lg overflow-hidden">
            <img src={phoenixMall} alt="Acquila Phoenix Mall" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Acquila Phoenix Mall - Tower A</h4>
              <p className="text-sm text-muted-foreground mb-1">5L SQ.FT</p>
              <p className="text-sm text-muted-foreground">Hyderabad, Telangana</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <img src={sapLabs} alt="SAP Labs" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">SAP Labs</h4>
              <p className="text-sm text-muted-foreground mb-1">IT Department</p>
              <p className="text-sm text-muted-foreground">Bangalore, Karnataka</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <img src={jpMorgan} alt="JP Morgan" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">JP Morgan</h4>
              <p className="text-sm text-muted-foreground mb-1">IT Department</p>
              <p className="text-sm text-muted-foreground">Bangalore, Karnataka</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <img src={cognizant} alt="Cognizant CCC Campus" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Cognizant CCC Campus</h4>
              <p className="text-sm text-muted-foreground mb-1">4L SQ.FT</p>
              <p className="text-sm text-muted-foreground">Coimbatore, Tamil Nadu</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <img src={medicalCollege} alt="Shri Satya Sai Medical College" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Shri Satya Sai Medical College</h4>
              <p className="text-sm text-muted-foreground mb-1">Research Institute</p>
              <p className="text-sm text-muted-foreground">Thiruporur, Chennai</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-accent/5">
            <img src={substation765kv} alt="765kV/400kV AIS Substation" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Tamil Nadu First 765kV/400kV AIS Substation</h4>
              <p className="text-sm text-accent font-medium mb-1">Landmark Project</p>
              <p className="text-sm text-muted-foreground">Ariyalur, Tamil Nadu - TANTRANSCO</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-accent/5">
            <img src={gis400kv} alt="400kV GIS Power Plant" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Tamil Nadu First 400kV GIS Power Plant</h4>
              <p className="text-sm text-accent font-medium mb-1">Landmark Project</p>
              <p className="text-sm text-muted-foreground">Udangudi STPP, Thoothukudi - TANGEDCO</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <img src={medwayHospital} alt="Medway Hospital" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Medway Hospital</h4>
              <p className="text-sm text-muted-foreground mb-1">Healthcare Facility</p>
              <p className="text-sm text-muted-foreground">Kumbakonam, Tamil Nadu</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <img src={madrasFoodWalk} alt="Madras Food Walk" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Madras Food Walk</h4>
              <p className="text-sm text-muted-foreground mb-1">Commercial Complex</p>
              <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <img src={smileElectronics} alt="Smile Electronics" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Smile Electronics Limited</h4>
              <p className="text-sm text-muted-foreground mb-1">Powered by Zetwerk</p>
              <p className="text-sm text-muted-foreground">Thiruvallur, Tamil Nadu</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <img src={deltaElectronics} alt="Delta Electronics" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Delta Electronics India Pvt Ltd</h4>
              <p className="text-sm text-muted-foreground mb-1">Solar Power Plant Installation</p>
              <p className="text-sm text-muted-foreground">Krishnagiri, Tamil Nadu</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <img src={natcoPharma} alt="Natco Pharma" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">Natco Pharma Limited</h4>
              <p className="text-sm text-muted-foreground mb-1">Pharmaceutical Industry</p>
              <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm">
            <strong>Note:</strong> All projects completed with full safety certifications and regulatory compliance from the Government of Tamil Nadu Electrical Inspectorate and Central Electricity Authority.
          </p>
        </div>
      </Section>

      <Section id="clients" title="Our Clients">
        <p>
          An excellent highly professional and dedicated team of senior managers, project engineers and other technical staff is our strongest asset, which delivers best results to our esteemed clients. In short, KEPL stands for dedicated smart engineers - ready to serve the industries in respect to all of their electrical solutions.
        </p>
        
        <h3 className="mt-8 text-lg font-semibold">CLIENT PORTFOLIO</h3>
        <p className="mb-4">
          We have served a wide range of clients across various industries including automotive, IT, pharmaceutical, healthcare, manufacturing, and infrastructure sectors in South India.
        </p>

        <div className="grid gap-3 md:grid-cols-3 text-sm">
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">Automotive Sector</p>
            <p className="text-xs mt-1">Daechang Seat, KIA Motors subsidiaries, Myunghwa Automotive, Daebu Automotive</p>
          </div>
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">IT & Technology</p>
            <p className="text-xs mt-1">SAP Labs, JP Morgan, Cognizant, Delta Electronics</p>
          </div>
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">Healthcare</p>
            <p className="text-xs mt-1">Shri Satya Sai Medical College, Medway Hospital, Sugam Hospital</p>
          </div>
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">Manufacturing</p>
            <p className="text-xs mt-1">POSCO Steel, Doosan Power Systems, NIFCO South India</p>
          </div>
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">Infrastructure</p>
            <p className="text-xs mt-1">TANTRANSCO, TANGEDCO, Acquila Phoenix Mall</p>
          </div>
          <div className="bg-muted p-3 rounded">
            <p className="font-semibold">Food & Beverage</p>
            <p className="text-xs mt-1">A1 SKC Food Products, Madras Food Walk, TCPL Packaging</p>
          </div>
        </div>

        <h3 className="mt-8 text-lg font-semibold">Major Clients Include</h3>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <ul className="list-disc space-y-1 pl-6 text-sm">
            <li>Daechang Seat Automotive Pvt. Ltd.</li>
            <li>INZI Control India Pvt. Ltd.</li>
            <li>Myunghwa Automotive India Pvt Ltd</li>
            <li>Daebu Automotive Seat India Pvt Ltd</li>
            <li>Doowon Automotive System India</li>
            <li>POSCO Steel India Pvt. Ltd.</li>
            <li>JM Frichtech India Pvt Ltd</li>
            <li>Doosan Power Systems India</li>
          </ul>
          <ul className="list-disc space-y-1 pl-6 text-sm">
            <li>SAP Labs, Bangalore</li>
            <li>JP Morgan, Bangalore</li>
            <li>Cognizant Technology Solutions</li>
            <li>Delta Electronics India</li>
            <li>Natco Pharma Limited</li>
            <li>VA Tech Wabag Limited</li>
            <li>Schwing Stetter India Pvt Ltd</li>
            <li>Taichuang Engineering India</li>
          </ul>
        </div>
      </Section>

      <Section id="certifications" title="Certifications & Licenses">
        <h3 className="text-lg font-semibold">ISO 9001:2015 CERTIFIED COMPANY</h3>
        <p>
          KEPL EPC INFRA is an ISO 9001:2015 certified company, demonstrating our commitment to quality management systems and continuous improvement in all our operations.
        </p>

        <h3 className="mt-8 text-lg font-semibold">CONTRACTOR LICENSE</h3>
        <div className="bg-muted p-4 rounded-lg mt-3">
          <p className="font-semibold">
            Super "A" Grade Electrical Contractor License
          </p>
          <p className="text-sm mt-2">
            <strong>License No:</strong> ESA 542
          </p>
          <p className="text-sm">
            <strong>Issued by:</strong> The Electrical Licensing Board, Government of Tamil Nadu
          </p>
          <p className="text-sm mt-2">
            Authorized to carry out all types of electrical works with no limitations in voltage or capacity in the state of Tamil Nadu. This licence is issued subject to the regulation issued by the Government of Tamil Nadu under the Regulation 2g(1) of The Central Electricity Authority (Measures Relating to Safety and Electric Supply) Regulations, 2010.
          </p>
        </div>
        
        <h3 className="mt-8 text-lg font-semibold">SAFETY CERTIFICATES</h3>
        <p>
          All our projects are completed with full safety certifications and regulatory compliance. We have received multiple safety approvals from:
        </p>
        <ul className="list-disc space-y-2 pl-6 mt-3">
          <li>Chief Electrical Inspector to Government of Tamil Nadu</li>
          <li>Central Electricity Authority (CEA), Regional Inspectorial Organisation</li>
          <li>Government of India, Ministry of Power</li>
          <li>Tamil Nadu Electrical Inspectorate</li>
        </ul>

        <h3 className="mt-8 text-lg font-semibold">CPRI CERTIFICATIONS</h3>
        <p>
          Our manufacturing facility holds CPRI (Central Power Research Institute) approvals for panel manufacturing and testing capabilities:
        </p>
        <ul className="list-disc space-y-1 pl-6 mt-3">
          <li>IS/IEC 61439, Part 1 & 2 compliant manufacturing</li>
          <li>6000A, 70KA 1 Sec Short Circuit Withstand Testing capability</li>
          <li>6000A Temperature Rise Testing certification</li>
          <li>IP65 Testing approval</li>
          <li>Clearance & Creepage Testing certification</li>
        </ul>

        <h3 className="mt-8 text-lg font-semibold">PERFORMANCE CERTIFICATES</h3>
        <p>
          We have successfully completed and received performance certificates for landmark projects including Tamil Nadu's first 765kV/400kV AIS Substation and first 400kV GIS Power Plant, demonstrating our technical capabilities in executing complex EHV installations.
        </p>
      </Section>

      <Section id="careers" title="Careers">
        <h3 className="text-lg font-semibold">JOIN OUR TEAM</h3>
        <p>
          At KEPL EPC INFRA, we believe that our people are our greatest asset. We are always looking for talented, motivated, and dedicated professionals who share our commitment to excellence and innovation in the electrical contracting industry.
        </p>
        
        <h3 className="mt-6 text-lg font-semibold">WHY WORK WITH US?</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Professional Growth</h4>
            <p className="text-sm">
              We provide continuous learning opportunities and career advancement pathways for all our employees. Work on challenging projects across South India and develop expertise in cutting-edge electrical technologies.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Safety First Culture</h4>
            <p className="text-sm">
              Your safety is our priority. We maintain the highest safety standards and provide comprehensive training to ensure a secure working environment for all team members.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Competitive Benefits</h4>
            <p className="text-sm">
              We offer competitive compensation packages, health benefits, and employee welfare programs that recognize and reward your contribution to our success.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Diverse Projects</h4>
            <p className="text-sm">
              Work on landmark projects including EHV substations, commercial complexes, IT campuses, healthcare facilities, and manufacturing plants across multiple industries.
            </p>
          </div>
        </div>

        <h3 className="mt-8 text-lg font-semibold">CURRENT OPPORTUNITIES</h3>
        <p className="mb-4">
          We are looking for professionals in various roles including:
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <ul className="list-disc space-y-2 pl-6">
            <li>Electrical Engineers</li>
            <li>Project Managers</li>
            <li>Site Engineers</li>
            <li>Design Engineers</li>
          </ul>
          <ul className="list-disc space-y-2 pl-6">
            <li>Quality Control Engineers</li>
            <li>Safety Officers</li>
            <li>Technical Supervisors</li>
            <li>Panel Fabrication Technicians</li>
          </ul>
        </div>

        <div className="mt-8 bg-accent/10 border border-accent/30 rounded-lg p-6">
          <h4 className="font-semibold text-lg mb-3">How to Apply</h4>
          <p className="mb-4">
            If you are passionate about electrical engineering and want to be part of a dynamic team that delivers excellence, we would love to hear from you.
          </p>
          <p className="mb-2">
            Please send your resume and cover letter to:
          </p>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="h-5 w-5 text-accent" />
            <a 
              href="mailto:info@keplepcinfra.in" 
              className="text-accent font-semibold hover:underline text-lg"
            >
              info@keplepcinfra.in
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Please include "Career Application - [Position Name]" in the subject line of your email.
          </p>
        </div>
      </Section>

      <Section id="contact" title="Contact Us">
        <div className="space-y-8">
          {/* Contact Header */}
          {/* Office Locations */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Chennai Office */}
            <div className="border border-accent/30 bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <Building2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-accent">Chennai Corporate Office</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p>
                    ITPI Building, Mogappair<br />
                    Plot No.PP-1, Ground Floor<br />
                    6th Main Road, Eri Scheme<br />
                    Mogappair East, Chennai - 600 037
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span>044-2653 4885</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <a href="mailto:info@keplepcinfra.in" className="hover:text-accent transition-colors">
                    info@keplepcinfra.in
                  </a>
                </div>
              </div>
            </div>

            {/* Bangalore Office */}
            <div className="border border-border bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <Building2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold">Bangalore Office</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p>
                    Shop No.1, Guru Basava Building<br />
                    Site No.22, 2nd Cross<br />
                    Raghuvanahalli Off Kanakapura<br />
                    Main Road, Bangalore - 560 062
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span>+91-89259 32872</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <a href="mailto:blr@keplepcinfra.in" className="hover:text-accent transition-colors">
                    blr@keplepcinfra.in
                  </a>
                </div>
              </div>
            </div>

            {/* Factory */}
            <div className="border border-border bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <Building2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold">Factory</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p>
                    Survey No. 141/1, Balaji Nagar,<br />
                    Thirumazhisai Poonamallee,<br />
                    Chennai - 600 124
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span>+91-89259 32877</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <a href="mailto:factory@keplepcinfra.in" className="hover:text-accent transition-colors">
                    factory@keplepcinfra.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Service Areas</h4>
            <p className="text-sm">
              We provide electrical contracting services across South India including Tamil Nadu, Andhra Pradesh, Telangana, and Karnataka. Our team of dedicated professionals is ready to serve industries with comprehensive electrical solutions.
            </p>
          </div>
        </div>
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
