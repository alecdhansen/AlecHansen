import styled from "styled-components";

export const Button = styled.a<{ theme?: any }>`
  padding-left: 10px;
  &:hover {
    transform: scale(1.2);
    animation: 1s;
  }
`;
