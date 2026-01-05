import React from 'react';
import { Award } from 'lucide-react';
import { appreciationLetters } from '@/data/evidence';
import { useAosRefresh } from '@/hooks/useAos';

export default function AppreciationSection() {
  useAosRefresh();

  return (
    <section id="appreciation" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <Award className="w-4 h-4" /> Appreciation Letters
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Certificates, Shoutouts, and Recognition
        </h2>
        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-6">
          {appreciationLetters.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="liquid-card rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70 mt-2">
                {item.issuer}
              </p>
              <p className="text-sm text-gray-300 mt-4">{item.detail}</p>
              <div className="mt-4 text-xs text-amber-200/70">Proof: {item.proof}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
