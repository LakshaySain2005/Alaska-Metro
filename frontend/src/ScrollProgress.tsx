
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }

      const currentScroll = lenis?.scroll ?? window.scrollY;
      const percentage = (currentScroll / scrollableHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    updateProgress();

    const unsubscribe = lenis?.on("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    return () => {
      unsubscribe?.();
      window.removeEventListener("resize", updateProgress);
    };
  }, [lenis]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "3px",
        backgroundColor: "#ea580c",
        zIndex: 99999,
        pointerEvents: "none",
      }}
    />
  );
}