import { useEffect, useRef } from "react";
import fallbackImage from "../../images/generative-bg1.jpg";
import styles from "./ProceduralBackdrop.module.css";

const MAX_RENDER_PIXELS = 1500000;
const TARGET_FRAME_RATE = 24;

/*
 * PAGE PRESETS
 *
 * intensity:   Motif opacity. 0 hides motifs; 1 shows their full color.
 * scale:       Number of pattern rows. Lower = larger cells.
 * seed:        Generates a different deterministic composition.
 * speed:       Animation multiplier. 0 freezes the sketch.
 * quietness:   Mixes motif colors toward sand. 0 = vivid; 1 = neutral.
 * washOpacity: CSS cream layer above the canvas. 0 = clear; 1 = hidden.
 *
 * These values are regular JavaScript now. Saving this file restarts the
 * current p5 instance immediately through React Fast Refresh.
 */
const presets = {
  home: {
    intensity: 0.82,
    quietness: 0.2,
    scale: 6.5,
    seed: 91,
    speed: 0.45,
    washOpacity: 0.66,
  },
  talks: {
    intensity: 0.72,
    quietness: 0.45,
    scale: 8,
    seed: 38,
    speed: 1.35,
    washOpacity: 0.7,
  },
  projects: {
    intensity: 0.86,
    quietness: 0.15,
    scale: 12,
    seed: 1,
    speed: 1.55,
    washOpacity: 0.63,
  },
  about: {
    intensity: 0.82,
    quietness: 0.2,
    scale: 6.5,
    seed: 91,
    speed: 0.45,
    washOpacity: 0.66,
  },
  projectDetail: {
    intensity: 0.72,
    quietness: 0.35,
    scale: 5.5,
    seed: 120,
    speed: 0.4,
    washOpacity: 0.72,
  },
};

/*
 * PATTERN PALETTE
 *
 * Edit these as normal CSS hex colors. The p5 sketch converts them into
 * p5.Color objects when it starts.
 */
const COLORS = {
  cream: "#f6eddb",
  ink: "#0e0f10",
  mustard: "#d19e45",
  rust: "#ac3326",
  sand: "#eae2d0",
  teal: "#0091a1",
};

// A deterministic replacement for random(). The same cell and seed always
// produce the same value, so the composition does not flicker between frames.
const hash2 = (x, y, seed = 0) => {
  const value = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453;
  return value - Math.floor(value);
};

const drawMotif = (p, kind, size, paperColor) => {
  const half = size / 2;

  switch (kind) {
    case 0:
      // Circle
      p.circle(0, 0, size * 0.68);
      break;

    case 1:
      // Quarter ring. The cell clip turns these offset circles into a corner.
      p.circle(-half, -half, size * 1.84);
      p.fill(paperColor);
      p.circle(-half, -half, size * 1.04);
      break;

    case 2:
      // Diagonal half-cell
      p.triangle(-half, -half, half, half, -half, half);
      break;

    case 3:
      // Horizontal bar
      p.rect(0, 0, size * 0.68, size * 0.22);
      break;

    case 4:
      // Printed stripes
      for (let stripe = -3; stripe <= 3; stripe += 1) {
        p.rect(stripe * size * 0.12, 0, size * 0.055, size * 0.74);
      }
      break;

    case 5:
      // Dot matrix
      for (let row = -1.5; row <= 1.5; row += 1) {
        for (let column = -1.5; column <= 1.5; column += 1) {
          p.circle(column * size * 0.2, row * size * 0.2, size * 0.075);
        }
      }
      break;

    case 6:
      // Arch with a paper-colored opening
      p.circle(0, -size * 0.08, size * 0.56);
      p.rect(0, size * 0.12, size * 0.56, size * 0.4);
      p.fill(paperColor);
      p.circle(0, -size * 0.02, size * 0.2);
      p.rect(0, size * 0.13, size * 0.2, size * 0.3);
      break;

    default:
      // Square frame
      p.rect(0, 0, size * 0.72, size * 0.72);
      p.fill(paperColor);
      p.rect(0, 0, size * 0.46, size * 0.46);
      break;
  }
};

