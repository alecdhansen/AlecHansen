import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
export const HeaderContent = styled.h3`
  font-size: 30px;
  padding: none;
  margin-bottom: 20px;
`;
export const ProjectNavContainer = styled.div<{
  borderImage?: string;
  hover?: string;
}>`
  border-image: ${({ borderImage }) => borderImage};
  border-top-width: 3px;
  border-top-style: solid;
  border-left-width: 3px;
  border-left-style: solid;
  border-top-left-radius: 10px;
  padding: 10px 0 0 20px;
  &:hover {
    border-image: ${({ hover }) => hover};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Underline = styled.div`
  transition: all 0.1s linear;
  margin: 10px 0 10px 0;
  &:hover {
    transform: scale(1.1);
    animation: 1s;
    padding-left: 6px;
  }
`;

export const Link = styled.a<{ borderImage?: string; hover?: string }>`
  border-image: ${({ borderImage }) => borderImage};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  font-size: 20px;
  line-height: 40px;
  margin: 10px 0 10px 0;
  color: #fff;
  cursor: pointer;
  &:hover {
    border-image: ${({ hover }) => hover};
    color: #e3e1e1;
  }
`;
