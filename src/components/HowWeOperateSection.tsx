import { forwardRef } from "react";

export const HowWeOperateSection = forwardRef<HTMLElement>((_, ref) => (
  <>
    <section ref={ref} className="space-y-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-matrix">How we operate</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold font-matrix mb-2">State-of-the-art narrative modeling</h3>
          <p className="text-sm md:text-base">
            Our AI-driven approach analyzes and predicts viral potential across platforms, ensuring maximum impact for every campaign.
          </p>
        </div>
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold font-matrix mb-2">Creative that will blow your mind</h3>
          <p className="text-sm md:text-base">
            We combine data-driven insights with cutting-edge creative to produce content that captures attention and drives engagement.
          </p>
        </div>
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold font-matrix mb-2">LLM powered distribution</h3>
          <p className="text-sm md:text-base">
            Advanced language models optimize content distribution, ensuring your message reaches and resonates with the right audience.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-matrix">Team</h2>
      <p className="text-sm md:text-base lg:text-lg">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
    </section>
  </>
));

HowWeOperateSection.displayName = "HowWeOperateSection";