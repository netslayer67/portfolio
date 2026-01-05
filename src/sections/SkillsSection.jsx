import React from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { skills, personality } from '@/data/skills';
import { useAosRefresh } from '@/hooks/useAos';

export default function SkillsSection() {
  useAosRefresh();

  return (
    <section id="skills" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28 grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div data-aos="fade-up" className="liquid-card rounded-3xl p-6">
          <div className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
            <Code2 className="w-4 h-4" /> Skills
          </div>
          <h3 className="text-2xl font-semibold mt-4 gradient-text">Core Capabilities</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="liquid-chip skill-chip px-4 py-2 rounded-2xl text-sm text-white/85"
              >
                <span className="skill-chip__dot" aria-hidden="true" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="150" className="liquid-card rounded-3xl p-6">
          <div className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-4 h-4" /> Personality
          </div>
          <h3 className="text-2xl font-semibold mt-4 gradient-text">Distinctive Traits</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 list-none">
            {personality.map((trait) => (
              <li key={trait} className="liquid-chip trait-chip px-4 py-2 rounded-2xl text-sm text-white/80">
                <span className="trait-chip__dot" aria-hidden="true" />
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
