import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #212026;
`;

export const ContentContainer = styled.div`
  position: absolute;
  width: 90%;
  height: 100%;
  left: 5%;
  background: linear-gradient(to right, red 25px, transparent 0px) 0 0,
    linear-gradient(to left, black 25px, transparent 4px) 100% 100%,
    linear-gradient(to bottom, black 25px, transparent 4px) 0 0,
    linear-gradient(to top, black 25px, transparent 4px) 100% 100%;

  background-repeat: no-repeat;
  background-size: 300px 300px;
`;
