import React from 'react';
import { Container } from '../ui/Container';
import { Hero3D } from './Hero3D';
import { HeroBackground } from './HeroBackground';
import { HeroHeading } from './HeroHeading';
import { QuoteDisplay } from './QuoteDisplay';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <HeroBackground />
      
      <Container className="relative pt-32">
        <div className="flex flex-col items-center text-center">
          <HeroHeading />
          
          <div className="w-full h-[500px] relative my-12">
            <Hero3D />
          </div>
          
          <QuoteDisplay />
        </div>
      </Container>
    </div>
  );
}