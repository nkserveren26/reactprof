import styled from 'styled-components';
import background from "./img/IMG_4871.jpg";
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Top } from './components/Top';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Header title='My Profile' />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
