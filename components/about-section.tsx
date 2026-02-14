// about-section.tsx
import { User, Award, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-4 border-black rounded-full overflow-hidden bg-linear-to-br from-[#6366F1] to-[#FF6B7A] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
            <span className="text-white text-8xl font-bold">SD</span>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who's behind all this{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
                great work?
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              CS Master's student at Indiana University with a B.Tech in
              Computer Science and Business Systems. Passionate about building
              scalable web applications and creating seamless user experiences.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  <strong>MS in Computer Science</strong> - Indiana University
                  (CGPA: 3.43/4)
                  <br />
                  <strong>B.Tech CS & Business Systems</strong> - D.Y. Patil
                  University (CGPA: 8.76/10)
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Leadership & Awards
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Vice President - Computer Society of India, leading 50+
                  members and 150+ volunteers. Received Hardest Working Member
                  (2023-24) and Best Domain Lead (2022-24) awards.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#2F81F7] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Certifications
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Harvard CS50x, IBM Deep Learning (TensorFlow, Keras), Game
                  Design (HPGG02.en)
                </p>
              </div>
            </div>
          </div>

          <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-22px md:px-62px text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-240px">
            <User className="w-5 h-5" />
            More about me
          </Button>
        </div>
      </div>
    </section>
  );
}
