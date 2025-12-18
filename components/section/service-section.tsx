import React from "react";
import ServiceCard from "../component/service-card";
import Title from "../ui/title";
import { Globe, Headset, Palette, Phone, TrendingUp, Zap, Shield, Bug } from "lucide-react";

export const Services = [
  {
    title: "Optimized for Speed & SEO",
    description:
      "Fast loading websites that boost your search engine ranking and provide a seamless user experience.",
    icon: Zap,
  },
  {
    title: "Responsive & Mobile-First Design",
    description:
      "Websites that adapt beautifully to any screen size, ensuring an excellent experience on all devices.",
    icon: Phone,
  },
  {
    title: "Modern UI/UX Design",
    description:
      "Clean and user-friendly designs aligned with the latest industry trends to engage and retain users.",
    icon: Palette,
  },
  {
    title: "Internationalization & Localization",
    description:
      "Tailored multilingual websites to make sure your brand connects with audiences across the globe.",
    icon: Globe,
  },
  {
    title: "Business Growth & Analytics",
    description:
      "Using data-driven insights to enhance your brand's growth and make well-informed business decisions.",
    icon: TrendingUp,
  },
  {
    title: "Support & Maintenance",
    description:
      "Ongoing support and maintenance to ensure your website stays updated, secure, and reliable.",
    icon: Headset,
  },
  {
    title: "Web3 & Smart Contract Security",
    description:
      "Comprehensive security audits and penetration testing for smart contracts and Web3 projects to identify vulnerabilities.",
    icon: Shield,
  },
  {
    title: "Bug Bounty & Vulnerability Assessment",
    description:
      "Professional bug bounty hunting and security assessments to help you discover and fix critical vulnerabilities before they're exploited.",
    icon: Bug,
  },
];

const ServiceSection = () => {
  const whatsappLink = `https://wa.me/6285155461192?text=Hi%20Ryan!%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%20more?`;

  return (
    <section
      className="flex flex-col items-center w-full max-w-6xl px-6 py-12 md:py-16"
      id="service"
    >
      <Title
        title="Services"
        subtitle="Empower Your Business with My Expertise"
        className="mb-8 md:mb-14 text-center"
      />

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 w-full">
        {Services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300
                     bg-primary text-white hover:bg-primary-light focus:ring-4 focus:ring-primary-dark 
                     dark:bg-secondary dark:text-white dark:hover:bg-secondary-light dark:focus:ring-secondary-dark"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default ServiceSection;
