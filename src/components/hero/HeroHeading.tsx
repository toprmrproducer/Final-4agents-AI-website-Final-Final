import React from 'react';

export function HeroHeading() {
  return (
    <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
      Your Business Needs{' '}
      <span className="bg-gradient-to-r from-neon-pink to-neon-blue text-transparent bg-clip-text animate-gradient-x">
        AI
      </span>
      .
      <br />
      <span className="text-neon-pink">Or It Will Fail.</span>
    </h1>
  );
}