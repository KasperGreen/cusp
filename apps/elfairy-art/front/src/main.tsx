/// <reference types="styled-components/cssprop" />
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
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
        <Route index element={<section>
          <Home />
        </section>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
