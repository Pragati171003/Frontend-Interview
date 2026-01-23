import { Button } from "@/components/ui/button";

export default function Header({ onCreateClick }: { onCreateClick: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <div className="bg-blue-900 text-white p-1 rounded font-bold text-sm">CA</div>
          <span className="font-bold text-xl tracking-tight">MONK</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary">Tools</a>
          <a href="#" className="hover:text-primary">Practice</a>
          <a href="#" className="hover:text-primary">Events</a>
          <a href="#" className="hover:text-primary">Job Board</a>
          <a href="#" className="hover:text-primary">Points</a>
        </nav>
        <Button onClick={onCreateClick} className="bg-blue-700 hover:bg-blue-800">
          Create Blog
        </Button>
      </div>
    </header>
  );
}