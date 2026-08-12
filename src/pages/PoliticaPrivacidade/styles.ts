import styled from "styled-components";
import { cores } from "../../styles";
import { revealStyles, type RevealMotionProps } from "../Home/scrollRevealStyles";

export const PolicyContent = styled.article<RevealMotionProps>`
  ${revealStyles}
  max-width: 840px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 48px);
  border: 1px solid ${cores.grayLight};
  border-radius: 18px;
  background-color: ${cores.white};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
`;

export const PolicyText = styled.p`
  color: ${cores.black};
  font-size: clamp(17px, 1.6vw, 20px);
  line-height: 1.8;
`;
