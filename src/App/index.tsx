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

const App = () => {
  const [borderColor, setBorderColor] = useState([0]);
  const [focus, setFocus] = useState(1);

  return (
    <>
      <AppContainer>
        <BorderContainer left="05%" marginTop="5px">
          <TopCornerBorder fill={borderColor} />
        </BorderContainer>
        <Container>
          <HeaderContainer>
            <Header setFocus={setFocus} />
          </HeaderContainer>
          <MainContainer>
            <FocusedContent focus={focus} setFocus={setFocus} />
            <ProjectSideBar focus={focus} setFocus={setFocus} />
          </MainContainer>
        </Container>
        <BorderContainer right="5%" bottom={0}>
          <BottomCornerBorder fill={borderColor} />
        </BorderContainer>
      </AppContainer>
    </>
  );
};

export default App;
