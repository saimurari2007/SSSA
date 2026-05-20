"use client";

import { useEffect, useRef, useState } from "react";

interface ClickParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  opacity: number;
}

export default function LeafCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<ClickParticle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorAngle = useRef(0);
  const particleIdCounter = useRef(0);

  useEffect(() => {
    // Only enable custom cursor if fine pointer is supported (desktop mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Global listener to check if we are hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Spawn tiny leaves on click
    const handleMouseClick = (e: MouseEvent) => {
      const newParticles: ClickParticle[] = Array.from({ length: 6 }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1.5;
        return {
          id: particleIdCounter.current++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - Math.random() * 1.5, // upward drift
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8,
          scale: Math.random() * 0.4 + 0.3,
          opacity: 1,
        };
      });

      setParticles((prev) => [...prev, ...newParticles]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleMouseClick);

    let animFrame: number;
    
    // Lerping animation loop
    const updateCursor = () => {
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;
      
      // Interpolate position (lerp)
      cursorPos.current.x += dx * 0.16;
      cursorPos.current.y += dy * 0.16;

      const velocity = Math.sqrt(dx * dx + dy * dy);
      let targetAngle = 0;
      if (velocity > 0.5) {
        // Calculate angle of motion and rotate the leaf to face forward (adding offset for leaf model shape)
        targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 45;
      }

      // Smooth angle changes
      let angleDiff = targetAngle - cursorAngle.current;
      while (angleDiff < -180) angleDiff += 360;
      while (angleDiff > 180) angleDiff -= 360;
      cursorAngle.current += angleDiff * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) rotate(${cursorAngle.current}deg) scale(${isHovered ? 1.45 : 1.0})`;
      }

      // Update particles
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.04, // gravity drift
            vx: p.vx * 0.97,
            rotation: p.rotation + p.rotationSpeed,
            opacity: p.opacity - 0.025,
          }))
          .filter((p) => p.opacity > 0)
      );

      animFrame = requestAnimationFrame(updateCursor);
    };

    animFrame = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleMouseClick);
      cancelAnimationFrame(animFrame);
    };
  }, [isHovered]);

  if (!isVisible) return null;

  return (
    <>
      {/* Leaf Cursor Wrapper */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-3 -mt-3 pointer-events-none z-[9999] select-none hidden md:block"
        style={{
          willChange: "transform",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-forest drop-shadow-[0_2px_5px_rgba(61,90,64,0.45)]"
        >
          {/* Luxury Leaf Silhouette */}
          <path
            d="M2 22C4.5 17 8 13.5 13.5 11C19.5 8.2 21 3 22 2C21 3 15.8 4.5 13 10.5C10.5 16 7 19.5 2 22Z"
            fill="currentColor"
          />
          {/* Leaf vein */}
          <path
            d="M13 10.5C9.5 12.2 7.5 15.5 6 18"
            stroke="#F8FAF6"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
        </svg>
        {/* Soft aura glow following cursor */}
        <div
          className={`absolute inset-0 -m-3 bg-sage/20 rounded-full filter blur-md -z-10 transition-all duration-300 ${
            isHovered ? "scale-175 bg-herbal-soft/35 blur-lg" : "scale-100"
          }`}
        />
      </div>

      {/* Click Burst Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed top-0 left-0 -ml-1 -mt-1 pointer-events-none z-[9998] select-none"
          style={{
            transform: `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rotation}deg) scale(${p.scale})`,
            opacity: p.opacity,
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-herbal-soft/80"
          >
            <path
              d="M1 9C2.25 6.75 4 5.25 6.75 4.1C9.75 2.8 10.5 1.4 11 1C10.5 1.4 7.9 2.15 6.5 4.85C5.25 7.25 3.5 8.75 1 9Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </>
  );
}
