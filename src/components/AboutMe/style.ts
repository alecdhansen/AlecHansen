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

export const Underline = styled.div`
  margin-top: 20px;
  margin-left: 35px;
`;

export const BlurbContainer = styled.p<{ borderImage?: string }>`
  border-image: ${({ borderImage }) => borderImage};
  border-left-width: 3px;
  border-left-style: solid;
  padding: 0 0 0 30px;
  font-size: 18px;
`;

export const Link = styled.a<{ borderImage?: string; hover?: string }>`
  border-image: ${({ borderImage }) => borderImage};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  cursor: pointer;
  &:hover {
    border-image: ${({ hover }) => hover};
  }
`;
