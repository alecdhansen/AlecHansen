import styled from "styled-components/macro";
import { ImageProps, InputProps } from "./types";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  position: relative;
  padding: 0 10% 0 8%;
  @media (max-width: 800px) {
    padding: 0%;
  }
`;

export const NavLeft = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  justify-content: flex-start;
  z-index: 100;
  @media (min-width: 545px) and (max-width: 800px) {
    margin-left: 10%;
    width: 40%;
  }
  @media (min-width: 445px) and (max-width: 545px) {
    margin-left: 5%;
  }
  @media (max-width: 445px) {
    margin-left: 8%;
    width: 100%;
  }
`;

export const NavRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  z-index: 0;
  max-height: 50px;
  @media (min-width: 445px) and (max-width: 950px) {
    flex-direction: column-reverse;
    margin-top: 240px;
  }
`;

export const Icons = styled.div`
  display: flex;
  @media (min-width: 445px) and (max-width: 950px) {
    margin-right: 0%;
    /* margin-top: 50px; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: -100px;
  }
  @media (max-width: 445px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;
    margin-right: 15px;
    & > :nth-child(even) {
      margin-top: 40px;
      margin-left: -35px;
      max-height: 40px;
    }
  }
`;

export const Pickers = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const NavLink = styled.a`
  padding: 0px 10px;
  transition: all 0.2s linear;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s linear;
  }
  @media (max-width: 445px) {
    &:hover {
      transform: scale(1);
    }
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
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    animation: 1s;
  }
  @media (max-width: 445px) {
    &:hover {
      transform: scale(1);
    }
  }
`;

export const DotContainer = styled.a`
  margin-top: 180px;
`;

export const IconContainer = styled.div`
  padding: 0px 10px;
  transition: all 0.2s linear;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s linear;
  }

  @media (max-width: 445px) {
    &:hover {
      transform: scale(1);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  @media (min-width: 445px) and (max-width: 950px) {
    margin-bottom: 10px;
  }
`;

export const ColorInput = styled.input.attrs(() => ({
  className: "animate__animated animate__zoomIn",
}))<InputProps>`
  cursor: pointer;
  -webkit-appearance: none;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${({ marginRight }) => marginRight};
  ::-webkit-color-swatch-wrapper {
    padding: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  ::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  @media (max-width: 445px) {
    top: ${({ mtop }) => mtop};
    left: ${({ mleft }) => mleft};
    position: absolute;
  }
`;
