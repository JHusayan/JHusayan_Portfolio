import { useEffect, useState, RefObject } from "react";

export function useRevealOnce(
  ref?: RefObject<HTMLElement>,
  threshold = 0.6
) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect(); // once only
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);

  return show;
}