import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="mt-40">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-eb-garamond italic mb-10">Contact</h2>
      <div className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-gray-50 border-0 rounded-none font-matrix"
          />
        </div>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-gray-50 border-0 rounded-none font-matrix"
          />
        </div>
        <div className="space-y-2">
          <Textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[200px] bg-gray-50 border-0 rounded-none resize-none font-matrix" 
          />
        </div>
        <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full h-12 text-xl">
          Send Message
        </Button>
      </div>
    </section>
  );
};