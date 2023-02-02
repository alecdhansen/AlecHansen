import {
  AppContainer,
  BorderContainer,
  ContentContainer,
  MainContainer,
} from "./style";
import Header from "../components/Header";
import { TopCornerBorder, BottomCornerBorder } from "../components/Borders";
import { useState } from "react";
import FocusedContent from "../components/FocusedContent";
import Projects from "../components/ProjectSideBar";
import ProjectSideBar from "../components/ProjectSideBar";

const App = () => {
  const [borderColor, setBorderColor] = useState([0]);
  const [focus, setFocus] = useState(1);

  return (
    <>
      <AppContainer>
        <BorderContainer left="5%" marginTop="5px">
          <TopCornerBorder fill={borderColor} />
        </BorderContainer>
        <ContentContainer>
          <Header />
          <MainContainer>
            <FocusedContent focus={focus} setFocus={setFocus} />
            <ProjectSideBar focus={focus} setFocus={setFocus} />
          </MainContainer>
        </ContentContainer>
        <BorderContainer right="5%" bottom={0}>
          <BottomCornerBorder fill={borderColor} />
        </BorderContainer>
      </AppContainer>
    </>
  );
};

export default App;
