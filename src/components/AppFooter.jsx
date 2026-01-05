import React from 'react';
import { profile } from '@/data/profile';

export default function AppFooter() {
  return (
    <footer className="relative z-10 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="liquid-panel rounded-3xl px-6 py-5 flex flex-col md:flex-row gap-3 md:items-center justify-between text-sm text-gray-300">
          <span>Portfolio of {profile.name}</span>
          <span>Designed for progress reporting and leadership review.</span>
        </div>
      </div>
    </footer>
  );
}
