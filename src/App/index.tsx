import { AppContainer, ContentContainer } from "./style";
import { colors, randomColor } from "./utils";
import Header from "../components/Header";

const App = () => {
  return (
    <>
      <AppContainer>
        <ContentContainer>
          <Header />
        </ContentContainer>
      </AppContainer>
    </>
  );
};

export default App;
