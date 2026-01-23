import type { Blog } from "@/types/blog";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2 } from "lucide-react"; 

interface BlogDetailProps {
  blog: Blog | undefined;
  isLoading: boolean;
}

export default function BlogDetail({ blog, isLoading }: BlogDetailProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-[300px] w-full rounded-xl" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select an article to read
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto animate-in fade-in duration-500">
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-xl shadow-md mb-8"
      />

      <div className="space-y-6">
        <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-widest">
          {blog.category.join(" • ")} • 5 min read
        </div>
        
        <h1 className="text-4xl font-bold leading-tight text-slate-900">
          {blog.title}
        </h1>

        <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white rounded-md flex gap-2 items-center px-6">
          <Share2 className="w-4 h-4" />
          Share Article
        </Button>

        <div className="grid grid-cols-3 border rounded-lg overflow-hidden bg-gray-50/50">
          <div className="p-4 border-r">
            <span className="block font-bold text-gray-400 uppercase text-[10px] mb-1">Category</span>
            <span className="text-sm font-semibold">{blog.category[0]}</span>
          </div>
          <div className="p-4 border-r text-center">
            <span className="block font-bold text-gray-400 uppercase text-[10px] mb-1">Read Time</span>
            <span className="text-sm font-semibold">5 Mins</span>
          </div>
          <div className="p-4 text-right">
            <span className="block font-bold text-gray-400 uppercase text-[10px] mb-1">Date</span>
            <span className="text-sm font-semibold">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-blue-700 pl-4">
          {blog.description}
        </p>

        <div className="text-gray-800 leading-8 space-y-4 whitespace-pre-wrap text-[17px]">
          {blog.content}
        </div>
        
        <div className="pt-8 border-t flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">AM</div>
                <div>
                    <p className="text-sm font-bold">Written by Arjun Mehta</p>
                    <p className="text-xs text-gray-500">Senior Financial Analyst</p>
                </div>
            </div>
        </div>
      </div>
    </article>
  );
}