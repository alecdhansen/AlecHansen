import { AppContainer, ContentContainer } from "./style";
import { colors, randomColor } from "./utils";
import Header from "../components/Header";

const App = () => {
  return (
    <>
      <AppContainer />
      <ContentContainer borderImage="#fff">
        <Header />
      </ContentContainer>
    </>
  );
};

export default App;
