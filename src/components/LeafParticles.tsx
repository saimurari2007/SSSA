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
  type: number; // 0: tulsi, 1: neem, 2: small petal
  opacity: number;
  swaySpeed: number;
  swayAmplitude: number;
  swayOffset: number;
}

export default function LeafParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let leaves: Leaf[] = [];
    const maxLeaves = 30; // Clean, non-cluttered minimal design
    
    // Premium soft colors
    const colors = [
      "rgba(168, 207, 163, 0.4)", // Soft Herbal Green
      "rgba(201, 220, 198, 0.5)", // Sage Green
      "rgba(61, 90, 64, 0.15)",   // Forest Green
      "rgba(217, 198, 165, 0.3)",  // Muted Gold
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Initialize leaves
    for (let i = 0; i < maxLeaves; i++) {
      leaves.push(createLeaf(true));
    }

    function createLeaf(randomY = false): Leaf {
      const size = Math.random() * 14 + 8; // 8px to 22px
      return {
        x: Math.random() * (canvas?.width || window.innerWidth),
        y: randomY ? Math.random() * (canvas?.height || window.innerHeight) : -20,
        vx: (Math.random() - 0.5) * 0.4,
        vy: Math.random() * 0.6 + 0.3,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.floor(Math.random() * 3),
        opacity: Math.random() * 0.4 + 0.3, // Subtle transparency
        swaySpeed: Math.random() * 0.01 + 0.003,
        swayAmplitude: Math.random() * 1.2 + 0.4,
        swayOffset: Math.random() * Math.PI * 2,
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
        // Tulsi (rounded broad leaf)
        ctx.moveTo(0, -size);
        ctx.bezierCurveTo(size * 0.75, -size * 0.6, size * 0.75, size * 0.6, 0, size);
        ctx.bezierCurveTo(-size * 0.75, size * 0.6, -size * 0.75, -size * 0.6, 0, -size);
      } else if (leaf.type === 1) {
        // Neem (narrow curved leaf with a tapered stem)
        ctx.moveTo(0, -size * 1.2);
        ctx.quadraticCurveTo(size * 0.45, -size * 0.4, size * 0.25, 0);
        ctx.quadraticCurveTo(size * 0.55, size * 0.5, 0, size * 1.2);
        ctx.quadraticCurveTo(-size * 0.55, size * 0.5, -size * 0.25, 0);
        ctx.quadraticCurveTo(-size * 0.45, -size * 0.4, 0, -size * 1.2);
      } else {
        // Small organic petal
        ctx.moveTo(0, -size * 0.7);
        ctx.quadraticCurveTo(size * 0.4, -size * 0.25, 0, size * 0.7);
        ctx.quadraticCurveTo(-size * 0.4, -size * 0.25, 0, -size * 0.7);
      }

      ctx.fill();
      
      // Draw subtle leaf vein
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, size);
      ctx.lineTo(0, -size * 0.7);
      ctx.stroke();

      ctx.restore();
    };

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      leaves.forEach((leaf, idx) => {
        // Calculate sway path
        leaf.swayOffset += leaf.swaySpeed;
        const sway = Math.sin(leaf.swayOffset) * leaf.swayAmplitude * 0.15;

        // Apply mouse repelling force if mouse is on screen
        if (mouse.active) {
          const dx = leaf.x - mouse.x;
          const dy = leaf.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceRadius = 130;

          if (distance < forceRadius) {
            const force = (forceRadius - distance) / forceRadius; // 0 to 1
            const angle = Math.atan2(dy, dx);
            const pushX = Math.cos(angle) * force * 1.8;
            const pushY = Math.sin(angle) * force * 1.8;

            leaf.vx += pushX;
            leaf.vy += pushY;
            leaf.rotationSpeed += (Math.random() - 0.5) * 0.04 * force;
          }
        }

        // Move leaves
        leaf.x += leaf.vx + sway;
        leaf.y += leaf.vy;
        leaf.rotation += leaf.rotationSpeed;

        // Slowly decay velocities back to standard gentle drift
        leaf.vx *= 0.94;
        leaf.vy = leaf.vy * 0.94 + 0.06 * (0.35 + Math.random() * 0.25);
        leaf.rotationSpeed *= 0.97;

        // Boundaries check and wrapping/reset
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

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    updateAndDraw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
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
