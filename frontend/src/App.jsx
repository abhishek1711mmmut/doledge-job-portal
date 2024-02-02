// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Home />
        <Routes>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;