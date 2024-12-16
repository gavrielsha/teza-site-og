import { useRef, useState } from 'react';
import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowWeOperateSection } from "@/components/HowWeOperateSection";
import { ContactSection } from "@/components/ContactSection";
import "@fontsource/eb-garamond";
import "@fontsource/oswald";

export default function Index() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const howWeOperateRef = useRef<HTMLElement>(null);

  const handleViralityClick = () => {
    setIsContentVisible(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 10);
  };

  return (
    <div className="min-h-screen bg-white text-black font-eb-garamond" style={{ 
      overflow: isContentVisible ? 'auto' : 'hidden',
      height: isContentVisible ? 'auto' : '100vh'
    }}>
      <Logo />
      <Header 
        isContentVisible={isContentVisible}
        onViralityClick={handleViralityClick}
        howWeOperateRef={howWeOperateRef}
      />
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out ${
          isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <main className="w-full max-w-[2000px] mx-auto px-4 md:px-8 space-y-20 pt-40 text-left">
          <HeroSection />
          <HowWeOperateSection ref={howWeOperateRef} />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}