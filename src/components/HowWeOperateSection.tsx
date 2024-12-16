import { forwardRef } from "react";

export const HowWeOperateSection = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} className="space-y-16">
    <h2 className="text-4xl font-bold font-kagon">How we operate</h2>
    <div className="grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="text-2xl font-bold font-kagon mb-2">State-of-the-art narrative modeling</h3>
        <p>
          Our AI-driven approach analyzes and predicts viral potential across platforms, ensuring maximum impact for every campaign.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold font-kagon mb-2">Creative that will blow your mind</h3>
        <p>
          We combine data-driven insights with cutting-edge creative to produce content that captures attention and drives engagement.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold font-kagon mb-2">LLM powered distribution</h3>
        <p>
          Advanced language models optimize content distribution, ensuring your message reaches and resonates with the right audience.
        </p>
      </div>
    </div>

    <div className="space-y-8">
      <h2 className="text-4xl font-bold font-kagon">Team</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold font-kagon mb-2">Viral Architects</h3>
          <p>Our team of viral architects combines deep expertise in psychology, data science, and creative direction.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-kagon mb-2">AI Engineers</h3>
          <p>World-class AI engineers developing cutting-edge algorithms for viral content optimization.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-kagon mb-2">Creative Directors</h3>
          <p>Award-winning creative directors crafting unforgettable narratives that capture global attention.</p>
        </div>
      </div>
    </div>
  </section>
));

HowWeOperateSection.displayName = "HowWeOperateSection";