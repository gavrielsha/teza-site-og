import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export const ContactSection = () => (
  <section className="space-y-24">
    <div className="grid gap-24 md:grid-cols-2">
      <div className="space-y-16">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Logo />
            <h2 className="text-5xl font-bold font-oswald">Teza</h2>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg text-gray-500">(Socials)</h3>
          <div className="space-y-2">
            <Link href="#" className="block hover:underline">Instagram</Link>
            <Link href="#" className="block hover:underline">Behance</Link>
            <Link href="#" className="block hover:underline">Dribbble</Link>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg text-gray-500">(Name)</label>
            <Input 
              id="name" 
              placeholder="First Name" 
              className="bg-gray-50 border-0 rounded-none h-12" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg text-gray-500">(Email)</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Email Address" 
              className="bg-gray-50 border-0 rounded-none h-12" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="sr-only">Your Message</label>
          <Textarea 
            id="message" 
            placeholder="Your Message" 
            className="min-h-[200px] bg-gray-50 border-0 rounded-none resize-none" 
          />
        </div>
        <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full h-12">
          Send Message
        </Button>
      </div>
    </div>
    <footer className="flex items-center justify-between pt-6 pb-12 border-t border-gray-200">
      <Link href="#" className="text-sm hover:underline">teza.ai ©</Link>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-blue-600 hover:underline">
        Back to Top
      </button>
    </footer>
  </section>
);