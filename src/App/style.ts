import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #212026;
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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;
