import styled from 'styled-components';
import {MandalaPrice} from "./MandalaPrice";

const StyledApp = styled.div`
  // Your style here
`;



type CircleMandala = {
  radius: number
}

export function App() {

  const mandala: CircleMandala = {
    radius: 500
  }
  const price = MandalaPrice.calculate(mandala.radius)


  return (
    <StyledApp>
      <h1>Привет!</h1>
      {price}
      <div css={`color: red`}>

      </div>
    </StyledApp>
  );
}

export default App;
