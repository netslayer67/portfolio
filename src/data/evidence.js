import { Camera, Video } from 'lucide-react';

export const evidenceMenu = [
  { id: 'appreciation', label: 'Appreciation Letters' },
  { id: 'documents', label: 'Supporting Documents' },
  { id: 'media', label: 'Photo / Video' },
  { id: 'works', label: 'Original Works' },
];

export const appreciationLetters = [
  {
    title: 'Certificate of Appreciation',
    issuer: 'Head of Product Division',
    detail: 'Acknowledged for leading the semester-wide UX revamp.',
    proof: 'Appreciation Letter.pdf',
  },
  {
    title: 'Shoutout',
    issuer: 'Cross-Unit Leadership',
    detail: 'Recognized for outstanding collaboration and responsiveness.',
    proof: 'Leadership Shoutout Screenshot',
  },
  {
    title: 'Achievement Badge',
    issuer: 'Team Excellence Program',
    detail: 'Awarded for delivering high-impact UI outcomes.',
    proof: 'Achievement Badge Image',
  },
];

export const supportingDocuments = [
  {
    title: 'Recommendation Letter',
    detail: 'Mentor endorsement for leadership and craftsmanship.',
    type: 'PDF',
  },
  {
    title: 'Assignment Letter',
    detail: 'Formal PIC appointment for the semester event.',
    type: 'Doc',
  },
  {
    title: 'Project Report',
    detail: 'Summary of delivery metrics and improvements.',
    type: 'Report',
  },
  {
    title: 'Proposal & Plan',
    detail: 'Scope breakdown and delivery milestones.',
    type: 'Deck',
  },
];

export const mediaDocumentation = [
  {
    title: 'Workshop Documentation',
    detail: 'Photo set highlighting the training session.',
    type: 'Photo Set',
    icon: Camera,
  },
  {
    title: 'Cross-Unit Demo Day',
    detail: 'Video recap for internal presentation.',
    type: 'Video Recap',
    icon: Video,
  },
  {
    title: 'Classroom Implementation',
    detail: 'Photo and video proof of applied teaching.',
    type: 'Photo + Video',
    icon: Camera,
  },
];

export const originalWorks = [
  {
    title: 'Interactive Learning Module',
    description: 'Custom-built module that streamlines onboarding for new hires.',
    format: 'Learning Module',
    proof: 'Module Preview.pdf',
  },
  {
    title: 'Design System Playbook',
    description: 'Reusable component guidelines to ensure UI consistency.',
    format: 'Design Guide',
    proof: 'Playbook Deck',
  },
  {
    title: 'Performance Checklist',
    description: 'Optimization checklist used to align multiple teams.',
    format: 'Checklist',
    proof: 'Checklist Doc',
  },
];
