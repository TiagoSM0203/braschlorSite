import { type ReactElement, useCallback, useEffect, useState } from "react";
import type { RevealMotionProps, RevealVariant } from "./scrollRevealStyles";

type ScrollRevealRenderProps = {
  revealProps: RevealMotionProps;
  revealRef: (element: HTMLElement | null) => void;
};

type ScrollRevealProps = {
  children: (props: ScrollRevealRenderProps) => ReactElement;
  delay?: number;
  rootMargin?: string;
  threshold?: number;
  variant?: RevealVariant;
};

const ScrollReveal = ({
  children,
  delay = 0,
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.18,
  variant = "up",
}: ScrollRevealProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleRef = useCallback((node: HTMLElement | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (isVisible || !element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, isVisible, rootMargin, threshold]);

  return children({
    revealProps: {
      $delay: delay,
      $isVisible: isVisible,
      $variant: variant,
    },
    revealRef: handleRef,
  });
};

export default ScrollReveal;
