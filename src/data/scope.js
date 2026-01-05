export const scopeMenu = [
  { id: 'scope-role', label: 'Employee Role' },
  { id: 'scope-cross', label: 'Cross-Unit Projects' },
  { id: 'scope-others', label: 'PIC / Others' },
  { id: 'scope-development', label: 'Personal Development' },
];

export const scopeOfWork = [
  {
    id: 'scope-role',
    title: 'Employee Role: Front-End Team',
    description:
      'Focused on core product UI delivery, daily coordination, and measurable outcomes tied to user experience.',
    tasks: [
      'Translate product requirements into UI flows and page layouts.',
      'Maintain design system consistency across releases.',
      'Optimize performance metrics and accessibility.',
    ],
    achievements: [
      'Delivered 4 production releases on schedule.',
      'Reduced UI rework by 30 percent through reusable components.',
      'Improved Lighthouse score from 88 to 96.',
    ],
    evidence: ['Role Description.pdf', 'Sprint Report Q1', 'Performance Review'],
  },
  {
    id: 'scope-cross',
    title: 'Cross-Unit Projects',
    description:
      'Collaborated with marketing, operations, and training teams for semester-wide initiatives.',
    tasks: [
      'Built landing pages for campaigns and recruitment.',
      'Created dashboards to support internal operations.',
      'Aligned visual language across multiple stakeholders.',
    ],
    achievements: [
      'Completed 3 cross-unit launches with zero regressions.',
      'Shortened delivery cycle by 20 percent.',
      'Received positive feedback from unit leads.',
    ],
    evidence: ['Cross-Unit Briefs', 'Launch Deck', 'Stakeholder Notes'],
  },
  {
    id: 'scope-others',
    title: 'Others / PIC Event',
    description:
      'Handled ad-hoc assignments and PIC responsibilities for events and internal initiatives.',
    tasks: [
      'Prepared event microsites and documentation.',
      'Managed timeline communications with multiple teams.',
      'Built visual recap materials for stakeholders.',
    ],
    achievements: [
      'Successfully coordinated 2 internal events.',
      'Produced recap assets within 48 hours after events.',
      'Maintained consistent brand tone across outputs.',
    ],
    evidence: ['Event Proposal', 'Recap Slides', 'PIC Task Letter'],
  },
  {
    id: 'scope-development',
    title: 'Personal Development',
    description:
      'Professional growth through workshops, seminars, and certifications aligned with role requirements.',
    tasks: [
      'Attend UX workshops and front-end bootcamps.',
      'Apply new learning to live projects.',
      'Share insights through team knowledge sessions.',
    ],
    achievements: [
      'Completed 3 professional training programs.',
      'Delivered a knowledge-sharing session for the team.',
      'Earned certificates with documented outcomes.',
    ],
    evidence: ['Training Certificate', 'Assignment Letter', 'Workshop Notes'],
  },
];
