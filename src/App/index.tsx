import {
  AppContainer,
  TopBorderContainer,
  BottomBorderContainer,
} from "./style";
import { colors, randomColor } from "./utils";
import Header from "../components/Header";
import TopCornerBorder from "../components/icons/TopCornerBorder";
import BottomCornerBorder from "../components/icons/BottomCornerBorder";

const App = () => {
  return (
    <>
      <AppContainer>
        <TopBorderContainer>
          <TopCornerBorder />
        </TopBorderContainer>
        <BottomBorderContainer>
          <BottomCornerBorder />
        </BottomBorderContainer>
        <Header />
      </AppContainer>
    </>
  );
};

export default App;
