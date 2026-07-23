"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export function ParticleNetwork() {
  return (
    <ParticlesProvider init={loadFull}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-auto"
      options={{
        fullScreen: { enable: false, zIndex: 0 },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Grabs particles nearby with a line when hovering
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.6,
                color: "#00E5FF",
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#00E5FF", "#FFFFFF"], // Mix of cyan and white particles
          },
          links: {
            color: "#00E5FF",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
            triangles: {
                enable: true,
                opacity: 0.05
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", // Particles bounce off the edges
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080
            },
            value: 120,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
                enable: true,
                speed: 1,
                sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
    />
    </ParticlesProvider>
  );
}
