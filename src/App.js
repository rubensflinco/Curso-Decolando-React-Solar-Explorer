import { ThemeProvider } from '@mui/material';
import tema from './Tema';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/inicio';



export default function App() {
  return (<>
    <ThemeProvider theme={tema}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Inicio/>} /> 

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>);
}
