import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const TopBorderContainer = styled.div`
  left: 5%;
  pointer-events: none;
  position: absolute;
  @media (max-width: 800px) {
    left: 0%;
  }
`;

export const BottomBorderContainer = styled.div<{ transform?: string }>`
  width: 95%;
  pointer-events: none;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  transform: translateY(-271px);
  @media (max-width: 800px) {
    right: 0%;
    transform: ${({ transform }) => transform};
  }
`;

export const CopywriteContainer = styled.div`
  position: absolute;
  right: 5%;
  bottom: 10%;
  @media (max-width: 800px) {
    right: 15%;
  }
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
  @media (max-width: 800px) {
    flex-direction: column;
    width: 90%;
  }
`;
