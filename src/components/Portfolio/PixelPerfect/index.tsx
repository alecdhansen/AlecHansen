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
import { pixelTech } from "../utils";

const PixelPerfect: React.FC<Props> = ({ c1, c2 }) => {
  return (
    <Container>
      <TitleHeader fontSize="80px" lineHeight="4rem">
        Pixel Perfect
      </TitleHeader>
      <ContentContainer
        borderImage={`linear-gradient(
      to bottom, 
      ${c1}, 
      ${c2}
    ) 1 100%;`}
      >
        <BlurbContainer>
          Responsive recreation of a blog site that mirrors every element down
          to the pixel. This project showcases my skill to combine HTML and CSS
          to match exactly the request of a client.
        </BlurbContainer>
        <TechnologiesContainer>
          {pixelTech.map((tech) => (
            <TechnologyIcon>{tech}</TechnologyIcon>
          ))}
        </TechnologiesContainer>
        <LinksContainer>
          <Underline>
            <Link
              href="https://alecdhansen.github.io/pixel-perfect/"
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
              href="https://github.com/alecdhansen/pixel-perfect"
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
        </LinksContainer>
      </ContentContainer>
    </Container>
  );
};
export default PixelPerfect;
