import React from 'react';

/*
 * Low-poly "folded paper" SVG shapes. Each main facet uses currentColor so
 * color is set per-instance via the wrapping actor's CSS `color`. Darker
 * facets/fold-lines are baked in as black at low opacity to read as creases.
 * Elements tagged data-mover are individually transformed by the motion
 * engine in OrigamiWorld.jsx (wing flap, wheel spin, body spin/sway).
 */

const fold = { stroke: 'rgba(0,0,0,.22)', strokeWidth: 0.6, fill: 'none' };
const shade = { fill: 'rgba(0,0,0,.16)' };
const shadeDeep = { fill: 'rgba(0,0,0,.24)' };

export function PaperBird(props) {
  return (
    <svg viewBox="0 0 120 70" {...props}>
      <g data-mover="wing" data-side="left" style={{ transformOrigin: '58px 30px' }}>
        <polygon points="58,30 18,8 40,34 58,40" fill="currentColor" />
        <polygon points="58,30 40,34 50,42 58,40" style={shade} />
        <line x1="58" y1="30" x2="40" y2="34" {...fold} />
      </g>
      <g data-mover="wing" data-side="right" style={{ transformOrigin: '62px 30px' }}>
        <polygon points="62,30 102,8 80,34 62,40" fill="currentColor" />
        <polygon points="62,30 80,34 70,42 62,40" style={shade} />
        <line x1="62" y1="30" x2="80" y2="34" {...fold} />
      </g>
      <polygon points="60,18 68,40 60,52 52,40" fill="currentColor" />
      <polygon points="60,18 52,40 60,30" style={shadeDeep} />
      <polygon points="60,52 66,64 60,60 54,64" fill="currentColor" />
      <line x1="60" y1="18" x2="60" y2="52" {...fold} />
    </svg>
  );
}

export function PaperPlane(props) {
  return (
    <svg viewBox="0 0 100 60" {...props}>
      <polygon points="5,40 95,10 60,30" fill="currentColor" />
      <polygon points="5,40 60,30 40,52" fill="currentColor" />
      <polygon points="60,30 95,10 70,38" style={shade} />
      <line x1="5" y1="40" x2="60" y2="30" {...fold} />
      <line x1="60" y1="30" x2="40" y2="52" {...fold} />
    </svg>
  );
}

export function PaperBoat(props) {
  return (
    <svg viewBox="0 0 100 70" {...props}>
      <polygon points="10,55 90,55 70,68 30,68" fill="currentColor" />
      <polygon points="50,10 50,55 18,55" style={shade} />
      <polygon points="50,10 50,55 82,55" fill="currentColor" />
      <line x1="50" y1="10" x2="50" y2="55" {...fold} />
      <line x1="10" y1="55" x2="90" y2="55" {...fold} />
    </svg>
  );
}

export function PaperStar(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <g data-mover="spin" style={{ transformOrigin: '50px 50px' }}>
        <polygon
          points="50,4 61,38 96,38 67,59 78,94 50,72 22,94 33,59 4,38 39,38"
          fill="currentColor"
        />
        <polygon points="50,4 61,38 50,50" style={shade} />
        <polygon points="50,50 78,94 50,72" style={shade} />
        <line x1="50" y1="4" x2="50" y2="72" {...fold} />
      </g>
    </svg>
  );
}

export function PaperSun(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <g data-mover="spin" style={{ transformOrigin: '50px 50px' }}>
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 360) / 8;
          return (
            <polygon
              key={i}
              points="50,50 58,18 42,18"
              fill="currentColor"
              opacity={i % 2 === 0 ? 1 : 0.75}
              transform={`rotate(${a} 50 50)`}
            />
          );
        })}
        <polygon points="50,32 64,50 50,68 36,50" fill="currentColor" />
        <polygon points="50,32 64,50 50,50" style={shade} />
      </g>
    </svg>
  );
}

