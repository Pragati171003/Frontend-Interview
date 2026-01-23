import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Header({ onCreateClick }: { onCreateClick: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white h-20 flex items-center">
      <div className="w-full px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#4f46e5] text-white p-2 rounded-lg">
            <GraduationCap className="w-5 h-5" /> 
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-800 uppercase font-serif">CA Monk</span>
        </div>
        
        <nav className="hidden md:flex gap-10 text-[18px] font-medium text-slate-500">
          <a href="#" className="hover:text-primary">Tools</a>
          <a href="#" className="hover:text-primary">Practice</a>
          <a href="#" className="hover:text-primary">Events</a>
          <a href="#" className="hover:text-primary">Job Board</a>
          <a href="#" className="hover:text-primary">Points</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button onClick={onCreateClick} variant="outline"
            className="border-blue-600 text-blue-600 font-semibold text-[15px] px-5 h-11 rounded-lg transition-all duration-200
              hover:bg-blue-50 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
            Create Blog
          </Button>
          <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-5 h-11 rounded-lg font-semibold text-[17px]">
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
}