import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, MapPin, Briefcase, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Profile({ onCreateClick }: { onCreateClick: () => void }) {
  const [profile, setProfile] = useState({
    name: "Arjun Mehta",
    role: "Senior Financial Analyst",
    location: "Mumbai, India",
    exp: "5+ Years Exp",
    email: "arjun@camonk.com",
    bio: "Specializing in Audit Automation and Fintech."
  });

  const [editData, setEditData] = useState(profile);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      const parsed = JSON.parse(saved);
      setProfile(parsed);
      setEditData(parsed);
    }
  }, []);

  const handleSave = () => {
    setProfile(editData);
    localStorage.setItem("userProfile", JSON.stringify(editData));
    setIsEditOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Header onCreateClick={onCreateClick} />
      <main className="flex-grow py-10 md:py-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto bg-white rounded-[24px] shadow-sm border overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-700 to-indigo-800" />
          <div className="px-6 md:px-12 pb-12">
            <div className="relative -top-16 flex items-end justify-between">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.name}`} 
                className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-8 border-white bg-slate-100 shadow-lg"
              />
              
              <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="font-bold border-slate-200">
                    <Edit2 className="w-4 h-4 mr-2" /> Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] max-h-[85vh] overflow-y-auto">
                  <DialogHeader><DialogTitle>Edit Profile Details</DialogTitle></DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label>Full Name</Label>
                      <Input value={editData.name} onChange={e => setEditData({...editData, name: e.target.value})} />
                    </div>
                    <div className="grid gap-2">
                      <Label>Professional Title (Role)</Label>
                      <Input value={editData.role} onChange={e => setEditData({...editData, role: e.target.value})} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Location</Label>
                            <Input value={editData.location} onChange={e => setEditData({...editData, location: e.target.value})} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Experience</Label>
                            <Input value={editData.exp} onChange={e => setEditData({...editData, exp: e.target.value})} />
                        </div>
                    </div>
                    <div className="grid gap-2">
                      <Label>Bio</Label>
                      <Textarea rows={4} value={editData.bio} onChange={e => setEditData({...editData, bio: e.target.value})} />
                    </div>
                    <Button onClick={handleSave} className="bg-[#4f46e5] h-12 font-bold mt-2">Save All Changes</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Profile Display Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">{profile.name}</h1>
                <p className="text-xl text-slate-500 font-medium mt-1">{profile.role}</p>
              </div>
              <div className="flex flex-wrap gap-6 text-slate-500 text-sm font-medium">
                <span className="flex items-center gap-2 font-serif"><MapPin className="w-4 h-4" /> {profile.location}</span>
                <span className="flex items-center gap-2 font-serif"><Briefcase className="w-4 h-4" /> {profile.exp}</span>
              </div>
              <hr />
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-serif">Bio</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-serif">{profile.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}