const createPatternSketch = ({ host, preset, reducedMotion, canvasClassName }) => (p) => {
  const palette = [
    COLORS.ink,
    COLORS.rust,
    COLORS.teal,
    COLORS.mustard,
    COLORS.sand,
  ];

  let renderer;
  let resizeSketch = () => {};

  const drawCell = ({ column, row, x, y, cellSize, time }) => {
    const tileTone = hash2(column, row, preset.seed + 73);
    const paperColor = p.lerpColor(
      p.color(COLORS.cream),
      p.color(COLORS.sand),
      tileTone * 0.55,
    );

    p.noStroke();
    p.fill(paperColor);
    p.rectMode(p.CORNER);
    p.rect(x, y, cellSize + 1, cellSize + 1);

    const motifIndex = Math.floor(hash2(column, row, preset.seed + 17) * 8);
    const paletteIndex = Math.floor(
      hash2(column, row, preset.seed + 41) * palette.length,
    );
    const motifColor = p.lerpColor(
      p.color(palette[paletteIndex]),
      p.color(COLORS.sand),
      preset.quietness,
    );
    motifColor.setAlpha(255 * preset.intensity);

    const phase = hash2(column, row, preset.seed) * p.TWO_PI;
    const quarterTurn =
      Math.floor(hash2(column, row, preset.seed + 29) * 4) * p.HALF_PI;
    const movement = Math.sin(time * 0.16 + phase) * 0.055;

    // Clip every motif to its cell, matching the shader's modular tile logic.
    const context = p.drawingContext;
    context.save();
    context.beginPath();
    context.rect(x, y, cellSize, cellSize);
    context.clip();

    p.push();
    p.translate(x + cellSize / 2, y + cellSize / 2);
    p.rotate(quarterTurn + movement);
    p.rectMode(p.CENTER);
    p.ellipseMode(p.CENTER);
    p.fill(motifColor);
    drawMotif(p, motifIndex, cellSize, paperColor);
    p.pop();

    context.restore();
  };

  p.setup = () => {
    renderer = p.createCanvas(1, 1);
    renderer.addClass(canvasClassName);
    renderer.elt.setAttribute("aria-hidden", "true");
    renderer.elt.style.width = "100%";
    renderer.elt.style.height = "100%";

    p.pixelDensity(1);
    p.frameRate(TARGET_FRAME_RATE);
    p.noStroke();

    resizeSketch = () => {
      const bounds = host.getBoundingClientRect();
      const cssWidth = Math.max(1, Math.round(bounds.width));
      const cssHeight = Math.max(1, Math.round(bounds.height));
      const renderRatio = Math.min(
        1,
        Math.sqrt(MAX_RENDER_PIXELS / (cssWidth * cssHeight)),
      );
      const renderWidth = Math.max(1, Math.round(cssWidth * renderRatio));
      const renderHeight = Math.max(1, Math.round(cssHeight * renderRatio));

      if (p.width !== renderWidth || p.height !== renderHeight) {
        p.resizeCanvas(renderWidth, renderHeight, false);
        renderer.elt.style.width = "100%";
        renderer.elt.style.height = "100%";
      }

      if (reducedMotion.matches) p.redraw();
    };

    resizeSketch();
    if (reducedMotion.matches) p.noLoop();
  };

  p.draw = () => {
    p.background(COLORS.cream);

    const time = reducedMotion.matches ? 0 : (p.millis() / 1000) * preset.speed;
    const cellSize = Math.max(1, p.height / preset.scale);

    // Drift is measured in cells, so animation speed remains consistent after
    // responsive resizing and across pages with different canvas heights.
    const driftX = time * 0.018;
    const driftY = Math.sin(time * 0.09) * 0.08;
    const firstColumn = Math.floor(driftX) - 1;
    const lastColumn = Math.ceil(p.width / cellSize + driftX) + 1;
    const firstRow = Math.floor(driftY) - 1;
    const lastRow = Math.ceil(p.height / cellSize + driftY) + 1;

    for (let row = firstRow; row <= lastRow; row += 1) {
      for (let column = firstColumn; column <= lastColumn; column += 1) {
        drawCell({
          column,
          row,
          x: (column - driftX) * cellSize,
          y: (row - driftY) * cellSize,
          cellSize,
          time,
        });
      }
    }
  };

  p.resizePattern = () => resizeSketch();
};

const ProceduralBackdrop = ({ variant = "home" }) => {
  const hostRef = useRef(null);
  const preset = presets[variant] ?? presets.home;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false;
    let instance;
    let resizeObserver;
    let updatePlayback;

    const startSketch = async () => {
      const { default: P5 } = await import("p5");
      if (cancelled) return;

      instance = new P5(
        createPatternSketch({
          host,
          preset,
          reducedMotion,
          canvasClassName: styles.canvas,
        }),
        host,
      );

      updatePlayback = () => {
        if (reducedMotion.matches || document.hidden) {
          instance.noLoop();
          instance.redraw();
        } else {
          instance.loop();
        }
      };

      resizeObserver = new ResizeObserver(() => instance.resizePattern());
      resizeObserver.observe(host);
      reducedMotion.addEventListener("change", updatePlayback);
      document.addEventListener("visibilitychange", updatePlayback);
    };

    startSketch().catch((error) => {
      console.error("Unable to start the p5 pattern backdrop.", error);
    });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();

      if (updatePlayback) {
        reducedMotion.removeEventListener("change", updatePlayback);
        document.removeEventListener("visibilitychange", updatePlayback);
      }

      instance?.remove();
    };
  }, [preset]);

  return (
    <div
      ref={hostRef}
      className={styles.backdrop}
      data-pattern-variant={variant}
      style={{
        "--pattern-fallback": `url("${fallbackImage}")`,
        "--pattern-wash-opacity": preset.washOpacity,
      }}
      aria-hidden="true"
    >
      <div className={styles.wash} />
    </div>
  );
};

export default ProceduralBackdrop;
