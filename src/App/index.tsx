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
            <ProjectSideBar focus={focus} setFocus={setFocus} c1={c1} c2={c2} />
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

// export const portfolioData = [
//
//   {
//     title: "Newspaper Applicatoin",
//     description:
//       "Full CRUD application designed for three distinct user types:",
//     subtext: [
//       "● The general user is able to view articles on the homepage.",
//       "● Authors are able to write articles and submit for review.",
//       "● The editor is able to approve articles for publication or reject those articles. He also can archive articles that are live on the homepage and view the archives.",
//     ],
//     href: "https://newspaper-app-alecdhansen.herokuapp.com/",
//     mediaUri: require("../media/newspaper.png"),
//   },
//   {
//     title: "Pixel Perfect",
//     description:
//       "Responsive recreation of a blog site that mirrors every element down to the pixel. This project showcases my skill to combine HTML and CSS to match exactly the request of a client.",
//     href: "https://alecdhansen.github.io/pixel-perfect/",
//     mediaUri: require("../media/pixelperfect.png"),
//   },
// ];

// export const technologies = [
//   "React.js, JavaScript, Python, Django, HTML, CSS, Bootstrap",
// ];
// f;
