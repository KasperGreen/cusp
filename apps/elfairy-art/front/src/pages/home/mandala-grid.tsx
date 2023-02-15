import {FC, useEffect, useRef, useState} from "react";
import {MandalaGridWrapperStyled} from "./mandala-grid-wrapper.styled";
import {stickers} from "./data/stickers";
import _ from 'lodash'
import {HomeMandalaStyledSection} from "./home-mandala.styled.section";

export const MandalaGrid: FC = () => {

  const rotationTimerRef = useRef<NodeJS.Timer>()

  const [currentImage, setCurrentImage] = useState<string>('')

  function setNewRandomImage () {
    const mandala = _.sample(stickers)
    setCurrentImage(mandala?.image_url || '')
  }

  useEffect(() => {
    rotationTimerRef.current = setInterval(setNewRandomImage, 10800)
    setNewRandomImage()
    return () => {
      clearInterval(rotationTimerRef.current)
    }
  }, [])

  return (
    <MandalaGridWrapperStyled mandalaImage={currentImage}>
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />
      <HomeMandalaStyledSection />

      <HomeMandalaStyledSection
        css={`
grid-column: 2 / span 2;
grid-row: 1 / span 4;
@media(orientation: portrait) {
grid-column: 2 / span 4;
grid-row: 1 / span 3;
}
`}
      />
      <HomeMandalaStyledSection
        css={`
grid-column: 2 / span 2;
grid-row: 5 / span 4;
@media(orientation: portrait) {
grid-column: 8 / span 4;
grid-row: 1 / span 3;
}
`}
      />

      <HomeMandalaStyledSection
        css={`
grid-column: 2 / span 2;
grid-row: 9 / span 4;
@media(orientation: portrait) {
grid-column: 2 / span 4;
grid-row: 10 / span 3;
}
`}
      />

      <HomeMandalaStyledSection
        css={`
grid-column: 10 / span 2;
grid-row: 1 / span 4;
@media(orientation: portrait) {
grid-column: 8 / span 4;
grid-row: 10 / span 3;
}
`}
      />
      <HomeMandalaStyledSection
        css={`
grid-column: 10 / span 2;
grid-row: 5 / span 4;
@media(orientation: portrait) {
grid-column: auto;
grid-row: auto;
}
`}
      />

      <HomeMandalaStyledSection
        css={`
grid-column: 10 / span 2;
grid-row: 9 / span 4;
@media(orientation: portrait) {
grid-column: auto;
grid-row: auto;
}
`}
      />

      <HomeMandalaStyledSection
        css={`
grid-column: 4 / span 6;
grid-row: 1 / span 12;
@media(orientation: portrait) {
grid-column: 2 / span 10;
grid-row: 4 / span 6;
}
`}
      />
    </MandalaGridWrapperStyled>
  )
}
