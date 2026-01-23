import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white h-20 flex items-center">
      <div className="w-full px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#2e3192] text-white p-2 rounded-sm font-bold text-sm">CA</div>
          <span className="font-bold text-2xl tracking-tight text-slate-800 uppercase">CA Monk</span>
        </div>
        
        <nav className="hidden md:flex gap-10 text-[18px] font-medium text-slate-500">
          <a href="#" className="hover:text-primary">Tools</a>
          <a href="#" className="hover:text-primary">Practice</a>
          <a href="#" className="hover:text-primary">Events</a>
          <a href="#" className="hover:text-primary">Job Board</a>
          <a href="#" className="hover:text-primary">Points</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-5 h-11 rounded-lg font-semibold text-[17px]">
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
}