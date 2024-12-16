import { forwardRef } from "react";

export const HowWeOperateSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="space-y-8">
      <h2 className="text-4xl font-bold font-kagon">How we operate</h2>
      <div className="space-y-4">
        <h3 className="text-2xl font-kagon">State-of-the-art narrative modeling</h3>
        <h3 className="text-2xl font-kagon">Creative that will blow your mind</h3>
        <h3 className="text-2xl font-kagon">LLM powered distribution</h3>
        <h3 className="text-2xl font-kagon">Teza</h3>
      </div>
    </section>
  );
});

HowWeOperateSection.displayName = "HowWeOperateSection";