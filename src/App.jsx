import { useState } from "react";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { AnimatedLogo } from "./components/Button/Button";
import logo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AnimatedLogo src={logo} />
      <StyledButton type="submit">Styled Button</StyledButton>
      <br />
      <StyledButton variant="outline">Styled Button</StyledButton>
      <br />
      <FancyButton as="a">Fancy Button</FancyButton>
      <br />
      <SubmitButton as="a">Attribute Button</SubmitButton>
    </div>
  );
}

export default App;
