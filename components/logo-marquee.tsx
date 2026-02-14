import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiAngular,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiDotnet,
  SiJavascript,
  SiFlutter,
  SiTensorflow,
} from "react-icons/si";

export function LogoMarquee() {
  const items = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiOpenjdk, name: "Java", color: "#007396" },
    { icon: SiAngular, name: "Angular", color: "#DD0031" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiDotnet, name: ".NET", color: "#512BD4" },
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  ];

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center justify-center group"
                title={item.name}
              >
                <IconComponent
                  size={48}
                  color={item.color}
                  className="hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                />
                <span className="sr-only">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
