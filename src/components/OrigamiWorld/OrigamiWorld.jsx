import React, { useEffect, useRef } from 'react';
import {
  PaperBird,
  PaperPlane,
  PaperStar,
  PaperSun,
  PaperCloud,
  PaperTree,
  PaperRabbit,
  PaperFox,
  PaperRocket,
  PaperCart,
} from './PaperShapes';
import './OrigamiWorld.css';

// Cast kept deliberately small to stay calm/uncluttered behind content.
const ACTORS = [
  // sky
  { id: 'sun', Shape: PaperSun, axis: 'pin', top: 8, base: 80, size: 110, color: '#E0A33B', mode: 'spin', speed: 0.6, dir: 1 },
  { id: 'cloud-1', Shape: PaperCloud, axis: 'x', top: 5, base: 10, size: 90, color: '#CBD7E6', mode: 'sway', speed: 0.5, dir: 1, wrap: 140, bob: 6 },
  { id: 'cloud-2', Shape: PaperCloud, axis: 'x', top: 12, base: 55, size: 60, color: '#CBD7E6', mode: 'sway', speed: 0.35, dir: -1, wrap: 130, bob: 4 },
  { id: 'cloud-3', Shape: PaperCloud, axis: 'x', top: 15, base: 95, size: 75, color: '#CBD7E6', mode: 'sway', speed: 0.45, dir: 1, wrap: 150, bob: 5 },
  { id: 'bird-1', Shape: PaperBird, axis: 'x', top: 18, base: 0, size: 70, color: '#6E8FBE', mode: 'fly', speed: 1, dir: 1, wrap: 150, bob: 10, slant: -0.16 },
  { id: 'bird-2', Shape: PaperBird, axis: 'x', top: 26, base: 70, size: 46, color: '#9B7BB0', mode: 'fly', speed: 0.8, dir: -1, wrap: 150, bob: 8, slant: 0.14 },
  { id: 'star', Shape: PaperStar, axis: 'pin', top: 46, base: 14, size: 36, color: '#E0A33B', mode: 'spin', speed: 0.3, dir: 1 },
  { id: 'plane', Shape: PaperPlane, axis: 'x', top: 56, base: 100, size: 60, color: '#FBF7ED', mode: 'fly', speed: 0.6, dir: -1, wrap: 150, bob: 6, slant: 0 },

  // vertical
  { id: 'rocket', Shape: PaperRocket, axis: 'y', base: 50, size: 64, color: '#C2693F', speed: 1, dir: 1, wrap: 130, bob: 14 },

  // ground
  { id: 'tree-1', Shape: PaperTree, axis: 'pin', top: 78, base: 2, size: 110, color: '#6B8A5C', mode: 'sway', speed: 0.4 },
  { id: 'tree-2', Shape: PaperTree, axis: 'pin', top: 80, base: 12, size: 220, color: '#5E7E50', mode: 'sway', speed: 0.3 },
  { id: 'tree-3', Shape: PaperTree, axis: 'pin', top: 76, base: 24, size: 80, color: '#7E9A6E', mode: 'sway', speed: 0.5 },
  { id: 'tree-4', Shape: PaperTree, axis: 'pin', top: 79, base: 72, size: 150, color: '#6B8A5C', mode: 'sway', speed: 0.35 },
  { id: 'tree-5', Shape: PaperTree, axis: 'pin', top: 75, base: 84, size: 280, color: '#5E7E50', mode: 'sway', speed: 0.28 },
  { id: 'tree-6', Shape: PaperTree, axis: 'pin', top: 81, base: 95, size: 100, color: '#7E9A6E', mode: 'sway', speed: 0.45 },
  { id: 'fox', Shape: PaperFox, axis: 'x', top: 86, base: 20, size: 90, color: '#C2693F', mode: 'sway', speed: 0.7, dir: 1, wrap: 140, bob: 4 },
  { id: 'rabbit', Shape: PaperRabbit, axis: 'x', top: 88, base: 60, size: 60, color: '#D98E6E', mode: 'sway', speed: 0.9, dir: -1, wrap: 140, bob: 6 },
  { id: 'cart', Shape: PaperCart, axis: 'x', top: 84, base: 40, size: 110, color: '#84A07C', mode: 'roll', speed: 0.55, dir: -1, wrap: 150, bob: 0 },
];

export default function OrigamiWorld() {
  const layerRef = useRef(null);
  const actorRefs = useRef({});
  const moversCache = useRef({});

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let raf = null;
    let lastScrollY = window.scrollY;
    let vel = 0;
    let travel = 0;

    const tick = () => {
      const scrollY = window.scrollY;
      const dsy = scrollY - lastScrollY;
      lastScrollY = scrollY;
      vel += (dsy - vel) * 0.18;
      travel += vel;
      const activity = Math.min(1, Math.abs(vel) / 26);

      ACTORS.forEach((actor) => {
        const el = actorRefs.current[actor.id];
        if (!el) return;
        const { axis, base, speed = 1, dir = 1, wrap = 140, bob = 0, slant = 0 } = actor;
        let transform = '';

        if (axis === 'pin') {
          transform = `translate(${base}vw, 0)`;
        } else if (axis === 'y') {
          const raw = travel * 0.06 * speed * dir;
          const p = ((raw % wrap) + wrap) % wrap;
          const wob = Math.sin(travel * 0.02 * speed + base) * bob;
          transform = `translate(calc(${base}vw + ${wob.toFixed(2)}px), ${(-p).toFixed(2)}vh)`;
        } else {
          let x = base + ((travel * 0.06 * speed * dir) % wrap);
          if (x < -25) x += wrap;
          if (x > wrap) x -= wrap;
          const bobv = Math.sin(travel * 0.012 * speed + base) * bob;
          const drift = (x - base) * slant;
          transform = `translate(${x.toFixed(2)}vw, calc(${bobv.toFixed(2)}px + ${drift.toFixed(2)}vh)) rotate(${(slant * 6).toFixed(2)}deg)`;
        }
        el.style.transform = transform;

        if (!moversCache.current[actor.id]) {
          moversCache.current[actor.id] = Array.from(el.querySelectorAll('[data-mover]'));
        }
        moversCache.current[actor.id].forEach((mover) => {
          const type = mover.dataset.mover;
          let angle = 0;
          if (type === 'wing') {
            angle = Math.sin(travel * 0.09 * speed) * (4 + activity * 14);
          } else if (type === 'wheel') {
            angle = travel * 0.9 * speed * dir;
          } else if (type === 'spin') {
            angle = travel * 0.4 * speed * dir;
          } else if (type === 'sway') {
            angle = Math.sin(travel * 0.02 * speed + base) * (2 + activity * 9);
          }
          mover.style.transform = `rotate(${angle.toFixed(2)}deg)`;
        });
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="origami-world" ref={layerRef} aria-hidden="true">
      {ACTORS.map((actor) => {
        const { id, Shape, axis, top, size, color, mode } = actor;
        const positional = {
          position: 'absolute',
          left: 0,
          width: size,
          height: size,
          color,
          ...(axis === 'y' ? { bottom: 0 } : { top: `${top}%` }),
        };
        return (
          <div
            key={id}
            className="actor"
            ref={(node) => (actorRefs.current[id] = node)}
            style={positional}
          >
            {mode === 'sway' ? (
              <div data-mover="sway" style={{ transformOrigin: '50% 90%' }}>
                <Shape width="100%" height="100%" />
              </div>
            ) : (
              <Shape width="100%" height="100%" />
            )}
          </div>
        );
      })}
    </div>
  );
}
