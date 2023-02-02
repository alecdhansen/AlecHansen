import { Props } from "../../utils/types";
import AboutMe from "../AboutMe";
import Braggem from "../Portfolio/Braggem";
import NewspaperApp from "../Portfolio/NewspaperApp";
import PixelPerfect from "../Portfolio/PixelPerfect";
import { ContentContainer } from "./style";

const FocusedContent: React.FC<Props> = ({ focus, c1, c2 }) => {
  let content;
  if (focus === 1) {
    content = <AboutMe c1={c1} c2={c2} />;
  }
  if (focus === 2) {
    content = <Braggem />;
  }
  if (focus === 3) {
    content = <NewspaperApp />;
  }
  if (focus === 4) {
    content = <PixelPerfect />;
  }

  //   } else if (focus === 2) {
  //     content = <ContactList />;
  //   } else if (focus === 3) {
  //     content = <BlogReadingSite />;
  //   } else if (focus === 4) {
  //     content = <BookmarkApp />;
  //   } else if (focus === 5) {
  //     content = <BlogCMS />;
  //   }
  return <ContentContainer>{content}</ContentContainer>;
};

export default FocusedContent;
