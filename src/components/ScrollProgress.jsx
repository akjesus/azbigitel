import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const barRef = useRef(null);
  const progressRef = useRef(0);
  const targetRef = useRef(0);

  useEffect(() => {
    const updateTarget = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      targetRef.current = window.scrollY / totalHeight;
    };

    const animate = () => {
      // smooth interpolation (lerp)
      progressRef.current += (targetRef.current - progressRef.current) * 0.08;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progressRef.current})`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", updateTarget, { passive: true });

    animate();

    return () => window.removeEventListener("scroll", updateTarget);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[#9CE23A] to-[#29C87D] origin-left scale-x-0"
        style={{
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
