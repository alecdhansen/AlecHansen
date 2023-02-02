import { AboutMeContainer, BlurbContainer, GreetingHeader } from "./style";
import { Props } from "../../utils/types";

const AboutMe: React.FC<Props> = ({ c1, c2 }) => {
  return (
    <AboutMeContainer>
      <GreetingHeader>Hello There.</GreetingHeader>
      <BlurbContainer
        borderImage={`linear-gradient(
      to bottom, 
      ${c1}, 
      ${c2}
    ) 1 100%;`}
      >
        My name is Alec Hansen. I'm a software developer currently residing in
        Greenville, South Carolina, USA. Contrary to popular belief, Lorem Ipsum
        is not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage.
      </BlurbContainer>
    </AboutMeContainer>
  );
};
export default AboutMe;
