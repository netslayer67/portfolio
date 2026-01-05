import React from 'react';
import { Briefcase } from 'lucide-react';
import { projects } from '@/data/projects';
import { useAosRefresh } from '@/hooks/useAos';

export default function ProjectsSection() {
  useAosRefresh();

  return (
    <section id="projects" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <Briefcase className="w-4 h-4" /> Projects and Case Studies
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">Selected Work</h2>
        <div className="mt-8 sm:mt-10 grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="liquid-card rounded-3xl p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70 mt-2">
                {project.role}
              </p>
              <p className="text-sm text-gray-300 mt-4">{project.summary}</p>
              <div className="mt-4 text-sm text-amber-300">{project.impact}</div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="liquid-chip px-3 py-1 rounded-full text-xs text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
