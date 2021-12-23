import './Fonts.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
    <BrowserRouter>
        {/* <Navbar /> */} 
        {/* <Sidebar /> */} 
        <Home /> 
        <Routes>
            {/* <Home /> */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route />
        </Routes>
    </BrowserRouter>
  );
}

export default App; 
