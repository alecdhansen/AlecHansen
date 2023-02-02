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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const MainContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
