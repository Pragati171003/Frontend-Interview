import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import CreateBlogModal from "./components/CreateBlogModal";
import { useBlogs, useBlog } from "./hooks/useBlogs";
import { Skeleton } from "@/components/ui/skeleton";

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>("1");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: blogs, isLoading: isListLoading, isError: listError } = useBlogs();
  const { data: blog, isFetching: isDetailLoading, isError: detailError } = useBlog(selectedId);

  if (listError) return <div className="h-screen flex items-center justify-center text-red-500 font-bold text-xl">
    Failed to load blogs. Please check if 'npm run server' is running! </div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 flex flex-col">
      <Header onCreateClick={() => setIsModalOpen(true)} />

      <section className="py-16 text-center border-b bg-white">
        <h1 className="text-[64px] font-bold tracking-tight mb-2 text-slate-900">CA Monk Blog</h1>
        <p className="text-slate-500 text-[24px] max-w-3xl mx-auto leading-relaxed">
          Stay updated with the latest trends in finance, accounting, and career growth
        </p>
      </section>

      <main className="flex flex-col md:flex-row flex-grow w-full bg-[#f8fafc]">
        <aside className="w-full md:w-[500px] px-6 py-6 sticky top-20 self-start">
          <h2 className="font-bold text-[28px] mb-10 text-slate-900 px-4">Latest Articles</h2>
          <div className="h-[820px] overflow-hidden hover:overflow-y-auto pr-2 transition-all">
              {isListLoading ? (
              <div className="space-y-6 px-4">
                {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-8 rounded-xl bg-white border border-slate-100 space-y-4">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-10 w-full" />
                </div>
                ))}
              </div>
              ) : (
                <BlogList blogs={blogs || []} onSelect={setSelectedId} selectedId={selectedId} />
              )}
            </div>
        </aside>

        <section className="flex-1 p-2 md:p-6 overflow-y-auto">
        {isDetailLoading ? (
          <div className="max-w-5xl mx-auto bg-white rounded-[20px] p-16 space-y-8">
            <Skeleton className="h-[400px] w-full rounded-2xl" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-40 w-full" />
          </div>
          ) : (
            <BlogDetail blog={blog} isLoading={isDetailLoading} />
          )}
        </section>
      </main>

      <Footer />
      <CreateBlogModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}