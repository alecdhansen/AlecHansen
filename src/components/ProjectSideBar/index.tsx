import { Props } from "../../utils/types";
import {
  ContentContainer,
  HeaderContent,
  Link,
  LinkContainer,
  ProjectNavContainer,
  Underline,
} from "./style";

const ProjectSideBar: React.FC<Props> = ({ setFocus, c1, c2 }) => {
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
          <Underline>
            <Link
              onClick={() => setFocus(2)}
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
          <Underline>
            <Link
              onClick={() => setFocus(3)}
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
              Newspaper Application
            </Link>
          </Underline>
          <Underline>
            <Link
              onClick={() => setFocus(4)}
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
        </LinkContainer>
      </ProjectNavContainer>
    </ContentContainer>
  );
};

export default ProjectSideBar;
