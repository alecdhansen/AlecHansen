import { Props } from "../../../utils/types";
import {
  Container,
  LinksContainer,
  TechnologiesContainer,
  TechnologyIcon,
  Link,
  Underline,
  ContentContainer,
} from "../style";
import { TitleHeader, BlurbContainer } from "../style";

const Braggem: React.FC<Props> = ({ c1, c2 }) => {
  return (
    <Container>
      <TitleHeader fontSize="85px">Braggem</TitleHeader>
      <ContentContainer
        borderImage={`linear-gradient(
      to bottom, 
      ${c1}, 
      ${c2}
    ) 1 100%;`}
      >
        <BlurbContainer>
          Braggem was built to provide users an exciting experience while
          following the NBA season. Predict game winners, view leaderboard,
          challenge other users, and customize your profile while showcasing
          your game-winner picking skills.
        </BlurbContainer>
        <TechnologiesContainer>
          <TechnologyIcon>React Js</TechnologyIcon>
          <TechnologyIcon>Python</TechnologyIcon>
          <TechnologyIcon>Django</TechnologyIcon>
          <TechnologyIcon>Django-Celery</TechnologyIcon>
          <TechnologyIcon>React-Bootstrap</TechnologyIcon>
          <TechnologyIcon>React-Router</TechnologyIcon>
          <TechnologyIcon>Heroku</TechnologyIcon>
          <TechnologyIcon>PostGres Database</TechnologyIcon>
          <TechnologyIcon>NBA Schedule API</TechnologyIcon>
        </TechnologiesContainer>
        <LinksContainer>
          <Underline>
            <Link
              href="https://braggem.herokuapp.com/"
              target="_blank"
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
              View Site
            </Link>
          </Underline>
          <Underline>
            <Link
              href="https://github.com/alecdhansen/ccs-final-project"
              target="_blank"
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
              Github Repo
            </Link>
          </Underline>
          <Underline>
            <Link
              href="https://www.youtube.com/watch?v=-ptcAcyyKY4"
              target="_blank"
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
              Youtube Walkthrough
            </Link>
          </Underline>
        </LinksContainer>
      </ContentContainer>
    </Container>
  );
};
export default Braggem;
