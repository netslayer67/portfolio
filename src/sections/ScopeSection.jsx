import React, { useState } from 'react';
import { FolderOpen } from 'lucide-react';
import { scopeMenu, scopeOfWork } from '@/data/scope';
import { useAosRefresh } from '@/hooks/useAos';

export default function ScopeSection() {
  useAosRefresh();
  const [activeEvidence, setActiveEvidence] = useState(null);

  const openEvidence = (item) => {
    if (!item?.evidencePhotos?.length) {
      return;
    }
    setActiveEvidence(item);
  };

  const closeEvidence = () => {
    setActiveEvidence(null);
  };

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
          {scopeOfWork.map((item, index) => {
            const hasEvidence = Boolean(item.evidencePhotos?.length);
            return (
              <div
                key={item.id}
                id={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`liquid-card rounded-3xl p-6 scroll-mt-28 ${
                  hasEvidence ? 'cursor-pointer hover:-translate-y-1' : ''
                }`}
                role={hasEvidence ? 'button' : undefined}
                tabIndex={hasEvidence ? 0 : undefined}
                onClick={() => openEvidence(item)}
                onKeyDown={(event) => {
                  if (!hasEvidence) return;
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openEvidence(item);
                  }
                }}
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
                  {hasEvidence && (
                    <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-amber-200/70">
                      Tap to view proof photos
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {activeEvidence && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-sm"
          onClick={closeEvidence}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-4xl liquid-panel rounded-3xl p-6 max-h-[85vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
                Evidence Gallery
              </div>
              <button
                type="button"
                onClick={closeEvidence}
                className="text-xs uppercase tracking-[0.25em] text-amber-200/80"
              >
                Close
              </button>
            </div>
            <h3 className="text-xl font-semibold mt-3">{activeEvidence.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{activeEvidence.description}</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {activeEvidence.evidencePhotos.map((photo) => (
                <div key={photo.src + photo.label} className="liquid-card rounded-2xl p-3">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <p className="text-xs text-gray-300 mt-2">{photo.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
