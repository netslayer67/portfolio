import React from 'react';
import { FolderOpen } from 'lucide-react';
import { scopeMenu, scopeOfWork } from '@/data/scope';
import { useAosRefresh } from '@/hooks/useAos';

export default function ScopeSection() {
  useAosRefresh();

  return (
    <section id="scope" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <FolderOpen className="w-4 h-4" /> Scope of Work
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Scope of Work (As Employee)
        </h2>
        <p data-aos="fade-up" className="text-gray-300 mt-4 max-w-3xl">
          A structured view of responsibilities, achievements, and proof of work across one semester.
          Each section includes tasks, accomplishments, and supporting evidence.
        </p>
        <div className="mt-6 flex flex-wrap gap-3" data-aos="fade-up">
          {scopeMenu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="liquid-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] text-white/80"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 grid lg:grid-cols-2 gap-6">
          {scopeOfWork.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="liquid-card rounded-3xl p-6 scroll-mt-28"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-3">{item.description}</p>
              <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Tasks</p>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    {item.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Achievements</p>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Evidence</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.evidence.map((proof) => (
                    <span
                      key={proof}
                      className="liquid-chip px-3 py-1 rounded-full text-xs text-white/80"
                    >
                      {proof}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
