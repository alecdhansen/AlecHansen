import styled from "styled-components";

export const Container = styled.div`
  margin-top: 200px;
  margin-right: 10px;
`;

export const TitleHeader = styled.h2<{ fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize};
  margin: 0 0 46px 0;
  pointer-events: none;
  flex-wrap: wrap;
`;

export const ContentContainer = styled.div<{ borderImage?: string }>`
  border-image: ${({ borderImage }) => borderImage};
  border-left-width: 3px;
  border-left-style: solid;
`;

export const BlurbContainer = styled.p`
  padding: 0 0 0 30px;
  font-size: 18px;
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 30px;
`;
export const TechnologyIcon = styled.span`
  background-color: #212026;
  color: #fff;
  border: 1px solid #fff;
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 11px;
  margin: 0 10px 5px 0;
  font-weight: bold;
  pointer-events: none;
`;

export const LinksContainer = styled.div`
  padding: 10px 0 0 30px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Underline = styled.div`
  transition: all 0.1s linear;
  margin: 0px 30px 10px 30px;
`;

export const Link = styled.a<{ borderImage?: string; hover?: string }>`
  border-image: ${({ borderImage }) => borderImage};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  font-size: 18px;
  line-height: 40px;
  margin: 10px 0 10px 0;
  color: #dedede;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border-image: ${({ hover }) => hover};
    color: #fff;
    transition: 0.3s;
  }
`;
