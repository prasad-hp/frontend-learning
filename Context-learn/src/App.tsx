import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './pages/Button';
import Check from './pages/Check';
import ContextTheme from './context/Theme';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ContextTheme.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Button setTheme={setTheme} />} />
          <Route path='/check' element={<Check />} />
        </Routes>
      </BrowserRouter>
    </ContextTheme.Provider>
  );
}

export default App;
