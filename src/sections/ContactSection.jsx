import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';
import { useAosRefresh } from '@/hooks/useAos';

export default function ContactSection() {
  useAosRefresh();

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 sm:pt-24 sm:pb-12">
        <div data-aos="fade-up" className="flex items-center gap-3 text-amber-300 text-sm font-semibold uppercase tracking-[0.25em]">
          <Mail className="w-4 h-4" /> Contact
        </div>
        <h2 data-aos="fade-up" className="text-3xl font-bold mt-4 gradient-text">
          Progress Communication Channel
        </h2>
        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-6">
          <div data-aos="fade-up" className="liquid-card rounded-3xl p-6">
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-lg font-semibold mt-2">{profile.email}</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="liquid-card rounded-3xl p-6">
            <p className="text-sm text-gray-400">Phone</p>
            <p className="text-lg font-semibold mt-2">{profile.phone}</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="liquid-card rounded-3xl p-6">
            <p className="text-sm text-gray-400">Location</p>
            <p className="text-lg font-semibold mt-2">{profile.location}</p>
          </div>
        </div>
        <div data-aos="fade-up" className="mt-8 sm:mt-10">
          <Button className="bg-amber-500 text-black hover:bg-amber-400 shadow-[0_18px_40px_rgba(245,158,11,0.25)]" asChild>
            <a href={`mailto:${profile.email}`}>
              Send Update <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
