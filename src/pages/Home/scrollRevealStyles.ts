import { css } from "styled-components";

export type RevealVariant = "up" | "left" | "right" | "scale";

export type RevealMotionProps = {
  $delay?: number;
  $isVisible?: boolean;
  $variant?: RevealVariant;
};

const getHiddenTransform = (variant: RevealVariant) => {
  switch (variant) {
    case "left":
      return "translate3d(-36px, 0, 0) scale(0.98)";
    case "right":
      return "translate3d(36px, 0, 0) scale(0.98)";
    case "scale":
      return "translate3d(0, 18px, 0) scale(0.94)";
    case "up":
    default:
      return "translate3d(0, 36px, 0) scale(0.98)";
  }
};

export const revealStyles = css<RevealMotionProps>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible, $variant = "up" }) =>
    $isVisible ? "translate3d(0, 0, 0) scale(1)" : getHiddenTransform($variant)};
  transform-origin: center;
  transition:
    opacity 720ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${({ $isVisible, $delay = 0 }) =>
    $isVisible ? `${$delay}ms` : "0ms"};
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;
