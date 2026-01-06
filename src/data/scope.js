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
    evidencePhotos: [
      { src: '/images/job1.jpg', label: 'Landing Page IntegralApp' },
      { src: '/images/job2.jpg', label: 'Check-in Method' },
      { src: '/images/job3.jpg', label: 'MTSS Dashboard' },
    ],
  },
  {
    id: 'scope-cross',
    title: 'Cross-Unit Projects',
    description:
      'Make the main website look fresher and migrate from using WordPress to Coding.',
    tasks: [
      'Creating a redesign and layout for the MWS landing page to make it look more modern and fresher.',
      'Created dashboards to support internal operations.',
      'Aligned visual language across multiple stakeholders.',
    ],
    achievements: [
      'Completed 3 cross-unit launches with zero regressions.',
      'Shortened delivery cycle by 20 percent.',
      'Received positive feedback from unit leads.',
    ],
    evidence: ['Cross-Unit Briefs', 'Launch Deck', 'Stakeholder Notes'],
    evidencePhotos: [
      { src: '/images/x1.jpg', label: 'MWS landing redesign' },
      { src: '/images/x2.jpg', label: 'New UI For Admission Application' },
    ],
  },
  // {
  //   id: 'scope-others',
  //   title: 'Others / Logistics Team',
  //   description:
  //     'Assist the team in event agenda and prepare logistical needs before and during the event',
  //   tasks: [
  //     'Preparing logistics for the PICs.',
  //     'Ensure all logistical needs are ready before and during the event.',
  //     'Carry out active coordination with fellow colleagues and the Operational Team.',
  //   ],
  //   achievements: [
  //     // 'Successfully coordinated 2 internal events.',
  //     // 'Produced recap assets within 48 hours after events.',
  //     // 'Maintained consistent brand tone across outputs.',
  //   ],
  //   evidence: [],
  //   evidencePhotos: [
  //     { src: '/images/evidence-1.svg', label: 'Event logistics prep' },
  //     { src: '/images/evidence-2.svg', label: 'On-site coordination' },
  //   ],
  // },
  {
    id: 'scope-development',
    title: 'Personal Development',
    description:
      'Professional growth through Responsive communication training taught by Tr.Abu',
    tasks: [
      'Learn the difference between reactive and responsive communication.',
      'Identify from a simple conversation and determine whether it is reactive or responsive communication.',
      'Share insights through team knowledge sessions.',
    ],
    achievements: [
      'Completed professional training programs.',
      'Delivered a knowledge-sharing session for the team.',
      'Earned certificates with documented outcomes.',
    ],
    evidence: ['Training Certificate', 'Assignment Letter', 'Workshop Notes'],
    evidencePhotos: [
      { src: '/images/evidence-3.svg', label: 'Training certificate' },
      { src: '/images/evidence-1.svg', label: 'Workshop documentation' },
    ],
  },
];
