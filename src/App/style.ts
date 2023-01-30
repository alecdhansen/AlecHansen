import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #212026;
  position: absolute;
`;

export const ContentContainer = styled.div<{
  borderImage: string;
}>`
  width: 90vw;
  height: 100vh;
  position: relative;
  left: 5%;
  &:before,
  :after,
  > :first-child:before,
  > :first-child:after {
    position: absolute;
    width: 250px;
    height: 250px;
    content: "";
    border-image: ${({ borderImage }) => borderImage};
  }
  &:before {
    top: 0;
    left: 0;
    border-width: 20px 0 0 20px;
    z-index: 10;
  }
  &:after {
    bottom: 0;
    right: 0;
    border-width: 0 20px 20px 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    left: 0%;
  }
`;
