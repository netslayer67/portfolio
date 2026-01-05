import React from 'react';
import { Trophy } from 'lucide-react';
import { achievements } from '@/data/achievements';
import { useAosRefresh } from '@/hooks/useAos';

export default function AchievementsSection() {
  useAosRefresh();

  return (
    <section id="achievements" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <Trophy className="w-4 h-4" /> Achievements
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Semester 1 Highlights
        </h2>
        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="liquid-card rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-3">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
