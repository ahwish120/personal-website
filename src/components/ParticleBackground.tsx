import { useCallback } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        className="fixed inset-0 -z-10"
        options={{
          fullScreen: false,
          background: {
            color: 'transparent',
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
              },
            },
            color: {
              value: ['#00d4ff', '#7b2ff7', '#ff2d95'],
            },
            links: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.06,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              random: true,
              straight: false,
              outModes: {
                default: 'bounce',
              },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            shape: {
              type: 'circle',
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
            },
            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.15,
                  color: '#00d4ff',
                },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
