import styled from "styled-components/macro";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 175px;
  position: relative;
  padding: 0 5% 0 5%;
`;

export const NavLeft = styled.div`
  width: 50%;
  margin-left: 5%;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 800px) {
    margin-left: 10%;
    width: 100%;
    left: 0%;
  }
`;
export const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
  width: 50%;
  z-index: 0;
  @media (max-width: 800px) {
    margin-right: 10%;
    width: 100%;
    left: 0%;
  }
`;

export interface ImageProps {
  width?: number;
  marginTop?: number;
  zIndex?: number;
  clipPath?: any;
  animation?: any;
}

export const AlecImage = styled.img<ImageProps>`
  width: 150px;
  margin-top: 100px;
  z-index: 0;
  clip-path: polygon(28% 0, 100% 0%, 78% 100%, 0% 100%);
  @keyframes createBox {
    from {
      margin-top: -200px;
    }
    to {
    }
  }
  animation: createBox 2.5s ease;
`;
