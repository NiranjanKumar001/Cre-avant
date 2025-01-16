'use client';

import dynamic from 'next/dynamic'

const CursorParticles = dynamic(() => import('./CursorParticles'), {
  ssr: false,
})

export default function CursorWrapper() {
  return <CursorParticles />;
}