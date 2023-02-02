import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-right: 10px;
`;

export const GreetingHeader = styled.h2`
  font-size: 85px;
  margin: 0 0 30px 0;
`;

export const BlurbContainer = styled.p<{ borderImage?: string }>`
  border-image: ${({ borderImage }) => borderImage};
  border-left-width: 3px;
  border-left-style: solid;
  padding: 0 0 0 30px;
  font-size: 18px;
`;
