import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Blog } from "@/types/blog";

const API_URL = "http://localhost:3001/blogs";

export const useBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    staleTime: 1000 * 60 * 5, 
  });
};

export const useBlog = (id: string | null) => {
  return useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/${id}`);
      if (!res.ok) throw new Error("Blog not found");
      return res.json();
    },
    enabled: !!id,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newBlog: any) => {
      const response = await fetch("http://localhost:3001/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};