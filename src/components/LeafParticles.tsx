"use client";

import { useEffect, useRef } from "react";

interface Leaf {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  type: number;
  opacity: number;
  baseOpacity: number;
  swaySpeed: number;
  swayAmplitude: number;
  swayOffset: number;
  phase: number;
}

interface SmokeWisp {
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;
  vy: number;
  vx: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  baseOpacity: number;
  phase: number;
  curlAmount: number;
}

interface DustMote {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  baseOpacity: number;
  phase: number;
}

interface LightRay {
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
  opacity: number;
  baseOpacity: number;
  phase: number;
  speed: number;
  drift: number;
}

export default function LeafParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const scrollVelocityRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const leaves: Leaf[] = [];
    const smoke: SmokeWisp[] = [];
    const dust: DustMote[] = [];
    const lightRays: LightRay[] = [];
    const maxLeaves = 45;
    const maxSmoke = 12;
    const maxDust = 12;
    const maxLightRays = 4;

    const colors = [
      "rgba(168, 207, 163, 0.4)",
      "rgba(201, 220, 198, 0.5)",
      "rgba(61, 90, 64, 0.15)",
      "rgba(217, 198, 165, 0.3)",
      "rgba(168, 207, 163, 0.25)",
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Scroll velocity tracking
    let lastScrollY = window.scrollY;
    let scrollTime = Date.now();

    const handleScroll = () => {
      const now = Date.now();
      const dt = Math.max(now - scrollTime, 16);
      const dy = window.scrollY - lastScrollY;
      scrollVelocityRef.current = dy / dt * 3;
      scrollVelocityRef.current = Math.min(Math.abs(scrollVelocityRef.current), 8);
      scrollTime = now;
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    for (let i = 0; i < maxLeaves; i++) {
      leaves.push(createLeaf(true));
    }

    for (let i = 0; i < maxSmoke; i++) {
      smoke.push(createSmoke(true));
    }

    for (let i = 0; i < maxDust; i++) {
      dust.push(createDust(true));
    }

    for (let i = 0; i < maxLightRays; i++) {
      lightRays.push(createLightRay(true));
    }

    function createLeaf(randomY = false): Leaf {
      const w = canvas?.width || window.innerWidth;
      const h = canvas?.height || window.innerHeight;
      const size = Math.random() * 14 + 8;
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : -20,
        vx: (Math.random() - 0.5) * 0.4,
        vy: Math.random() * 0.6 + 0.3,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.floor(Math.random() * 3),
        opacity: Math.random() * 0.35 + 0.15,
        baseOpacity: Math.random() * 0.35 + 0.15,
        swaySpeed: Math.random() * 0.01 + 0.003,
        swayAmplitude: Math.random() * 1.2 + 0.4,
        swayOffset: Math.random() * Math.PI * 2,
        phase: Math.random() * Math.PI * 2,
      };
    }

    function createSmoke(randomY = false): SmokeWisp {
      const w = canvas?.width || window.innerWidth;
      const h = canvas?.height || window.innerHeight;
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : h + 20,
        sizeX: Math.random() * 25 + 15,
        sizeY: Math.random() * 20 + 12,
        vy: -(Math.random() * 0.12 + 0.04),
        vx: (Math.random() - 0.5) * 0.06,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.003,
        opacity: Math.random() * 0.035 + 0.015,
        baseOpacity: Math.random() * 0.035 + 0.015,
        phase: Math.random() * Math.PI * 2,
        curlAmount: Math.random() * 0.3 + 0.15,
      };
    }

    function createDust(randomY = false): DustMote {
      const w = canvas?.width || window.innerWidth;
      const h = canvas?.height || window.innerHeight;
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : Math.random() * h * 0.5,
        size: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.04,
        opacity: Math.random() * 0.08 + 0.03,
        baseOpacity: Math.random() * 0.08 + 0.03,
        phase: Math.random() * Math.PI * 2,
      };
    }

    function createLightRay(randomY = false): LightRay {
      const w = canvas?.width || window.innerWidth;
      const h = canvas?.height || window.innerHeight;
      const width = Math.random() * 60 + 30;
      return {
        x: randomY ? Math.random() * w * 0.7 + w * 0.15 : w * 0.3,
        y: randomY ? Math.random() * h * 0.8 : -width,
        width,
        height: Math.random() * 150 + 120,
        angle: Math.random() * 15 + 5,
        opacity: Math.random() * 0.04 + 0.02,
        baseOpacity: Math.random() * 0.04 + 0.02,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.08 + 0.04,
        drift: (Math.random() - 0.5) * 0.15,
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const drawLeaf = (ctx: CanvasRenderingContext2D, leaf: Leaf) => {
      ctx.save();
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate(leaf.rotation);
      ctx.fillStyle = leaf.color;
      ctx.globalAlpha = leaf.opacity;

      const size = leaf.size;
      ctx.beginPath();

      if (leaf.type === 0) {
        ctx.moveTo(0, -size);
        ctx.bezierCurveTo(size * 0.75, -size * 0.6, size * 0.75, size * 0.6, 0, size);
        ctx.bezierCurveTo(-size * 0.75, size * 0.6, -size * 0.75, -size * 0.6, 0, -size);
      } else if (leaf.type === 1) {
        ctx.moveTo(0, -size * 1.2);
        ctx.quadraticCurveTo(size * 0.45, -size * 0.4, size * 0.25, 0);
        ctx.quadraticCurveTo(size * 0.55, size * 0.5, 0, size * 1.2);
        ctx.quadraticCurveTo(-size * 0.55, size * 0.5, -size * 0.25, 0);
        ctx.quadraticCurveTo(-size * 0.45, -size * 0.4, 0, -size * 1.2);
      } else {
        ctx.moveTo(0, -size * 0.7);
        ctx.quadraticCurveTo(size * 0.4, -size * 0.25, 0, size * 0.7);
        ctx.quadraticCurveTo(-size * 0.4, -size * 0.25, 0, -size * 0.7);
      }

      ctx.fill();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, size);
      ctx.lineTo(0, -size * 0.7);
      ctx.stroke();

      ctx.restore();
    };

    const drawSmoke = (ctx: CanvasRenderingContext2D, wisp: SmokeWisp) => {
      ctx.save();
      ctx.translate(wisp.x, wisp.y);
      ctx.rotate(wisp.rotation);
      ctx.globalAlpha = wisp.opacity;

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, wisp.sizeX);
      gradient.addColorStop(0, "rgba(217, 198, 165, 0.6)");
      gradient.addColorStop(0.4, "rgba(201, 220, 198, 0.3)");
      gradient.addColorStop(1, "rgba(217, 198, 165, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, wisp.sizeX, wisp.sizeY, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const drawDust = (ctx: CanvasRenderingContext2D, mote: DustMote) => {
      ctx.save();
      ctx.globalAlpha = mote.opacity;
      ctx.fillStyle = "rgba(217, 198, 165, 0.9)";
      ctx.beginPath();
      ctx.arc(mote.x, mote.y, mote.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawLightRay = (ctx: CanvasRenderingContext2D, ray: LightRay) => {
      ctx.save();
      ctx.globalAlpha = ray.opacity;
      ctx.translate(ray.x, ray.y);
      ctx.rotate((ray.angle * Math.PI) / 180);

      const gradient = ctx.createLinearGradient(0, 0, 0, ray.height);
      gradient.addColorStop(0, "rgba(248, 250, 246, 0)");
      gradient.addColorStop(0.2, "rgba(217, 198, 165, 0.15)");
      gradient.addColorStop(0.5, "rgba(201, 220, 198, 0.1)");
      gradient.addColorStop(1, "rgba(248, 250, 246, 0)");
      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.moveTo(-ray.width / 2, 0);
      ctx.lineTo(ray.width / 2, 0);
      ctx.lineTo(ray.width / 2 + ray.height * 0.08, ray.height);
      ctx.lineTo(-ray.width / 2 - ray.height * 0.08, ray.height);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const scrollBoost = 1 + scrollVelocityRef.current * 0.03;
      const time = Date.now() * 0.001;

      leaves.forEach((leaf, idx) => {
        leaf.phase += 0.002;
        leaf.swayOffset += leaf.swaySpeed;
        const sway = Math.sin(leaf.swayOffset) * leaf.swayAmplitude * 0.15;
        const breathPulse = 0.7 + 0.3 * Math.sin(time * 0.3 + leaf.phase);
        leaf.opacity = leaf.baseOpacity * breathPulse;

        if (mouse.active) {
          const dx = leaf.x - mouse.x;
          const dy = leaf.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceRadius = 130;

          if (distance < forceRadius) {
            const force = (forceRadius - distance) / forceRadius;
            const angle = Math.atan2(dy, dx);
            const pushX = Math.cos(angle) * force * 1.8;
            const pushY = Math.sin(angle) * force * 1.8;

            leaf.vx += pushX;
            leaf.vy += pushY;
            leaf.rotationSpeed += (Math.random() - 0.5) * 0.04 * force;
          }
        }

        leaf.x += leaf.vx + sway;
        leaf.y += leaf.vy * scrollBoost;
        leaf.rotation += leaf.rotationSpeed;

        leaf.vx *= 0.94;
        leaf.vy = leaf.vy * 0.94 + 0.06 * (0.35 + Math.random() * 0.25);
        leaf.rotationSpeed *= 0.97;

        if (leaf.y > canvas.height + 20) {
          leaves[idx] = createLeaf(false);
        }
        if (leaf.x < -30) {
          leaf.x = canvas.width + 20;
        } else if (leaf.x > canvas.width + 30) {
          leaf.x = -20;
        }

        drawLeaf(ctx, leaf);
      });

      smoke.forEach((wisp, idx) => {
        wisp.phase += 0.004;
        wisp.rotation += wisp.rotationSpeed;
        const curl = Math.sin(wisp.phase) * wisp.curlAmount;
        const breathPulse = 0.8 + 0.2 * Math.sin(time * 0.2 + wisp.phase);
        wisp.opacity = wisp.baseOpacity * breathPulse;

        wisp.x += wisp.vx + curl;
        wisp.y += wisp.vy;
        wisp.sizeX += 0.02;
        wisp.sizeY += 0.01;

        wisp.vx += (Math.random() - 0.5) * 0.01;

        if (wisp.y < -60) {
          smoke[idx] = createSmoke(false);
        }
        if (wisp.x < -50) wisp.x = canvas.width + 30;
        if (wisp.x > canvas.width + 50) wisp.x = -30;

        drawSmoke(ctx, wisp);
      });

      dust.forEach((mote) => {
        mote.phase += 0.006;
        const breathPulse = 0.75 + 0.25 * Math.sin(time * 0.4 + mote.phase);
        mote.opacity = mote.baseOpacity * breathPulse;

        if (mouse.active) {
          const dx = mote.x - mouse.x;
          const dy = mote.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (200 - dist) / 200;
            const angle = Math.atan2(dy, dx);
            mote.vx += Math.cos(angle) * force * 0.08;
            mote.vy += Math.sin(angle) * force * 0.08;
          }
        }

        mote.vx *= 0.98;
        mote.vy *= 0.98;
        mote.x += mote.vx + Math.sin(mote.phase) * 0.05;
        mote.y += mote.vy + Math.cos(mote.phase * 0.7) * 0.03;

        if (mote.x < -10) mote.x = canvas.width + 10;
        if (mote.x > canvas.width + 10) mote.x = -10;
        if (mote.y < -10) mote.y = canvas.height + 10;
        if (mote.y > canvas.height + 10) mote.y = -10;

        drawDust(ctx, mote);
      });

      lightRays.forEach((ray, idx) => {
        ray.phase += ray.speed;
        ray.opacity = ray.baseOpacity * (0.6 + 0.4 * Math.sin(ray.phase));

        ray.x += ray.drift + Math.sin(ray.phase * 0.3) * 0.1;
        ray.y += 0.1;

        if (ray.y > canvas.height + ray.height) {
          lightRays[idx] = createLightRay(false);
          lightRays[idx].y = -ray.height;
        }

        drawLightRay(ctx, ray);
      });

      scrollVelocityRef.current *= 0.92;

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    updateAndDraw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
