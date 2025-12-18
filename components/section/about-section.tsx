import React from "react";
import Title from "../ui/title";
import AboutCard from "../component/about-card";
import Badge from "../ui/badge";

const AboutSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="about">
      <Title
        title="About"
        subtitle="Get to know me better"
        className="mb-6 md:mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 w-full gap-y-8 gap-x-0 md:gap-x-8">
        <div className="col-span-2 flex flex-col">
          <p className="text-base md:text-base text-muted-foreground">
          Hi! I'm Ryan , a full-stack developer and designer from Indonesia, 
          passionate about creating unique and engaging digital experiences. 
            <span className="h-6 block" />
            My journey in programming began toward the end of my vocational high school years, sparked by curiosity and 
            a desire to build something impactful. Since then, I've had the opportunity to collaborate with diverse 
            clients and companies, helping them achieve their business goals.
            <span className="h-6 block" />
            While I enjoy working across various aspects of software development, frontend development is where I truly shine,
             blending my love for design and product creation.
            <span className="h-6 block" />
            Currently, I'm expanding my expertise into the realm of web security, exploring the intricate world of website pentesting. 
            My mission is to uncover vulnerabilities and enhance digital defenses, ensuring websites remain secure, resilient, and prepared 
            for the ever-evolving landscape of the internet.
            <span className="h-6 block" />
            Beyond individual security work, I founded and lead a Web3 community dedicated to smart contract pentesting and identifying promising 
            projects in the Web3 ecosystem. Through this initiative, I help developers and investors navigate the Web3 landscape by uncovering vulnerabilities 
            and discovering emerging opportunities.
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-4 md:gap-6">
          <AboutCard />
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="w-fit text-sm px-2 py-1">Figma</Badge>
            <Badge className="w-fit text-sm px-2 py-1">React</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Vercel</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Next.js</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Webflow</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Tailwind</Badge>
            <Badge className="w-fit text-sm px-2 py-1">TypeScript</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Laravel</Badge>
            <Badge className="w-fit text-sm px-2 py-1">PHP</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Web3 Security</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Smart Contract Audit</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
