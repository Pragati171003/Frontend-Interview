import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Header({ onCreateClick }: { onCreateClick: () => void }) {
  const { toast } = useToast();
  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon!",
      description: "This feature is currently under development.",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur h-16 md:h-20 flex items-center">
      <div className="w-full px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#4f46e5] text-white p-1.5 md:p-2 rounded-lg"><GraduationCap className="w-4 h-4 md:w-5 md:h-5" /> </div>
          <Link to="/">
            <span className="font-bold text-lg md:text-2xl tracking-tight text-slate-800 uppercase font-serif">CA Monk</span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex gap-6 xl:gap-10 text-[16px] xl:text-[18px] font-medium text-slate-500">
          <a href="#" onClick={handleComingSoon} className="hover:text-primary">Tools</a>
          <a href="#" onClick={handleComingSoon} className="hover:text-primary">Practice</a>
          <a href="#" onClick={handleComingSoon} className="hover:text-primary">Events</a>
          <a href="#" onClick={handleComingSoon} className="hover:text-primary">Job Board</a>
          <a href="#" onClick={handleComingSoon} className="hover:text-primary">Points</a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <Button onClick={onCreateClick} variant="outline"
            className="border-blue-600 text-blue-600 font-semibold text-[12px] md:text-[15px] px-3 md:px-5 h-9 md:h-11 rounded-lg transition-all">
            Create Blog
          </Button>
          <Link to="/profile">
            <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-3 md:px-5 h-9 md:h-11 rounded-lg font-semibold text-[13px] md:text-[17px]">
              Profile
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}