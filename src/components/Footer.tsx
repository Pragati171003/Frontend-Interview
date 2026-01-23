import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-10 md:py-12"> 
      <div className="w-full px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-white text-black p-2 rounded-lg"><GraduationCap className="w-5 h-5 md:w-6 md:h-6" /></div>
            <span className="font-bold text-xl md:text-2xl tracking-tighter uppercase">CA MONK</span>
          </div>
          <p className="text-gray-400 text-[16px] md:text-[18px] leading-relaxed max-w-sm">
            Empowering the next generation of financial leaders with tools, community, and knowledge.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 md:mb-7 text-[16px] md:text-[18px] uppercase tracking-widest text-gray-400">Resources</h4>
          <ul className="text-white text-[16px] md:text-[18px] space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors font-medium">Blog</li>
            <li className="hover:text-white cursor-pointer transition-colors font-medium">Webinars</li>
            <li className="hover:text-white cursor-pointer transition-colors font-medium">Case Studies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 md:mb-7 text-[16px] md:text-[18px] uppercase tracking-widest text-gray-400">Platform</h4>
          <ul className="text-white text-[16px] md:text-[18px] space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors font-medium">Job Board</li>
            <li className="hover:text-white cursor-pointer transition-colors font-medium">Practice Tests</li>
            <li className="hover:text-white cursor-pointer transition-colors font-medium">Mentorship</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 md:mb-7 text-[16px] md:text-[18px] uppercase tracking-widest text-gray-400">Connect</h4>
          <ul className="text-white text-[16px] md:text-[18px] space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors font-medium">LinkedIn</li>
            <li className="hover:text-white cursor-pointer transition-colors font-medium">Twitter</li>
            <li className="hover:text-white cursor-pointer transition-colors font-medium">Instagram</li>
          </ul>
        </div>
      </div>

      <div className="w-full px-6 md:px-12 mt-10 md:mt-14 pt-8 md:pt-10 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[14px] md:text-[18px] gap-6">
        <p>© 2024 CA Monk. All rights reserved.</p>
        <div className="flex gap-6 md:gap-10">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}