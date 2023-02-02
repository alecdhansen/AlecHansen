import {
  AppContainer,
  BorderContainer,
  Container,
  HeaderContainer,
  MainContainer,
} from "./style";
import Header from "../components/Header";
import { TopCornerBorder, BottomCornerBorder } from "../components/Borders";
import { useState } from "react";
import FocusedContent from "../components/FocusedContent";
import ProjectSideBar from "../components/ProjectSideBar";
import { appColors, randomColor } from "./utils";

const App = () => {
  const [c1, setC1] = useState(randomColor(appColors, 1));
  const [c2, setC2] = useState(randomColor(appColors, 2));
  const [focus, setFocus] = useState(1);

  return (
    <>
      <AppContainer>
        <BorderContainer left="5%" marginTop="5px">
          <TopCornerBorder c1={c1} c2={c2} />
        </BorderContainer>
        <Container>
          <HeaderContainer>
            <Header setFocus={setFocus} setC1={setC1} setC2={setC2} />
          </HeaderContainer>
          <MainContainer>
            <FocusedContent focus={focus} setFocus={setFocus} c1={c1} c2={c2} />
            <ProjectSideBar focus={focus} setFocus={setFocus} />
          </MainContainer>
        </Container>
        <BorderContainer right="5%" bottom={0}>
          <BottomCornerBorder />
        </BorderContainer>
      </AppContainer>
    </>
  );
};

export default App;
