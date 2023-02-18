import styled from "styled-components";

export const Button = styled.a`
  background: none;
  border: none;
  padding: 0px 5px;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s linear;
  }
`;
