import React, { useState } from 'react';
import { ArrowUpRight, Briefcase, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile, stats } from '@/data/profile';
import { useAosRefresh } from '@/hooks/useAos';

export default function HeroSection() {
  useAosRefresh();
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <section id="top" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
        <div data-aos="fade-right" className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-amber-200/80 liquid-chip px-4 py-2 rounded-full mx-auto lg:mx-0">
            <Sparkles className="w-4 h-4" />
            Portfolio Overview
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 leading-[1.2] pb-2 gradient-text">
            {profile.name}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mt-4">{profile.headline}</p>
          <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
            <Button
              className="bg-amber-500 text-black hover:bg-amber-400 shadow-[0_18px_40px_rgba(245,158,11,0.25)]"
              asChild
            >
              <a href="#projects">
                View Projects <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button className="liquid-chip text-white hover:text-white" asChild>
              <a href="#scope">Progress Summary</a>
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-8 sm:mt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="liquid-card rounded-2xl p-4 text-center lg:text-left">
                <p className="text-2xl font-semibold text-amber-300">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="relative liquid-card rounded-3xl p-6 max-w-md mx-auto lg:max-w-none">
            <div className="absolute top-4 left-4 right-4 px-4 py-2 text-[11px] sm:text-xs text-center glass-dark text-amber-100 rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.35)] leading-snug">
              Currently: {profile.currentRole}
            </div>
            <div className="rounded-2xl bg-slate-900/70 p-4">
              <button
                type="button"
                onClick={() => setIsPhotoOpen(true)}
                className="relative w-full h-[420px] flex items-center justify-center rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/60"
                aria-label="Open profile photo"
              >
                <img
                  src={profile.photo}
                  alt={`${profile.name} portrait`}
                  loading="lazy"
                  className="max-h-full w-auto object-contain rounded-xl"
                />
                <span className="absolute bottom-3 right-3 text-[11px] px-2 py-1 rounded-full bg-slate-950/70 text-amber-100/90 border border-white/10">
                  Tap to view
                </span>
              </button>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-300" />
                {profile.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300" />
                {profile.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300" />
                {profile.phone}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-300" />
                {profile.currentRole}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPhotoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsPhotoOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPhotoOpen(false)}
              className="absolute -top-10 right-0 text-xs uppercase tracking-[0.25em] text-amber-200/80"
            >
              Close
            </button>
            <div className="rounded-3xl bg-slate-950/80 p-4 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img
                src={profile.photo}
                alt={`${profile.name} portrait enlarged`}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
