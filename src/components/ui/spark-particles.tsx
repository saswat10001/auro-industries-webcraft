import React from 'react';

interface SparkParticlesProps {
  count?: number;
}

const SparkParticles: React.FC<SparkParticlesProps> = ({ count = 20 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${1.5 + Math.random() * 2}s`,
    size: `${2 + Math.random() * 4}px`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full animate-spark"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            background: `radial-gradient(circle, rgba(255, 180, 50, 1) 0%, rgba(255, 100, 0, 0.8) 50%, transparent 100%)`,
            boxShadow: `0 0 6px 2px rgba(255, 150, 50, 0.8), 0 0 12px 4px rgba(255, 100, 0, 0.4)`,
          }}
        />
      ))}
      {/* Glow effect around edges */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(255, 150, 50, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 100, 0, 0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 90%, rgba(255, 180, 50, 0.12) 0%, transparent 45%)
          `,
        }}
      />
    </div>
  );
};

export default SparkParticles;
