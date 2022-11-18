import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;


type MandalaPicture = {
  sizeInMillimeters: number,
  form: 'square' | 'circle'
}

type CircleMandala = {
  radius: number
}

export function App() {

  const mandala: CircleMandala = {
    radius: 200
  }

  const polygonSize = Math.PI * mandala.radius ** 2
  const multiplier = mandala.radius / 1080 * 2
  const price = polygonSize * 0.0108*2


  return (
    <StyledApp>
      <h1>Привет!</h1>
      {price + price * multiplier}
      <div css={`color: red`}>

      </div>
    </StyledApp>
  );
}

export default App;
