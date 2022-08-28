import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StyledButton, {
  FancyButton,
  SubmitButton,
  AnimatedLogo,
  DarkButton,
} from "./components/Button/Button";
import logo from "./assets/react.svg";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

const GlobalStyle = createGlobalStyle`
button{
  font-family:${(props) => props.theme.fontFamily}
}
`;
function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <AnimatedLogo src={logo} />
        <StyledButton type="submit">Styled Button</StyledButton>
        <br />
        <StyledButton variant="outline">Styled Button</StyledButton>
        <br />
        <FancyButton as="a">Fancy Button</FancyButton>
        <br />
        <SubmitButton>Attribute Button</SubmitButton>
        <br />
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
