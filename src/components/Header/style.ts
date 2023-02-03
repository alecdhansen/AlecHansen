import styled from "styled-components/macro";
import { ImageProps } from "./types";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  position: relative;
  padding: 0 10% 0 8%;
`;

export const NavLeft = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 800px) {
    margin-left: 5%;
    width: 100%;
    left: 0%;
  }
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  z-index: 0;
  max-height: 50px;
  @media (max-width: 400px) {
    margin-right: 0%;
    margin-top: 40px;
    width: 100%;
    left: 0%;
    flex-wrap: wrap;
  }
  @media (min-width: 401px) and (max-width: 800px) {
    margin-right: 5%;
    margin-top: 130px;
    width: 100%;
    left: 0%;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled.a`
  padding-left: 10px;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.2);
    animation: 1s;
  }
`;

export const AlecImage = styled.img<ImageProps>`
  width: 175px;
  margin-top: 190px;
  margin-left: 20px;
  z-index: 0;
  cursor: pointer;

  -webkit-filter: drop-shadow(50px 50px 50px #212026);
  filter: drop-shadow(5px 5px 8px #212026);
  @keyframes createBox {
    from {
      margin-top: -200px;
    }
    to {
    }
  }
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
    animation: 1s;
  }
`;

export const DotContainer = styled.a`
  margin-top: 180px;
`;
