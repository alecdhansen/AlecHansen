import {
  AppContainer,
  BottomBorderContainer,
  Container,
  CopywriteContainer,
  HeaderContainer,
  MainContainer,
  TopBorderContainer,
} from "./style";
import Header from "../components/Header";
import { TopCornerBorder, BottomCornerBorder } from "../components/Borders";
import { useState } from "react";
import FocusedContent from "../components/FocusedContent";
import ProjectSideBar from "../components/ProjectSideBar";
import { appColors, randomColor, checkContainer } from "./utils";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Themes";
import { useDarkMode } from "../hooks/useDarkMode";

const App = () => {
  const [c1, setC1] = useState(randomColor(appColors, 1));
  const [c2, setC2] = useState(randomColor(appColors, 2));
  const [focus, setFocus] = useState(1);
  const [colorTheme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = colorTheme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <AppContainer>
          <TopBorderContainer>
            <TopCornerBorder c1={c1} c2={c2} />
            <input
              type="color"
              onChange={(e: any) => setC1(e.target.value)}
              defaultValue={c1}
            />
            <input
              type="color"
              onChange={(e: any) => setC2(e.target.value)}
              defaultValue={c2}
            />
          </TopBorderContainer>
          <Container>
            <HeaderContainer>
              <Header
                setFocus={setFocus}
                setC1={setC1}
                setC2={setC2}
                themeToggler={themeToggler}
                colorTheme={colorTheme}
              />
            </HeaderContainer>
            <MainContainer>
              <FocusedContent
                focus={focus}
                setFocus={setFocus}
                c1={c1}
                c2={c2}
              />
              <ProjectSideBar
                focus={focus}
                setFocus={setFocus}
                c1={c1}
                c2={c2}
              />
            </MainContainer>
          </Container>
          <BottomBorderContainer
            transform={checkContainer(focus)}
            mTransform="translateY(-200px)"
          >
            <BottomCornerBorder />
            <CopywriteContainer>&copy; Alec Hansen, 2023</CopywriteContainer>
          </BottomBorderContainer>
        </AppContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
