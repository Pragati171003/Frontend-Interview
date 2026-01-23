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

  const { data: blogs, isLoading: isListLoading } = useBlogs();
  const { data: blog, isFetching: isDetailLoading } = useBlog(selectedId);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Header onCreateClick={() => setIsModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="py-16 text-center border-b bg-gray-50/30">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">CA Monk Blog</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Stay updated with the latest trends in finance, accounting, and career growth
        </p>
      </section>

      <main className="container mx-auto flex flex-col md:flex-row flex-grow">
        {/* Left Side: List */}
        <aside className="w-full md:w-[380px] border-r">
          {isListLoading ? (
            <div className="p-4 space-y-4">
              {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-28 w-full rounded-xl" />)}
            </div>
          ) : (
            <BlogList blogs={blogs || []} onSelect={setSelectedId} selectedId={selectedId} />
          )}
        </aside>

        {/* Right Side: Details */}
        <section className="flex-1 bg-white p-6 md:p-12 overflow-y-auto">
          <BlogDetail blog={blog} isLoading={isDetailLoading} />
        </section>
      </main>

      <Footer />

      <CreateBlogModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}