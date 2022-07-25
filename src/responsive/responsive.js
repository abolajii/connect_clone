import { css } from "styled-components";

export const mobileResponsive = (props) => {
  return css`
    @media (max-width: 768px) {
      ${props}
    }
  `;
};