export function PaperMoon(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* Full-circle origami moon — octagonal facets */}
      <polygon points="50,8 79,21 92,50 79,79 50,92 21,79 8,50 21,21" fill="currentColor" />
      <polygon points="50,8 79,21 50,50 21,21" style={shade} />
      <polygon points="50,50 79,79 50,92 21,79" style={shadeDeep} />
      <polygon points="50,8 50,50 21,21" style={shadeDeep} />
      <line x1="50" y1="8" x2="50" y2="92" {...fold} />
      <line x1="21" y1="21" x2="79" y2="79" {...fold} />
      <line x1="79" y1="21" x2="21" y2="79" {...fold} />
      <line x1="8" y1="50" x2="92" y2="50" {...fold} />
    </svg>
  );
}

export function PaperCloud(props) {
  return (
    <svg viewBox="0 0 120 60" {...props}>
      <polygon points="10,50 25,28 45,30 55,14 75,20 90,32 110,40 100,52" fill="currentColor" />
      <polygon points="55,14 75,20 65,34 50,32" style={shade} />
      <line x1="25" y1="28" x2="45" y2="30" {...fold} />
      <line x1="75" y1="20" x2="90" y2="32" {...fold} />
    </svg>
  );
}

export function PaperTree(props) {
  return (
    <svg viewBox="0 0 80 160" {...props}>
      <polygon points="40,4 64,46 16,46" fill="currentColor" />
      <polygon points="40,4 40,46 16,46" style={shade} />
      <polygon points="40,32 70,80 10,80" fill="currentColor" />
      <polygon points="40,32 40,80 10,80" style={shade} />
      <polygon points="40,64 76,120 4,120" fill="currentColor" />
      <polygon points="40,64 40,120 4,120" style={shade} />
      <polygon points="33,118 47,118 47,156 33,156" fill="currentColor" opacity={0.85} />
      <line x1="40" y1="4" x2="40" y2="118" {...fold} />
    </svg>
  );
}

export function PaperRabbit(props) {
  return (
    <svg viewBox="0 0 90 80" {...props}>
      <polygon points="22,16 30,2 36,30" fill="currentColor" />
      <polygon points="40,16 48,2 52,30" fill="currentColor" />
      <polygon points="22,16 36,30 26,32" style={shade} />
      <polygon points="14,40 56,28 70,52 50,72 22,68" fill="currentColor" />
      <polygon points="14,40 56,28 50,50 22,46" style={shade} />
      <polygon points="58,58 70,52 66,64 56,66" fill="currentColor" opacity={0.85} />
    </svg>
  );
}

export function PaperFox(props) {
  return (
    <svg viewBox="0 0 100 80" {...props}>
      <polygon points="10,46 50,24 92,42 70,68 30,70" fill="currentColor" />
      <polygon points="10,46 50,24 46,52 18,58" style={shade} />
      <polygon points="80,30 92,42 70,40" fill="currentColor" />
      <polygon points="80,30 92,42 82,44" style={shadeDeep} />
      <polygon points="6,52 18,40 22,58" fill="currentColor" />
      <line x1="50" y1="24" x2="46" y2="52" {...fold} />
    </svg>
  );
}

export function PaperRocket(props) {
  return (
    <svg viewBox="0 0 60 120" {...props}>
      <polygon points="30,4 44,42 16,42" fill="currentColor" />
      <polygon points="30,4 30,42 16,42" style={shade} />
      <polygon points="16,42 44,42 40,90 20,90" fill="currentColor" />
      <polygon points="30,42 30,90 20,90" style={shade} />
      <polygon points="16,42 4,64 16,58" fill="currentColor" opacity={0.85} />
      <polygon points="44,42 56,64 44,58" fill="currentColor" opacity={0.85} />
      <polygon points="22,90 38,90 30,116 26,106" fill="currentColor" opacity={0.8} />
      <line x1="30" y1="4" x2="30" y2="90" {...fold} />
    </svg>
  );
}

