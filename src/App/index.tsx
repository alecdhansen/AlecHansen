import { AppContainer, BorderContainer } from "./style";
import Header from "../components/Header";
import { TopCornerBorder, BottomCornerBorder } from "../components/Borders";
import { useEffect, useState } from "react";

const App = () => {
  const [borderColor, setBorderColor] = useState([0]);
  return (
    <>
      <AppContainer>
        <BorderContainer left="5%" marginTop="5px">
          <TopCornerBorder fill={borderColor} />
        </BorderContainer>
        <BorderContainer right="5%" bottom={0}>
          <BottomCornerBorder fill={borderColor} />
        </BorderContainer>
        <Header />
      </AppContainer>
    </>
  );
};

export default App;
