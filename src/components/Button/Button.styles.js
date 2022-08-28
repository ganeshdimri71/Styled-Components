import styled,{keyframes} from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff " : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#fff")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff " : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? "#4caf50" : "#fff")};
  }
`;

export const FancyButton = styled(StyledButton)`
  background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs((props) => {
  {
    type: "submit";
  }
})`
  box-sizing: 0 9x #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    transform: translateY(4px);
  }
`;

const rotate = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg)
}
`

export const AnimatedLogo = styled.img`
height: 40vmin;
pointer-events:none;
animation: ${rotate} infinite 2s linear;
`;