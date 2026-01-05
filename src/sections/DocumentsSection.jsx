import React from 'react';
import { FileText } from 'lucide-react';
import { supportingDocuments } from '@/data/evidence';
import { useAosRefresh } from '@/hooks/useAos';

export default function DocumentsSection() {
  useAosRefresh();

  return (
    <section id="documents" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <FileText className="w-4 h-4" /> Supporting Documents
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Formal Evidence and Work Artifacts
        </h2>
        <div className="mt-8 sm:mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportingDocuments.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="liquid-card rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <span className="text-xs text-amber-200/70 uppercase tracking-[0.2em]">
                  {item.type}
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-3">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
