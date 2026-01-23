import type { Blog } from "@/types/blog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogList({ 
  blogs, 
  onSelect, 
  selectedId 
}: { 
  blogs: Blog[], 
  onSelect: (id: string) => void,
  selectedId: string | null 
}) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="font-bold text-lg mb-2">Latest Articles</h2>
      {blogs.map((blog) => (
        <Card 
          key={blog.id}
          onClick={() => onSelect(blog.id.toString())}
          className={`p-4 cursor-pointer transition-all hover:shadow-md border-l-4 ${
            selectedId === blog.id.toString() ? "border-l-blue-700 bg-blue-50/50" : "border-l-transparent"
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">
              {blog.category[0]}
            </span>
            <span className="text-[10px] text-gray-400">2 days ago</span>
          </div>
          <h3 className="font-bold text-sm mb-1 line-clamp-2">{blog.title}</h3>
          <p className="text-xs text-gray-500 line-clamp-2">{blog.description}</p>
          <div className="mt-3 flex gap-1">
             <Badge variant="secondary" className="text-[9px] h-4">Study Tips</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}