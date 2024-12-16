import { Logo } from "@/components/Logo";
import { useEffect, useRef } from "react";

interface HeaderProps {
  isContentVisible: boolean;
  onViralityClick: () => void;
  howWeOperateRef: React.RefObject<HTMLElement>;
}

export const Header = ({ isContentVisible, onViralityClick, howWeOperateRef }: HeaderProps) => {
  const headerRef = useRef<HTMLElement>(null);
  const headerTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const headerText = headerTextRef.current;
    const howWeOperate = howWeOperateRef.current;
    if (!header || !howWeOperate || !headerText) return;

    const handleScroll = () => {
      if (!isContentVisible) return;

      const howWeOperateTop = howWeOperate.getBoundingClientRect().top;
      const headerHeight = header.offsetHeight;
      const scrollY = window.scrollY;

      // Calculate scale based on scroll position with smoother transition
      const maxScroll = howWeOperateTop - headerHeight;
      const scale = Math.max(0.65, Math.min(1, 1 - (scrollY / maxScroll) * 0.35));
      
      // If we haven't reached the how we operate section
      if (howWeOperateTop > headerHeight) {
        header.style.position = 'fixed';
        header.style.top = '0';
        headerText.style.transform = `scale(${scale})`;
      } else {
        // Lock the header just above the how we operate section
        header.style.position = 'absolute';
        header.style.top = `${howWeOperate.offsetTop - headerHeight}px`;
        headerText.style.transform = 'scale(0.65)';
      }
      
      headerText.style.transformOrigin = 'left top';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isContentVisible, howWeOperateRef]);

  return (
    <header 
      ref={headerRef} 
      className="fixed top-0 left-0 right-0 z-10 py-2 w-full" 
      style={{
        boxShadow: '0 4px 6px -1px rgba(255, 255, 255, 0.7), 0 2px 4px -1px rgba(255, 255, 255, 0.6)',
        background: 'linear-gradient(to bottom, white 90%, rgba(255, 255, 255, 0.8) 100%)'
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-start space-y-2">
          <Logo size="medium" />
          <div className="w-full overflow-hidden">
            <h1 
              ref={headerTextRef}
              className="font-bold leading-tight font-eb-garamond italic text-left break-words"
              style={{ 
                fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                lineHeight: '1.1',
                maxWidth: '100%'
              }}
            >
              We spark{" "}
              <span className="text-blue-600 cursor-pointer" onClick={onViralityClick}>
                virality <span className="inline-block">[1]</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};