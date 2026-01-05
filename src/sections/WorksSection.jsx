import React from 'react';
import { Layers } from 'lucide-react';
import { originalWorks } from '@/data/evidence';
import { useAosRefresh } from '@/hooks/useAos';

export default function WorksSection() {
  useAosRefresh();

  return (
    <section id="works" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <Layers className="w-4 h-4" /> Original Works
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Contributions that Enrich Teaching and Performance
        </h2>
        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-6">
          {originalWorks.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="liquid-card rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-3">{item.description}</p>
              <div className="mt-4 text-xs uppercase tracking-[0.3em] text-amber-200/70">
                {item.format}
              </div>
              <div className="mt-2 text-xs text-amber-200/70">Proof: {item.proof}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
