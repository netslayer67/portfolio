import React from 'react';
import { Target } from 'lucide-react';
import { profile } from '@/data/profile';
import { useAosRefresh } from '@/hooks/useAos';

export default function AboutSection() {
  useAosRefresh();

  return (
    <section id="about" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10">
        <div data-aos="fade-up">
          <div className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
            <Target className="w-4 h-4" /> About Me
          </div>
          <h2 className="text-3xl font-bold mt-4 gradient-text">Full Profile</h2>
          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <div className="liquid-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white">Personal Details</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              {profile.personalInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-2"
                >
                  <span className="text-white/60">{item.label}</span>
                  <span className="text-white font-medium text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