/* Inline wheel centered at (cx, cy) — avoids nested-SVG viewport bugs */
function WheelG({ cx, cy }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <g data-mover="wheel" style={{ transformOrigin: '0px 0px' }}>
        <polygon
          points="0,-20.8 17.6,-10.4 17.6,10.4 0,20.8 -17.6,10.4 -17.6,-10.4"
          fill="currentColor"
        />
        <polygon points="0,-20.8 17.6,-10.4 0,0 -17.6,-10.4" style={shade} />
        <polygon points="0,0 17.6,10.4 0,20.8 -17.6,10.4" style={shadeDeep} />
        <line x1="0" y1="-20.8" x2="0" y2="20.8" {...fold} />
        <line x1="-17.6" y1="-10.4" x2="17.6" y2="10.4" {...fold} />
      </g>
    </g>
  );
}

export function HexWheel(props) {
  return (
    <svg viewBox="0 0 60 60" {...props}>
      <g data-mover="wheel" style={{ transformOrigin: '30px 30px' }}>
        <polygon
          points="30,4 52,17 52,43 30,56 8,43 8,17"
          fill="currentColor"
        />
        <polygon points="30,4 52,17 30,30 8,17" style={shade} />
        <polygon points="30,30 52,43 30,56 8,43" style={shadeDeep} />
        <line x1="30" y1="4" x2="30" y2="56" {...fold} />
        <line x1="8" y1="17" x2="52" y2="43" {...fold} />
      </g>
    </svg>
  );
}

export function PaperJeep(props) {
  return (
    <svg viewBox="0 0 175 90" {...props}>
      {/* Rear body */}
      <polygon points="8,24 26,24 26,66 8,66" fill="currentColor" />
      <polygon points="8,24 26,24 17,44 8,44" style={shade} />

      {/* Main cabin with flat roof */}
      <polygon points="26,14 106,14 106,66 26,66" fill="currentColor" />
      <polygon points="26,14 106,14 66,22 26,22" style={shade} />

      {/* Windshield — upright A-pillar */}
      <polygon points="106,14 120,20 120,44 106,44" fill="currentColor" />
      <polygon points="106,14 120,20 113,44 106,44" style={shadeDeep} />

      {/* Hood */}
      <polygon points="120,40 162,40 162,66 120,66" fill="currentColor" />
      <polygon points="120,40 162,40 141,52 120,52" style={shade} />

      {/* Front bumper */}
      <polygon points="160,46 167,50 167,66 160,66" fill="currentColor" opacity={0.8} />

      {/* Chassis rail */}
      <polygon points="8,62 162,62 162,66 8,66" fill="currentColor" opacity={0.9} />
      <polygon points="8,62 162,62 162,64 8,64" style={shade} />

      {/* Fold crease lines */}
      <line x1="26" y1="14" x2="106" y2="14" {...fold} />
      <line x1="106" y1="14" x2="120" y2="20" {...fold} />
      <line x1="120" y1="40" x2="162" y2="40" {...fold} />
      <line x1="26" y1="14" x2="26" y2="66" {...fold} />
      <line x1="8" y1="62" x2="162" y2="62" {...fold} />

      {/* Rear wheel — center (30,68), bottom 88.8 < 90 ✓ */}
      <WheelG cx={30} cy={68} />

      {/* Front wheel — center (142,68), right edge 159.6 < 175 ✓ */}
      <WheelG cx={142} cy={68} />
    </svg>
  );
}

export function PaperCart(props) {
  return (
    <svg viewBox="0 0 140 102" {...props}>
      <polygon points="20,40 80,40 95,55 95,75 20,75" fill="currentColor" />
      <polygon points="20,40 80,40 70,58 20,58" style={shade} />
      <polygon points="80,40 110,20 95,55" fill="currentColor" opacity={0.9} />
      <polygon points="80,40 110,20 95,40" style={shade} />
      <line x1="20" y1="40" x2="80" y2="40" {...fold} />
      <line x1="80" y1="40" x2="95" y2="55" {...fold} />
      {/* Rear wheel — center (54,79), bottom 99.8 < 102 ✓ */}
      <WheelG cx={54} cy={79} />
      {/* Front wheel — center (102,79), right edge 119.6 < 140 ✓ */}
      <WheelG cx={102} cy={79} />
    </svg>
  );
}
