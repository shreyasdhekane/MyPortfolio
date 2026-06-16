// experience-section.tsx
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExperienceSection() {
  const experiences = [
    {
      period: "June 2026 - Present",
      title: "Software Engineering Intern",
      company: "Fastflo.AI",
      description:
        "Designing, developing, testing, and documenting software features across the front end and back end of the Fastflo platform. Building and maintaining APIs and integrations that support automated, multi-channel candidate messaging workflows;",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">
                professional experience
              </span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Computer Science graduate student at Indiana University with
              hands-on experience in full-stack development, cloud computing,
              and UI/UX design.
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-22px md:px-62px text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-240px">
              <FileText className="w-5 h-5" />
              <a
                href="https://drive.google.com/drive/folders/16XM_kX4lLqWw5KdUTXwLIIzPvIySpHFz?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                See full resume
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black rounded-3xl min-h-220px md:min-h-240px"
              >
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-34px font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>{" "}
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-40px font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}{" "}
                    <span className="text-[#2F81F7]">@ {exp.company}</span>
                  </h3>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
