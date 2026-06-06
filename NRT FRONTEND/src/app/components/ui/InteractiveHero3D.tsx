import React from 'react';

export function InteractiveHero3D() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none bg-transparent">
      {/* Animated Gradient Orbs for Premium Tech Feel */}
      <div 
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#3A5CCC]/30 rounded-full blur-[120px] animate-pulse" 
        style={{ animationDuration: '4s' }} 
      />
      <div 
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-[#14B8A6]/20 rounded-full blur-[100px] animate-pulse" 
        style={{ animationDuration: '6s', animationDelay: '1s' }} 
      />
      <div 
        className="absolute top-[40%] left-[60%] w-[25vw] h-[25vw] bg-[#8B5CF6]/20 rounded-full blur-[90px] animate-pulse" 
        style={{ animationDuration: '5s', animationDelay: '2s' }} 
      />
      
      {/* Tech Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
    </div>
  );
}
