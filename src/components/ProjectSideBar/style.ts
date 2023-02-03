import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media (max-width: 600px) {
    margin-top: 50px;
  }
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

export const Underline = styled.div<{
  transform?: string;
  hTransform?: string;
  pLeft?: string;
  hPleft?: string;
  mLeft?: string;
}>`
  transition: all 0.1s linear;
  margin: 10px 0 10px 0;
  transform: ${({ transform }) => transform};
  padding-left: ${({ pLeft }) => pLeft};
  transition: 0.3s;
  &:hover {
    transform: ${({ hTransform }) => hTransform};
    animation: 1s;
    padding-left: ${({ hPleft }) => hPleft};
    transition: 0.3s;
  }
  @media (max-width: 400px) {
    margin-left: ${({ mLeft }) => mLeft};
  }
`;

export const Link = styled.a<{
  borderImage?: string;
  hover?: string;
  cursor?: string;
}>`
  border-image: ${({ borderImage }) => borderImage};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  font-size: 20px;
  line-height: 40px;
  margin: 10px 0 10px 0;
  cursor: ${({ cursor }) => cursor};
  &:hover {
    border-image: ${({ hover }) => hover};
  }
`;
