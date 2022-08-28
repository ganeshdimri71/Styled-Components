import { useState } from "react";
import StyledButton from "./components/Button/Button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
    </div>
  );
}

export default App;
