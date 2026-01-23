import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react"; 
import CreateBlogModal from "./components/CreateBlogModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home onCreateClick={handleOpenModal} />} />
        <Route path="/profile" element={<Profile onCreateClick={handleOpenModal} />} />
      </Routes>
      <CreateBlogModal open={isModalOpen} onOpenChange={setIsModalOpen} /> 
      <Toaster />
    </>
  );
}