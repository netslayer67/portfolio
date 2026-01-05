import React from 'react';
import Atropos from 'atropos/react';
import { GraduationCap } from 'lucide-react';
import { certificates, developmentEvidence } from '@/data/development';
import { useAosRefresh } from '@/hooks/useAos';

export default function DevelopmentSection() {
  useAosRefresh();

  return (
    <section id="certifications" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <GraduationCap className="w-4 h-4" /> Professional Development
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Training, Workshops, and Certificates
        </h2>
        <p data-aos="fade-up" className="text-gray-300 mt-4 max-w-3xl">
          Evidence of professional development completed this semester, supported by certificates,
          assignment letters, and learning notes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3" data-aos="fade-up">
          {developmentEvidence.map((item) => (
            <span
              key={item}
              className="liquid-chip px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] text-white/80"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 grid lg:grid-cols-3 gap-6">
          {certificates.map((item, index) => (
            <Atropos key={item.title} className="w-full" shadow={false} highlight={true}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="liquid-card rounded-3xl p-4 h-full"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={`${item.title} certificate`}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                    data-atropos-offset="3"
                  />
                </div>
                <div className="mt-4" data-atropos-offset="6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{item.issuer}</p>
                  <p className="text-xs text-amber-200/70 mt-2">{item.date}</p>
                </div>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </section>
  );
}
