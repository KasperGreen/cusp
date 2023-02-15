/// <reference types="styled-components/cssprop" />
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {Home} from "./pages/home/home";
import {GlobalStylesStyled} from "../styles/GlobalStyles.styled";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalStylesStyled />
    <BrowserRouter>
      <Routes>
        <Route path={'/lol'} element={<h2>kol</h2>} />
        <Route path={'/'} element={<section>
          <Home />
        </section>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
