import styled, {keyframes} from 'styled-components'
import mandalaImage from '../../assets/home-images/square_15x15_2-klacniy_virviglaz.jpg'


const colorAnimation = keyframes`
  0% {
    background-color: #00bbff;
  }
  12% {
    background-color: rgb(5, 178, 255);
  }
  24% {
    background-color: rgb(4, 61, 255);
  }
  36% {
    background-color: rgb(255, 23, 151);
  }
  48% {
    background-color: rgb(231, 255, 0);
  }
  60% {
    background-color: rgb(0, 255, 170);
  }
  72% {
    background-color: rgb(33, 255, 27);
  }
  84% {
    background-color: white;
  }
  96% {
    background-color: #ea5a51;
  }
  100% {
    background-color: #00bbff;
  }
`

export const MandalaGridWrapperStyled = styled.div<{mandalaImage?: string}>`

  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  > * {
    transition: all 1.08s 0s linear;
    background: url(${(p) => {
      return p.mandalaImage || mandalaImage;
    }}) no-repeat center center #010008;
    background-size: contain;

    ${() => {
      const rows = []
      for (let i = 1; i <= 42; i++) {
        rows.push(`
&:nth-child(${i}) {
  transition-delay: ${i * 10}ms;
  transition-duration: ${2000 + i * 108}ms
}
`)
      }
      return rows.join()
    }

    }

    &:after {
      z-index: 3;
      pointer-events: none;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      mix-blend-mode: multiply;
      animation: ${colorAnimation} 22s cubic-bezier(0.64, -0.44, 0.51, 1.68) infinite;
    }
`
