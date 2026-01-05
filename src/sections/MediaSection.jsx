import React from 'react';
import { Camera } from 'lucide-react';
import { mediaDocumentation } from '@/data/evidence';
import { useAosRefresh } from '@/hooks/useAos';

export default function MediaSection() {
  useAosRefresh();

  return (
    <section id="media" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <Camera className="w-4 h-4" /> Photo and Video
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Documentation for Performance Evidence
        </h2>
        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-6">
          {mediaDocumentation.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="liquid-card rounded-3xl p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
                      {item.type}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-4">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
