import { TrendingUp, Award, ShieldAlert, BookOpen } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const getIcon = (category: string) => {
  if (category === "FINANCE") return <TrendingUp className="w-4 h-4" />;
  if (category === "CAREER") return <Award className="w-4 h-4" />;
  return <BookOpen className="w-4 h-4" />;
};

export default function BlogList({ blogs, onSelect, selectedId }: any) {
  return (
    <div className="space-y-6">
      {blogs.map((blog: any, index: number) => {
        const isActive = selectedId === blog.id.toString();
        const timeAgo = blog.date ? formatDistanceToNow(new Date(blog.date), { addSuffix: true }) : "Recent";

        return (
          <div 
            key={blog.id}
            onClick={() => onSelect(blog.id.toString())}
            className={`relative cursor-pointer p-8 rounded-xl bg-white transition-all shadow-sm border border-slate-100 ${
              isActive ? 'border-l-[6px] border-l-[#4f46e5]' : 'border-l-transparent hover:bg-slate-50'
            }`}
          >
            <div className="flex justify-between items-center mb-3">
               <span className={`text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors ${
                 isActive ? 'text-[#4f46e5]' : 'text-slate-400'
               }`}>
                 {getIcon(blog.category[0])}
                 {blog.category[0]}
               </span>
               
               <span className="text-[12px] font-medium text-slate-400">
                {timeAgo.replace('about ', '')}
               </span>
            </div>

            <h3 className="text-[20px] font-bold text-slate-900 leading-tight mb-3">
              {blog.title}
            </h3>
            
            <p className="text-slate-500 text-[15px] line-clamp-3 leading-relaxed mb-5">
              {blog.description}
            </p>

            <div>
               <span className={`text-[13px] font-medium px-3 py-1.5 rounded-full  transition-colors ${
                  isActive ? 'bg-[#eef2ff] text-[#4f46e5]' : 'bg-[#f3f4f6] text-slate-500' }`}>
                  {index === 0 ? 'Featured' : blog.category[0].charAt(0).toUpperCase() + blog.category[0].slice(1).toLowerCase()}
               </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}