import { useState } from "react";
import StyledButton,{FancyButton} from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
      <br />
      <StyledButton variant="outline">Styled Button</StyledButton>
      <br />
      <FancyButton as='a'>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
