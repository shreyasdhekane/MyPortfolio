// services-section.tsx
import { Mail, Code, Palette, Database, Cloud, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SiLinkedin } from "react-icons/si";

export function ServicesSection() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Expertise in React, Next.js, Angular, and TypeScript. Building responsive, component-driven interfaces with modern frameworks.",
      icon: <Code className="w-12 h-12" />,
    },
    {
      title: "Full Stack Development",
      description:
        "End-to-end application development with .NET, C#, Python, and SQL. Integrating secure APIs and cloud services.",
      icon: <Database className="w-12 h-12" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive user experiences with Figma. Reducing design-to-development handoff time by 20% through standardized workflows.",
      icon: <Palette className="w-12 h-12" />,
    },
    {
      title: "Cloud Computing",
      description:
        "Cloud-ready deployment on AWS and Vercel. Experience with Convex, Clerk, and Supabase for scalable applications.",
      icon: <Cloud className="w-12 h-12" />,
    },
    {
      title: "Mobile Development",
      description:
        "Building cross-platform apps with Flutter and React Native. University Chatbot project with Flutter frontend.",
      icon: <Smartphone className="w-12 h-12" />,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-60px font-bold mb-4">
              My technical{" "}
              <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">
                expertise
              </span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-30px max-w-2xl mx-auto">
              JavaScript (ES6+), TypeScript, .NET, C#, Python, Java, SQL •
              React, Next.js, Angular • AWS, Vercel, Git
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-32px overflow-hidden hover:translate-y--4px hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-320px flex flex-col group"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 text-black">{service.icon}</div>
                  <h3 className="text-[28px] leading-40px font-bold mb-3 text-[#0B0B0B]">
                    {service.title}
                  </h3>
                  <p className="text-[18px] leading-[30px font-medium text-[#393939]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y--4px transition-transform min-h-480px relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <SiLinkedin className="w-20 h-20" />
              </div>
              <h3 className="text-[28px] leading-40px font-bold mb-4 text-[#0B0B0B]">
                Get in touch
              </h3>
              <p className="text-[18px] leading-30px font-medium text-[#393939] mb-8">
                Looking for a developer for your next project? Let's discuss how
                I can help bring your ideas to life.
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-2xl px-12 py-6 font-medium text-[18px] w-full max-w-340px h-64px">
                <a
                  href="https://www.linkedin.com/in/shreyas-dhekane/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
