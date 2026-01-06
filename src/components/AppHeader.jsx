import React, { useState } from 'react';
import { Coffee, Home, LayoutGrid, Target, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'interests', label: 'Interests' },
  { id: 'projects', label: 'Projects' },
  { id: 'scope', label: 'Scope' },
  // { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Development' },
  // { id: 'evidence', label: 'Evidence' },
  { id: 'contact', label: 'Contact' },
];

export default function AppHeader({ name }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const quickNav = [
    { id: 'top', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: LayoutGrid },
    { id: 'scope', label: 'Scope', icon: Target },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <div className="liquid-panel rounded-2xl px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <a href="#top" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Portfolio</p>
                  <h1 className="text-lg font-semibold text-white">{name}</h1>
                </div>
              </a>

              <nav className="hidden lg:flex flex-wrap items-center justify-end gap-2 text-sm text-gray-300">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4">
        <div className="liquid-panel rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between gap-2">
            {quickNav.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex flex-col items-center gap-1 text-xs text-gray-300 hover:text-white"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-amber-200" />
                  </span>
                  {item.label}
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col items-center gap-1 text-xs text-gray-300 hover:text-white"
              aria-label="Open menu"
            >
              <span className="w-10 h-10 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                <Menu className="w-5 h-5 text-amber-200" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-md mx-4 mb-6 liquid-panel rounded-3xl p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Navigation</div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
