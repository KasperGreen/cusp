import {MandalaGrid} from "./mandala-grid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinimize, faMaximize} from '@fortawesome/free-solid-svg-icons'
import {FullScreen, useFullScreenHandle} from "react-full-screen";

export const Home = () => {
  const handle = useFullScreenHandle();

  return (
    <section>
      <FullScreen handle={handle}>
        <div css={`
          position: absolute;
          right: 6.14vmin;
          top: 6.14vmin;
          z-index: 1000500;

          & > button {
            background: none;
            border: none;
            cursor: pointer;
            transition: transform ease-in .2s;

            & > * {
              transition: transform ease-in .2s;
            }

            &:hover {
              transform: scale(1.1);

              & > * {
                color: #9390e2;
              }
            }

            &:active {
              transform: scale(.9);

              & > * {
                color: #9390e2;
              }


            }

          }
        `}>
          <button onClick={handle.active ? handle.exit : handle.enter}>
            <FontAwesomeIcon
              color={'#fff'}
              fontSize={'4.2vmin'}
              title={handle.active ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              icon={handle.active ? faMinimize : faMaximize}
            />
          </button>

        </div>

        <MandalaGrid/>
      </FullScreen>
    </section>
  )
}
