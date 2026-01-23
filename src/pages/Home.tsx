import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import { useBlogs, useBlog } from "../hooks/useBlogs";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home({ onCreateClick }: { onCreateClick: () => void }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get("id") || "1";

  const { data: blogs, isLoading: isListLoading, isError: listError } = useBlogs();
  const { data: blog, isFetching: isDetailLoading } = useBlog(selectedId);

  const handleSelectBlog = (id: string) => {
    setSearchParams({ id });
  };

  if (listError) return <div className="h-screen flex items-center justify-center text-red-500 font-bold">Failed to load blogs. Check 'npm run server'!</div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 flex flex-col">
      <Header onCreateClick={onCreateClick} />

        <section className="pt-24 pb-20 text-center border-b bg-white px-4">
            <h1 className="text-5xl md:text-[64px] font-extrabold tracking-tight mb-6 text-[#0f172a]">
                CA Monk Blog
            </h1>
            <p className="text-[#64748b] text-lg md:text-[24px] max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium">
                Stay updated with the latest trends in finance, accounting, and career growth
            </p>
        </section>

      <main className="flex flex-col lg:flex-row flex-grow w-full bg-[#f8fafc] px-4 md:px-12">
        <aside className="w-full lg:w-[500px] flex-shrink-0 py-8 lg:py-12 lg:pr-4 lg:sticky lg:top-20 lg:self-start">
          <h2 className="font-bold text-2xl md:text-[28px] mb-6 md:mb-10 text-slate-900 px-4">Latest Articles</h2>
          <div className="max-h-[820px] overflow-y-auto">
              {isListLoading ? (
                <div className="space-y-6 px-4">
                    {[1, 2, 3].map((i) => <Skeleton key={i} className="h-32 w-full rounded-xl" />)}
                </div>
              ) : (
                <BlogList blogs={blogs || []} onSelect={handleSelectBlog} selectedId={selectedId} />
              )}
            </div>
        </aside>

        <section className="flex-1 py-8 lg:py-12 lg:pl-4">
          <BlogDetail blog={blog} isLoading={isDetailLoading} />
        </section>
      </main>

      <Footer />
    </div>
  );
}