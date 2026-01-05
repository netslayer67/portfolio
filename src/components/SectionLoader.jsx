import React, { Suspense } from 'react';

export default function SectionLoader({ Component }) {
  return (
    <Suspense fallback={<div className="section-loading" aria-hidden="true" />}>
      <Component />
    </Suspense>
  );
}
