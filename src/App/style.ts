import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #212026;
  position: relative;
`;

export const BorderContainer = styled.div<{
  left?: any;
  right?: any;
  bottom?: number;
  marginTop?: any;
}>`
  position: absolute;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  margin-top: ${({ marginTop }) => marginTop};
`;
