import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/Logo";

export const ContactSection = () => (
  <section className="space-y-24">
    <div className="grid gap-24 md:grid-cols-2">
      <div className="space-y-16">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Logo />
            <h2 className="text-5xl font-eb-garamond italic">Teza</h2>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg text-gray-500 italic">(Socials)</h3>
          <div className="space-y-2">
            <a href="#" className="block hover:underline font-matrix">Instagram</a>
            <a href="#" className="block hover:underline font-matrix">Behance</a>
            <a href="#" className="block hover:underline font-matrix">Dribbble</a>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg text-gray-500 italic">(Name)</label>
            <Input 
              id="name" 
              placeholder="First Name" 
              className="bg-gray-50 border-0 rounded-none h-12 font-matrix" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg text-gray-500 italic">(Email)</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Email Address" 
              className="bg-gray-50 border-0 rounded-none h-12 font-matrix" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="sr-only">Your Message</label>
          <Textarea 
            id="message" 
            placeholder="Your Message" 
            className="min-h-[200px] bg-gray-50 border-0 rounded-none resize-none font-matrix" 
          />
        </div>
        <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full h-12 text-xl">
          Send Message
        </Button>
      </div>
    </div>
    <footer className="flex items-center justify-between pt-6 pb-12 border-t border-gray-200">
      <a href="#" className="text-sm hover:underline font-matrix">teza.ai ©</a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-blue-600 hover:underline font-matrix">
        Back to Top
      </button>
    </footer>
  </section>
);