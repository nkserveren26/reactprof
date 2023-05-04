import styled from 'styled-components';
import background from "./img/IMG_4871.jpg";
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Top } from './components/Top';
import { About } from './components/About';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Header title='My Profile' />
      <Box sx={{ backgroundColor: 'black', }}>
        <SDiv>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />}>
          </Route>
          <Route path="/about" element={<About />}>
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
