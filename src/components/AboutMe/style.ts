import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 170px;
  width: 100%;
`;

export const GreetingHeader = styled.h2`
  font-size: 6vw;
  margin: 0 0 33px 0;
  line-height: 3rem;
  width: 100%;
  @media (max-width: 400px) {
    font-size: 14vw;
    margin: 0 0 30px 0;
  }
  @media (min-width: 401px) and (max-width: 800px) {
    font-size: 14vw;
  }
`;

export const BlurbContainer = styled.p<{ borderImage?: string }>`
  border-image: ${({ borderImage }) => borderImage};
  border-left-width: 3px;
  border-left-style: solid;
  padding: 0 0 0 30px;
  font-size: 18px;
`;
export const Underline = styled.div`
  transition: all 0.1s linear;
  margin-top: 20px;
`;

export const Link = styled.a<{ borderImage?: string; hover?: string }>`
  border-image: ${({ borderImage }) => borderImage};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  color: #dedede;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border-image: ${({ hover }) => hover};
    color: #fff;
    transition: 0.3s;
  }
`;
