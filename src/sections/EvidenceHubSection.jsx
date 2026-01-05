import React from 'react';
import { FolderOpen } from 'lucide-react';
import { evidenceMenu } from '@/data/evidence';
import { useAosRefresh } from '@/hooks/useAos';

export default function EvidenceHubSection() {
  useAosRefresh();

  return (
    <section id="evidence" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <FolderOpen className="w-4 h-4" /> Evidence Hub
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Supporting Proof and Documentation
        </h2>
        <p data-aos="fade-up" className="text-gray-300 mt-4 max-w-3xl">
          Dedicated menus for appreciation letters, documents, media documentation, and original works that
          strengthen performance evidence.
        </p>
        <div className="mt-6 flex flex-wrap gap-3" data-aos="fade-up">
          {evidenceMenu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="liquid-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] text-white/80"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
