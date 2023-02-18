import { Props } from "../../utils/types";
import {
  ContentContainer,
  HeaderContent,
  Link,
  LinkContainer,
  ProjectNavContainer,
  Underline,
} from "./style";

const ProjectSideBar: React.FC<Props> = ({ focus, setFocus, c1, c2 }) => {
  return (
    <ContentContainer>
      <HeaderContent>Projects</HeaderContent>
      <ProjectNavContainer
        borderImage={`linear-gradient(
        to right,
        ${c1},
        ${c2}
      ) 1 40%;`}
        hover={`linear-gradient(
        to right,
        ${c2},
        ${c1}
      ) 1 40%;`}
      >
        <LinkContainer>
          <Underline
            transform={focus === 2 ? "scale(1.3)" : ""}
            pLeft={focus === 2 ? "27px" : ""}
            mLeft={focus === 2 ? "7px" : ""}
            hPleft={focus === 2 ? "-10px" : "10px"}
          >
            <Link
              onClick={() => setFocus(2)}
              cursor="pointer"
              borderImage={`linear-gradient(
        to left,
        ${c1},
        ${c2}
      ) 1 10%;`}
              hover={`linear-gradient(
        to left,
        ${c2},
        ${c1}
      ) 1 10%;`}
            >
              Braggem
            </Link>
          </Underline>
          <Underline
            transform={focus === 3 ? "scale(1.3)" : ""}
            pLeft={focus === 3 ? "27px" : ""}
            mLeft={focus === 3 ? "7px" : ""}
            hPleft={focus === 3 ? "-10px" : "10px"}
          >
            <Link
              onClick={() => setFocus(3)}
              cursor="pointer"
              borderImage={`linear-gradient(
        to left,
        ${c1},
        ${c2}
      ) 1 10%;`}
              hover={`linear-gradient(
        to left,
        ${c2},
        ${c1}
      ) 1 10%;`}
            >
              Newspaper App
            </Link>
          </Underline>
          <Underline
            transform={focus === 4 ? "scale(1.3)" : ""}
            pLeft={focus === 4 ? "27px" : ""}
            mLeft={focus === 4 ? "7px" : ""}
            hPleft={focus === 4 ? "-10px" : "10px"}
          >
            <Link
              onClick={() => setFocus(4)}
              cursor="pointer"
              borderImage={`linear-gradient(
        to left,
        ${c1},
        ${c2}
      ) 1 10%;`}
              hover={`linear-gradient(
        to left,
        ${c2},
        ${c1}
      ) 1 10%;`}
            >
              Pixel Perfect
            </Link>
          </Underline>
          <Underline pLeft="" hPleft="0px" hTransform="scale(1)">
            <Link
              cursor="default"
              borderImage={`linear-gradient(
              to left,
              ${c1},
              ${c2}
            ) 1 10%;`}
              hover={`linear-gradient(
              to left,
              ${c2},
              ${c1}
            ) 1 10%;`}
            >
              This Website!
            </Link>
          </Underline>
        </LinkContainer>
      </ProjectNavContainer>
    </ContentContainer>
  );
};

export default ProjectSideBar;
