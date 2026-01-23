import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCreateBlog } from "@/hooks/useBlogs";
import { useToast } from "@/hooks/use-toast";

export default function CreateBlogModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const { mutate, isPending } = useCreateBlog();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ title: "", description: "", content: "", category: "", coverImage: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const savedProfile = localStorage.getItem("userProfile");
    const profile = savedProfile ? JSON.parse(savedProfile) : { name: "Guest Author", role: "Contributor" };

    mutate({
      ...formData,
      author: profile.name,
      authorRole: profile.role, 
      category: [formData.category || "General"], 
      date: new Date().toISOString()
    }, {
      onSuccess: () => {
        onOpenChange(false);
        setFormData({ title: "", description: "", content: "", category: "", coverImage: "" });
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95%] sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-700 font-medium">
            Publishing as: <span className="font-bold underline">
              {localStorage.getItem("userProfile") ? JSON.parse(localStorage.getItem("userProfile")!).name : "Guest"}
            </span> (Change this in Profile)
          </div>

          <div className="grid gap-2">
            <Label>Title</Label>
            <Input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>
          <div className="grid gap-2">
            <Label>Category</Label>
            <Input placeholder="e.g. FINANCE" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
          </div>
          <div className="grid gap-2">
            <Label>Cover Image URL</Label>
            <Input placeholder="https://..." value={formData.coverImage} onChange={e => setFormData({...formData, coverImage: e.target.value})} />
          </div>
          <div className="grid gap-2">
            <Label>Short Description</Label>
            <Input value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          </div>
          <div className="grid gap-2">
            <Label>Content</Label>
            <Textarea rows={5} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
          </div>

          <Button type="submit" className="w-full bg-blue-700" disabled={isPending}>
            {isPending ? "Creating..." : "Publish Blog"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}