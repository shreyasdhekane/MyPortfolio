// footer.tsx
import { Linkedin, Mail, Phone, Github } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact-section" className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#2F81F7] to-[#FF6B7A] flex items-center justify-center text-white font-bold">
                  SD
                </div>
                <span className="text-lg md:text-xl font-bold">
                  Shreyas Dhekane
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                MS Computer Science student at Indiana University. Full Stack
                Developer passionate about building scalable web applications.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/shreyasdhekane"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shreyasdhekane/"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/16XM_kX4lLqWw5KdUTXwLIIzPvIySpHFz?usp=drive_link"
                    className="hover:text-white transition-colors"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/shreyasdhekane"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:dhekaneshreyas@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    dhekaneshreyas@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:+18129292319"
                    className="hover:text-white transition-colors"
                  >
                    +1 (812) 929-2319
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a
                    href="https://www.linkedin.com/in/shreyasdhekane/"
                    className="hover:text-white transition-colors"
                  >
                    linkedin.com/in/shreyasdhekane
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p> Shreyas Dhekane &lt;3 </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
