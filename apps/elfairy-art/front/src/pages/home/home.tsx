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
        <nav css={`
          background: rgba(0,0,0,0.84);
          color: white;
          font-size: 3.14vmin;
          @media(orientation: portrait) {
            font-size: 9vmin;
          }
          position: absolute;
          z-index: 2;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          padding: 2vw;

          ul {
            list-style: none;

            li {
              margin: 0;
            }

            a {
              color: white;
            }
          }
        `}>
          <h1>Contacts</h1>
          <h2>@elfafeya</h2>
          <ul>
            <li><a href={'https://t.me/elfafeya'} rel={'noreferrer'} target={"_blank"}>telegram</a></li>
            <li><a href={'https://instagram.com/elfafeya'} rel={'noreferrer'} target={"_blank"}>instagram</a></li>
            <li><a href={'https://facebook.com/elfafeya'} rel={'noreferrer'} target={'_blank'}>facebook</a></li>
            <li><a href={'https://vk.com/elfafeya'} rel={'noreferrer'} target={'_blank'}>vkontakte</a></li>
          </ul>
        </nav>
      </FullScreen>
    </section>
  )
}
