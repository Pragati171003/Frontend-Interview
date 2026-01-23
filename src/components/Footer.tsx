export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-white text-black px-1.5 py-0.5 rounded font-bold text-sm text-[10px]">CA</div>
            <span className="font-bold text-xl tracking-tight">MONK</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering the next generation of financial leaders with tools, community, and knowledge.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-white cursor-pointer transition-colors">Webinars</li>
            <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Platform</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="hover:text-white cursor-pointer transition-colors">Job Board</li>
            <li className="hover:text-white cursor-pointer transition-colors">Practice Tests</li>
            <li className="hover:text-white cursor-pointer transition-colors">Mentorship</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Connect</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
            <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
            <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-8 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
        <p>© 2024 CA Monk. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}