import './Fonts.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
    <BrowserRouter>
        <Home /> 
        <Routes>
            <Route />
        </Routes>
    </BrowserRouter>
  );
}

export default App; 
