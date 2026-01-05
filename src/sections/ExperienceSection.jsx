import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/data/experience';
import { useAosRefresh } from '@/hooks/useAos';

export default function ExperienceSection() {
  useAosRefresh();

  return (
    <section id="experience" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <Briefcase className="w-4 h-4" /> Experience
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Current Role and Timeline
        </h2>
        <div className="mt-8 sm:mt-10 space-y-6">
          {experiences.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="liquid-card rounded-3xl p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.company}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
                  {item.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
                {item.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
