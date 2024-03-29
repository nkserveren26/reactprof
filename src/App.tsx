import styled from 'styled-components';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Top } from './components/pages/Top';
import { About } from './components/pages/About';
import Box from '@mui/material/Box';
import { Experience } from './components/pages/Experience';
import React from 'react';
import { ScrollTop } from './components/scroll/ScrollToTop';
import { Blog } from './components/pages/Blog';

function App() {
  return (
    <div className="App">
      <Box sx={{ backgroundColor: 'black', }}>
        <SDiv>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header title='N.K Portfolio' />
            <ScrollTop />
            <Routes>
              <Route path="/" element={<Top />}>
              </Route>
              <Route path="/about" element={<About />}>
              </Route>
              <Route path="/experience" element={<Experience />}>
              </Route>
              <Route path="/blog" element={<Blog />}>
              </Route>
            </Routes>
          </BrowserRouter>
        </SDiv>
      </Box>
    </div>
  );
};

const SDiv = styled.div`
margin-left: 2%;
margin-right: 2%;
`;

export default App;
