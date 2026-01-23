import { useState } from "react";
import type { Blog } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Share2, ThumbsUp, MessageCircle } from "lucide-react";
import { format } from "date-fns";

export default function BlogDetail({ blog, isLoading }: { blog: Blog | undefined; isLoading: boolean }) {
  const [liked, setLiked] = useState(false);

  if (isLoading || !blog) return <div className="p-20 text-center text-slate-400">Loading...</div>;

  const displayDate = blog.date ? format(new Date(blog.date), "MMM dd, yyyy") : "Recent";

  return (
    <article className="max-w-5xl mx-auto bg-white rounded-[20px] shadow-md border border-slate-100 overflow-hidden">
      <img src={blog.coverImage || "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"} alt="cover" className="w-full h-[500px] object-cover" />

      <div className="px-16 py-16 space-y-10">
        <div className="flex items-center gap-3 font-bold text-[16px] tracking-wider">
          <span className="text-[#4f46e5]"> {blog.category?.[0] || "General"} </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-700 font-medium"> 5 min read </span>
        </div>

        <h1 className="text-[58px] font-bold leading-[1.1] tracking-tight text-slate-900 capitalize">
          {blog.title}
        </h1>

        <Button className="bg-[#4f46e5] hover:bg-[#4338ca] px-6 h-12 rounded-lg text-lg font-bold">
          <Share2 className="w-5 h-5 mr-2" />
          Share Article
        </Button>

        <div className="grid grid-cols-3 border border-slate-300 rounded-2xl bg-[#f8fafc]">
          <div className="py-4 text-center border-r border-slate-300">
            <p className="text-[14px] uppercase text-slate-500 font-bold mb-1">Category</p>
            <p className="text-[20px] font-bold text-slate-800 capitalize">{blog.category?.[0] || "General"}</p>
          </div>
          <div className="py-4 text-center border-r border-slate-300">
            <p className="text-[14px] uppercase text-slate-500 font-bold mb-1">Read Time</p>
            <p className="text-[20px] font-bold text-slate-800">5 Mins</p>
          </div>
          <div className="py-4 text-center">
            <p className="text-[14px] uppercase text-slate-500 font-bold mb-1">Date</p>
            <p className="text-[20px] font-bold text-slate-800">{displayDate}</p>
          </div>
        </div>

        <div className="text-[20px] leading-relaxed text-slate-700 space-y-8">
          <p className="border-l-[5px] border-[#4f46e5] pl-8 italic font-medium text-slate-900 text-[22px]">
            {blog.description}
          </p>
          <div className="whitespace-pre-wrap">{blog.content}</div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
               src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${blog.author || 'Guest'}`} 
               className="w-12 h-12 rounded-full grayscale border" 
            />
            <div>
              <p className="font-bold text-slate-900 text-base">
                Written by {blog.author || "Guest"}
              </p>
              <p className="text-[12px] uppercase text-slate-400 font-bold tracking-wide">
                {blog.author ? "Contributor" : "Unknown Author"}
              </p>
            </div>
          </div>
          <div className="flex gap-8 text-slate-300">
            <ThumbsUp className={`w-7 h-7 cursor-pointer transition-colors ${liked ? "text-[#4f46e5]" : "hover:text-slate-400"}`} onClick={() => setLiked(!liked)} />
            <MessageCircle className="w-7 h-7 cursor-pointer hover:text-slate-400" />
          </div>
        </div>
      </div>
    </article>
  );
}