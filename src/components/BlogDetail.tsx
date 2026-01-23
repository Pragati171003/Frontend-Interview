import { useState } from "react";
import type { Blog } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Share2, ThumbsUp, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

export default function BlogDetail({ blog, isLoading }: { blog: Blog | undefined; isLoading: boolean }) {
  const [liked, setLiked] = useState(false);
  const { toast } = useToast();

  if (isLoading || !blog) return <div className="p-20 text-center text-slate-400">Loading...</div>;

  const displayDate = blog.date ? format(new Date(blog.date), "MMM dd, yyyy") : "Recent";

  const handleCommentClick = () => {
    toast({
        title: "Comments are disabled",
        description: "This feature will be available soon.",
    });
  };
  
  return (
    <article className="max-w-5xl mx-auto bg-white rounded-[15px] md:rounded-[20px] shadow-md border border-slate-100 overflow-hidden">
      <img src={blog.coverImage || "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"} alt="cover" className="w-full h-56 sm:h-72 md:h-[500px] object-cover" />

      <div className="px-6 md:px-16 py-8 md:py-16 space-y-6 md:space-y-10">
        <div className="flex items-center gap-3 font-bold text-sm md:text-[16px] tracking-wider">
          <span className="text-[#4f46e5]"> {blog.category?.[0] || "General"} </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-700 font-medium"> 5 min read </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-[58px] font-bold leading-tight tracking-tight text-slate-900 capitalize">
          {blog.title}
        </h1>

        <Button className="bg-[#4f46e5] hover:bg-[#4338ca] px-5 md:px-6 h-10 md:h-12 rounded-lg text-base md:text-lg font-bold w-full sm:w-fit">
          <Share2 className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Share Article
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-3 border border-slate-300 rounded-2xl bg-[#f8fafc] divide-y sm:divide-y-0 sm:divide-x divide-slate-300">
          <div className="py-4 text-center border-r border-slate-300">
            <p className="text-[14px] uppercase text-slate-500 font-bold mb-1">Category</p>
            <p className="text-base md:text-[20px] font-bold text-slate-800 capitalize">{blog.category?.[0] || "General"}</p>
          </div>
          <div className="py-4 text-center border-r border-slate-300">
            <p className="text-[14px] uppercase text-slate-500 font-bold mb-1">Read Time</p>
            <p className="text-base md:text-[20px] font-bold text-slate-800">5 Mins</p>
          </div>
          <div className="py-4 text-center">
            <p className="text-[14px] uppercase text-slate-500 font-bold mb-1">Date</p>
            <p className="text-base md:text-[20px] font-bold text-slate-800">{displayDate}</p>
          </div>
        </div>

        <div className="text-base md:text-[20px] leading-relaxed text-slate-700 space-y-6 md:space-y-8">
          <p className="border-l-[4px] md:border-l-[5px] border-[#4f46e5] pl-4 md:pl-8 italic font-medium text-slate-900 text-lg md:text-[22px]">
            {blog.description}
          </p>
          <div className="whitespace-pre-wrap">{blog.content}</div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img 
               src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${blog.author || 'Guest'}`} 
               className="w-10 h-10 md:w-12 md:h-12 rounded-full grayscale border"
            />
            <div>
              <p className="font-bold text-slate-900 text-sm md:text-base">
                Written by {blog.author || "Guest"}
              </p>
              <p className="text-[10px] md:text-[12px] uppercase text-slate-400 font-bold tracking-wide">
                {blog.authorRole || "Contributor"} 
              </p>
            </div>
          </div>
          <div className="flex gap-8 text-slate-300">
            <ThumbsUp className={`w-7 h-7 cursor-pointer transition-colors ${liked ? "text-[#4f46e5]" : "hover:text-slate-400"}`} onClick={() => setLiked(!liked)} />
            <button onClick={handleCommentClick} className="text-slate-300 hover:text-blue-600 transition-colors">
              <MessageCircle className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
      
    </article>
  );
}