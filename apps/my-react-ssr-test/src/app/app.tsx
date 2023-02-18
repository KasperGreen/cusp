// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Helmet from 'react-helmet'
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Helmet>
        <title>Trololo</title>
      </Helmet>
      <NxWelcome title="my-react-ssr-test" />

      <div />
    </>
  );
}

export default App;
