
import { useEffect, useRef } from "react";

const RAMP = " .:-=+*#%@";

type Point = { x: number; y: number };

export default function Koi({ opacity = 0.5 }: { opacity?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const CELL = window.innerWidth < 768 ? 18 : 14;
    const LINE = CELL * 1.6;

    const probe = document.createElement("span");
    probe.className = "text-standard-red";
    probe.style.display = "none";
    document.body.appendChild(probe);

    const red = getComputedStyle(probe).color || "#e8703a";
    document.body.removeChild(probe);

    let cols = 0;
    let rows = 0;
    let body = new Float32Array(0);
    let wake = new Float32Array(0);
    let raf = 0;
    let t = 0;
    let last = performance.now();
    let lastDraw = 0;
    let fishX = 0;
    let fishY = 0;
    let angle = 0;

    const white = "#fff0d8";

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `bold ${CELL}px monospace`;
      ctx.textBaseline = "top";

      cols = Math.ceil(window.innerWidth / CELL);
      rows = Math.ceil(window.innerHeight / LINE);

      body = new Float32Array(cols * rows);
      wake = new Float32Array(cols * rows);

      fishX = cols / 2;
      fishY = rows / 2;
    };

    const ellipse = (
      u: number,
      v: number,
      cx: number,
      cy: number,
      rx: number,
      ry: number
    ) => {
      const d = Math.sqrt(
        ((u - cx) / rx) ** 2 +
        ((v - cy) / ry) ** 2
      );

      return Math.max(0, Math.min(1, (1 - d) * 4));
    };

    const insidePolygon = (
      u: number,
      v: number,
      points: Point[]
    ) => {
      let inside = false;

      for (
        let i = 0, j = points.length - 1;
        i < points.length;
        j = i++
      ) {
        const a = points[i];
        const b = points[j];

        if (
          (a.y > v) !== (b.y > v) &&
          u <
            ((b.x - a.x) * (v - a.y)) /
              (b.y - a.y) +
              a.x
        ) {
          inside = !inside;
        }
      }

      return inside;
    };

    const shape = (u: number, v: number) => {
      const tailWag = Math.sin(t * 5) * 0.8;
      const flex = Math.sin(t * 5 - u * 0.45) *
        Math.max(0, -u) * 0.055;

      const y = v - flex;

      // Tapered body, from tail base to shoulders.
      const widthPoints = [
        [-7.0, 0.25],
        [-5.5, 1.05],
        [-3.5, 1.75],
        [-1.0, 2.35],
        [1.0, 2.55],
        [2.8, 2.15],
        [4.1, 1.55],
        [5.0, 0.8],
      ];

      let width = 0;

      for (let i = 0; i < widthPoints.length - 1; i++) {
        const [x1, w1] = widthPoints[i];
        const [x2, w2] = widthPoints[i + 1];

        if (u >= x1 && u <= x2) {
          const f = (u - x1) / (x2 - x1);
          width = w1 + (w2 - w1) * f;
          break;
        }
      }

      const bodyValue =
        width > 0
          ? Math.max(0, Math.min(1, (width - Math.abs(y)) * 3))
          : 0;

      // Rounded head and pointed snout.
      const head = ellipse(u, y, 4.1, 0, 1.65, 1.48);

      const snout = insidePolygon(u, y, [
        { x: 4.5, y: -0.95 },
        { x: 5.8, y: -0.48 },
        { x: 6.25, y: 0 },
        { x: 5.8, y: 0.48 },
        { x: 4.5, y: 0.95 },
      ]);

      // Pectoral fins, extending diagonally backward.
      const leftFin = insidePolygon(u, y, [
        { x: 1.7, y: -1.25 },
        { x: 1.1, y: -2.0 },
        { x: -0.3, y: -3.65 },
        { x: -0.1, y: -2.0 },
        { x: 0.4, y: -1.0 },
      ]);

      const rightFin = insidePolygon(u, y, [
        { x: 1.7, y: 1.25 },
        { x: 1.1, y: 2.0 },
        { x: -0.3, y: 3.65 },
        { x: -0.1, y: 2.0 },
        { x: 0.4, y: 1.0 },
      ]);

      // Forked tail with independently moving lobes.
      const tailTop = insidePolygon(u, y, [
        { x: -5.9, y: -0.45 },
        { x: -7.0, y: -1.0 + tailWag },
        { x: -9.3, y: -2.65 + tailWag },
        { x: -8.65, y: -0.35 + tailWag },
        { x: -7.6, y: 0.15 + tailWag },
      ]);

      const tailBottom = insidePolygon(u, y, [
        { x: -5.9, y: 0.45 },
        { x: -7.0, y: 1.0 + tailWag },
        { x: -9.3, y: 2.65 + tailWag },
        { x: -8.65, y: 0.35 + tailWag },
        { x: -7.6, y: -0.15 + tailWag },
      ]);

      const finMotion = Math.sin(t * 4) * 0.12;

      const fins =
        (leftFin || rightFin)
          ? Math.max(
              leftFin ? 0.8 + finMotion : 0,
              rightFin ? 0.8 - finMotion : 0
            )
          : 0;

      const value = Math.max(
        bodyValue,
        head,
        snout ? 0.95 : 0,
        fins,
        tailTop ? 0.8 : 0,
        tailBottom ? 0.8 : 0
      );

      // Red-orange patches characteristic of a kohaku koi.
      const markings =
        ellipse(u, y, 3.0, 0, 1.0, 1.05) > 0.1 ||
        ellipse(u, y, 0.9, 0, 0.8, 1.65) > 0.1 ||
        ellipse(u, y, -1.7, 0, 0.8, 1.35) > 0.1 ||
        ellipse(u, y, -4.0, 0, 0.75, 0.85) > 0.1;

      return { value, markings };
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);

      if (now - lastDraw < 33) return;

      lastDraw = now;

      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt;

      const oldX = fishX;
      const oldY = fishY;

      fishX =
        cols / 2 +
        Math.cos(t * 0.25) * cols * 0.3 +
        Math.sin(t * 0.65) * 2;

      fishY =
        rows / 2 +
        Math.sin(t * 0.35) * rows * 0.3;

      // Rotate toward the direction of travel.
      angle = Math.atan2(fishY - oldY, fishX - oldX);

      body.fill(0);

      for (let i = 0; i < wake.length; i++) {
        wake[i] *= 0.91;
      }

      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const reach = 13;

      for (
        let cy = Math.max(0, Math.floor(fishY - reach));
        cy <= Math.min(rows - 1, Math.ceil(fishY + reach));
        cy++
      ) {
        for (
          let cx = Math.max(0, Math.floor(fishX - reach));
          cx <= Math.min(cols - 1, Math.ceil(fishX + reach));
          cx++
        ) {
          const dx = (cx - fishX) * 0.6;
          const dy = cy - fishY;

          const u = dx * cos + dy * sin;
          const v = -dx * sin + dy * cos;

          const result = shape(u, v);
          const k = cy * cols + cx;

          if (result.value > body[k]) {
            body[k] = result.value;
          }

          if (u < -2 && result.value * 0.4 > wake[k]) {
            wake[k] = result.value * 0.4;
          }
        }
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Fading wake.
      ctx.shadowBlur = 0;
      ctx.fillStyle = red;
      ctx.globalAlpha = opacity * 0.28;

      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          const k = cy * cols + cx;

          if (body[k] > 0) continue;

          const idx = Math.min(
            RAMP.length - 1,
            (wake[k] * RAMP.length) | 0
          );

          if (idx > 0) {
            ctx.fillText(RAMP[idx], cx * CELL, cy * LINE);
          }
        }
      }

      // Defined body and markings.
      ctx.shadowColor = red;
      ctx.shadowBlur = 9;
      ctx.globalAlpha = opacity;

      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          const value = body[cy * cols + cx];

          if (value <= 0) continue;

          const dx = (cx - fishX) * 0.6;
          const dy = cy - fishY;

          const u = dx * cos + dy * sin;
          const v = -dx * sin + dy * cos;

          const result = shape(u, v);

          const idx = Math.min(
            RAMP.length - 1,
            Math.max(1, (value * RAMP.length) | 0)
          );

          ctx.fillStyle = result.markings ? red : white;

          ctx.fillText(
            RAMP[idx],
            cx * CELL,
            cy * LINE
          );
        }
      }

      // Dark eyes make the head easier to identify.
      ctx.shadowBlur = 0;
      ctx.fillStyle = red;

      const eyeU = 4.35;

      for (const side of [-1, 1]) {
        const eyeV = side * 0.92;

        const ex = fishX +
          (eyeU * cos - eyeV * sin) / 0.6;

        const ey = fishY +
          eyeU * sin +
          eyeV * cos;

        ctx.globalAlpha = opacity;
        ctx.fillText(
          "•",
          Math.round(ex) * CELL,
          Math.round(ey) * LINE
        );
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);

      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    resize();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [opacity]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
