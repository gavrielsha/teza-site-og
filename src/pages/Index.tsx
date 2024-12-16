import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from 'react';
import { Logo } from "@/components/Logo";
import "@fontsource/eb-garamond";
import "@fontsource/oswald";

export default function Index() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const headerTextRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const howWeOperateRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const headerText = headerTextRef.current;
    const content = contentRef.current;
    const howWeOperate = howWeOperateRef.current;
    if (!header || !content || !howWeOperate || !headerText) return;

    const handleScroll = () => {
      if (!isContentVisible) return;

      const howWeOperateTop = howWeOperate.getBoundingClientRect().top;
      const headerHeight = header.offsetHeight;
      const scrollY = window.scrollY;

      // Calculate scale based on scroll position
      const maxScroll = howWeOperateTop - headerHeight;
      const scale = Math.max(0.65, Math.min(1, 1 - scrollY / maxScroll * 0.35));
      
      headerText.style.transform = `scale(${scale})`;
      headerText.style.transformOrigin = 'left top';

      if (howWeOperateTop <= headerHeight) {
        header.style.position = 'absolute';
        header.style.top = `${howWeOperate.offsetTop - headerHeight}px`;
        headerText.style.transform = 'scale(0.65)';
      } else {
        header.style.position = 'fixed';
        header.style.top = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isContentVisible]);

  const handleViralityClick = () => {
    setIsContentVisible(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 10);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black font-['EB_Garamond']">
      <Logo />
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-10 py-3" style={{
        boxShadow: '0 4px 6px -1px rgba(255, 255, 255, 0.7), 0 2px 4px -1px rgba(255, 255, 255, 0.6)',
        background: 'linear-gradient(to bottom, white 90%, rgba(255, 255, 255, 0.8) 100%)'
      }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col items-start space-y-4">
            <Logo size="medium" />
            <h1 
              ref={headerTextRef}
              className="text-[65vw] font-bold leading-tight font-['Oswald']"
              style={{ fontSize: 'clamp(2rem, 65vw, 5rem)' }}
            >
              We spark{" "}
              <span className="text-blue-600 cursor-pointer" onClick={handleViralityClick}>
                virality <span className="inline-block">[1]</span>
              </span>
            </h1>
          </div>
        </div>
      </header>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out ${
          isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <main className="container mx-auto px-4 space-y-24 max-w-4xl pt-56">
          {/* Hero Section */}
          <section className="space-y-6">
            <div className="space-y-4">
              <p>
                [1] Engineering virality through AI-powered narrative marketing. We've generated hundreds of millions of views, dominated global headlines, and broken through every echo chamber imaginable.
              </p>
              <p>
                Our methodology combines advanced artificial intelligence with primal human psychology. The result: unparalleled influence at unprecedented scale. We don't just reach people - we make them act.
              </p>
              <p>
                Currently serving: 📍 world leaders, 📍 entrepreneurs, and 📍 global movements.
              </p>
              <p>
                Our creative bandwidth is allocated exclusively to client campaigns - hence this brutally simple website.
              </p>
            </div>
            <div className="space-y-2">
              <p>📌 Increased engagement by 20x+ for World Leader on key geopolitical issue. #1 most viewed posts across platforms.</p>
              <p>📌 Brought tens of millions of views to human rights abuses and sparked on-the-ground movements.</p>
              <p>📌 Orchestrated viral stunt for movie studio, driving millions of engagements and garnered international press.</p>
            </div>
            <p className="text-sm">→ To work with us, scroll down to learn more and apply</p>
          </section>

          {/* How we operate Section */}
          <section ref={howWeOperateRef} className="space-y-8">
            <h2 className="text-2xl font-bold font-['Oswald']">How we operate</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-bold mb-2">State-of-the-art narrative modeling</h3>
                <p>
                  Our AI-driven approach analyzes and predicts viral potential across platforms, ensuring maximum impact for every campaign.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Creative that will blow your mind</h3>
                <p>
                  We combine data-driven insights with cutting-edge creative to produce content that captures attention and drives engagement.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">LLM powered distribution</h3>
                <p>
                  Advanced language models optimize content distribution, ensuring your message reaches and resonates with the right audience.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-['Oswald']">Team</h2>
            <p>
              Our team combines expertise in AI, psychology, and creative strategy to engineer viral moments that capture global attention.
            </p>
          </section>

          {/* Contact/Footer Section */}
          <section className="space-y-24">
            <div className="grid gap-24 md:grid-cols-2">
              <div className="space-y-16">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Logo />
                    <h2 className="text-5xl font-bold font-['Oswald']">Teza</h2>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg text-gray-500">(Socials)</h3>
                  <div className="space-y-2">
                    <a href="#" className="block hover:underline">Instagram</a>
                    <a href="#" className="block hover:underline">Behance</a>
                    <a href="#" className="block hover:underline">Dribbble</a>
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
              <a href="#" className="text-sm hover:underline">
                teza.ai ©
              </a>
              <button onClick={scrollToTop} className="text-sm text-blue-600 hover:underline">
                Back to Top
              </button>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}