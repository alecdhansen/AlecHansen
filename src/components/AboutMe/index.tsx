import {
  AboutMeContainer,
  BlurbContainer,
  Link,
  GreetingHeader,
  Underline,
} from "./style";
import { Props } from "../../utils/types";

const AboutMe: React.FC<Props> = ({ c1, c2 }) => {
  return (
    <AboutMeContainer>
      <GreetingHeader>Hello There!</GreetingHeader>
      <BlurbContainer
        borderImage={`linear-gradient(
      to bottom, 
      ${c1}, 
      ${c2}
    ) 1 100%;`}
      >
        My name is Alec Hansen. I'm a software developer currently residing in
        Greenville, South Carolina, USA. Coding has changed my life! My previous
        career molded in me a strong background in client care and team
        management. I now use these skills to build web and mobile applications
        with a great attention to detail and (when with a team) I collaborate
        with others thoughtfully and efficiently.
        <br />
        <br />
        I'm looking for my next opportunity. Let me generate solutions that fit
        your needs!
      </BlurbContainer>
      <Underline>
        <Link
          href="mailto:alecdhansen@gmail.com"
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
          Message Me!
        </Link>
      </Underline>
    </AboutMeContainer>
  );
};
export default AboutMe;
