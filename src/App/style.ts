import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const TopBorderContainer = styled.div`
  width: 90%;
  height: 100%;
  left: 5%;
  pointer-events: none;
  position: absolute;
`;

export const BottomBorderContainer = styled.div`
  width: 90%;
  height: 100%;
  right: 5%;
  pointer-events: none;
  position: absolute;
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
  }
`;

export const CopywriteContainer = styled.div`
  position: absolute;
  right: 10%;
  margin-top: 20px;
`;
