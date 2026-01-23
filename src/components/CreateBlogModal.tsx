import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.title.length < 5) newErrors.title = "Title must be at least 5 characters.";
    if (!formData.category) newErrors.category = "Please select a category.";
    if (formData.description.length < 10) newErrors.description = "Description is too short.";
    if (formData.description.length > 150) newErrors.description = "Description must be under 150 characters.";
    if (formData.coverImage && !isValidUrl(formData.coverImage)) newErrors.coverImage = "Please enter a valid image URL.";
    if (formData.content.length < 50) newErrors.content = "Content must be at least 50 characters.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const savedProfile = localStorage.getItem("userProfile");
    const profile = savedProfile ? JSON.parse(savedProfile) : { name: "Guest Author", role: "Contributor" };

    mutate({
      ...formData,
      author: profile.name,
      authorRole: profile.role,
      category: [formData.category.toUpperCase()], 
      date: new Date().toISOString()
    }, {
      onSuccess: () => {
        onOpenChange(false);
        setFormData({ title: "", description: "", content: "", category: "", coverImage: "" });
        setErrors({});
        toast({ title: "Success!", description: "Your blog has been published." });
      },
      onError: () => {
        toast({ variant: "destructive", title: "Error", description: "Could not connect to server." });
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95%] sm:max-w-[550px] max-h-[90vh] overflow-y-auto rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create New Blog Post</DialogTitle>
          <DialogDescription>Fill in the details below to share your expertise.</DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          <div className="grid gap-2">
            <Label className="font-bold flex justify-between">Title {errors.title && <span className="text-red-500 text-xs font-normal">{errors.title}</span>}</Label>
            <Input 
                className={errors.title ? "border-red-500" : ""}
                placeholder="Future of Finance..." 
                value={formData.title} 
                onChange={e => setFormData({...formData, title: e.target.value})} 
            />
          </div>

          <div className="grid gap-2">
            <Label className="font-bold flex justify-between">Category {errors.category && <span className="text-red-500 text-xs font-normal">{errors.category}</span>}</Label>
            <Input placeholder="e.g. TECH, FINANCE" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
          </div>

          <div className="grid gap-2">
            <Label className="font-bold flex justify-between">Cover Image URL {errors.coverImage && <span className="text-red-500 text-xs font-normal">{errors.coverImage}</span>}</Label>
            <Input placeholder="https://images.pexels.com/..." value={formData.coverImage} onChange={e => setFormData({...formData, coverImage: e.target.value})} />
          </div>

          <div className="grid gap-2">
            <div className="flex justify-between">
                <Label className="font-bold">Short Description</Label>
                <span className={`text-[10px] font-bold ${formData.description.length > 150 ? 'text-red-500' : 'text-slate-400'}`}>
                    {formData.description.length} / 150
                </span>
            </div>
            <Input value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
            {errors.description && <p className="text-red-500 text-[10px]">{errors.description}</p>}
          </div>

          <div className="grid gap-2">
            <Label className="font-bold flex justify-between">Full Content {errors.content && <span className="text-red-500 text-xs font-normal">{errors.content}</span>}</Label>
            <Textarea rows={6} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
          </div>

          <Button type="submit" className="w-full bg-[#4f46e5] hover:bg-[#4338ca] h-12 text-lg font-bold" disabled={isPending}>
            {isPending ? "Publishing..." : "Publish Blog"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}