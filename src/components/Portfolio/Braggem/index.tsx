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
import { braggemTech } from "../utils";

const Braggem: React.FC<Props> = ({ c1, c2 }) => {
  return (
    <Container>
      <TitleHeader fontSize="85px" lineHeight="3rem">
        Braggem
      </TitleHeader>
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
          {braggemTech.map((tech) => (
            <TechnologyIcon>{tech}</TechnologyIcon>
          ))}
        </TechnologiesContainer>
        <LinksContainer>
          <Underline margin="0">
            <Link
              href="https://braggem.herokuapp.com/"
              target="_blank"
              fontSize="14px"
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
          <Underline margin="0">
            <Link
              href="https://github.com/alecdhansen/ccs-final-project"
              target="_blank"
              fontSize="14px"
              margin="10px"
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
          <Underline margin="0">
            <Link
              href="https://www.youtube.com/watch?v=-ptcAcyyKY4"
              target="_blank"
              fontSize="14px"
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
